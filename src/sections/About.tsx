// About.tsx
export function About() {
    return (
        <section
            id="about"
            className="grid gap-8 border-t border-[rgba(213,193,255,0.08)] py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-12"
        >
            <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[var(--accent-primary)]">
                    About
                </p>
                <h2 className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                    I care about depth, clarity, and building with intent.
                </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[var(--text-sub)]">
                <p>
                    I am drawn to technical work that requires both precision and curiosity. Whether I am exploring
                    how something can break or building how it should work, I enjoy understanding the details that sit
                    underneath the surface.
                </p>

                <p>
                    What interests me most is the balance between security, reliability, and clean implementation.
                    I value systems that are not only functional, but also understandable, maintainable, and realistic
                    to operate over time.
                </p>

                <p>
                    I approach projects with a practical mindset: learn the system, question assumptions, solve the
                    problem clearly, and leave the result in a better state than I found it.
                </p>
            </div>
        </section>
    )
}