// About.tsx
export function About() {
    return (
        <section
            id="about"
            className="grid gap-6 border-t border-[rgba(213,193,255,0.08)] py-14 sm:gap-8 sm:py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:py-20"
        >
            <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-primary)] sm:mb-4 sm:text-sm sm:tracking-[0.28em]">
                    About
                </p>
                <h2 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl sm:tracking-[-0.03em] md:text-4xl">
                    I care about depth, clarity, and building with intent.
                </h2>
            </div>

            <div className="flex flex-col gap-3.5 border-l-2 border-[var(--accent-primary)]/40 pl-3.5 text-sm sm:gap-6 sm:border-l-0 sm:pl-0 sm:text-lg">
                <p className="leading-6 text-[var(--text-sub)] sm:leading-8">
                    I am drawn to technical work that requires both precision and curiosity. Whether I am exploring
                    how something can break or building how it should work, I enjoy understanding the details that sit
                    underneath the surface.
                </p>

                <p className="leading-6 text-[var(--text-sub)] sm:leading-8">
                    What interests me most is the balance between security, reliability, and clean implementation.
                    I value systems that are not only functional, but also understandable, maintainable, and realistic
                    to operate over time.
                </p>

                <p className="leading-6 text-[var(--text-sub)] sm:leading-8">
                    I approach projects with a practical mindset: learn the system, question assumptions, solve the
                    problem clearly, and leave the result in a better state than I found it.
                </p>
            </div>
        </section>
    )
}