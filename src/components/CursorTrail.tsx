import { useEffect, useRef } from 'react'

type Particle = {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    size: number
}

export function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrame = 0
        let width = 0
        let height = 0
        let particles: Particle[] = []

        // Track targeted mouse positions separate from particle logic
        const mouse = { x: 0, y: 0, lastX: 0, lastY: 0, moved: false }

        const DPR = Math.min(window.devicePixelRatio || 1, 2)
        const MAX_PARTICLES = 60 // Cut max particles in half to prevent cluttering

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width * DPR
            canvas.height = height * DPR
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
        }

        const handleMove = (event: MouseEvent) => {
            if (!mouse.moved) {
                mouse.lastX = event.clientX
                mouse.lastY = event.clientY
                mouse.moved = true
            }
            mouse.x = event.clientX
            mouse.y = event.clientY
        }

        const drawParticle = (p: Particle) => {
            const alpha = 1 - p.life / p.maxLife
            const radius = Math.max(0, p.size * alpha)

            // Soft outer glow (reduced intensity)
            ctx.beginPath()
            ctx.fillStyle = `rgba(170, 35, 255, ${alpha * 0.12})`
            ctx.arc(p.x, p.y, radius * 1.5, 0, Math.PI * 2)
            ctx.fill()

            // Solid inner core
            ctx.beginPath()
            ctx.fillStyle = `rgba(170, 35, 255, ${alpha * 0.35})`
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
            ctx.fill()
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Spawn particles inside the loop tied to frame rate, not mouse events
            if (mouse.moved) {
                const dx = mouse.x - mouse.lastX
                const dy = mouse.y - mouse.lastY
                const distance = Math.hypot(dx, dy)

                if (distance > 0.5) {
                    // Capped steps to keep a light, responsive trail without bloating
                    const steps = Math.min(3, Math.max(1, Math.floor(distance / 15)))

                    for (let i = 0; i < steps; i++) {
                        if (particles.length >= MAX_PARTICLES) {
                            particles.shift()
                        }

                        const t = i / steps
                        particles.push({
                            x: mouse.lastX + dx * t,
                            y: mouse.lastY + dy * t,
                            vx: dx * 0.05 + (Math.random() - 0.5) * 0.3,
                            vy: dy * 0.05 + (Math.random() - 0.5) * 0.3,
                            life: 0,
                            maxLife: 15 + Math.random() * 10, // Shorter life = cleaner tail
                            size: 4 + Math.random() * 5,      // Smaller baseline size
                        })
                    }
                }

                // Keep history updated linearly
                mouse.lastX = mouse.x
                mouse.lastY = mouse.y
            }

            // Update and render active particles
            particles = particles.filter((p) => p.life < p.maxLife)
            for (const p of particles) {
                p.x += p.vx
                p.y += p.vy
                p.vx *= 0.96 // Slightly higher drag so particles don't overshoot wildly
                p.vy *= 0.96
                p.life += 1
                drawParticle(p)
            }

            animationFrame = requestAnimationFrame(animate)
        }

        resize()
        animate()

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMove)

        return () => {
            cancelAnimationFrame(animationFrame)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0 opacity-80"
            aria-hidden="true"
        />
    )
}