import { siteMeta } from '../data/site'

const memoji = '/Memoji2.png'

export function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-screen flex-col justify-center gap-10 py-10 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center"
        >
            <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[rgba(36,29,54,0.45)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--text-sub)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
                    Open to serious opportunities
                </div>

                <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent-primary)]">
                    {siteMeta.nickname}
                </p>

                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
                    {siteMeta.title}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-sub)] md:text-[1.05rem]">
                    {siteMeta.intro}
                </p>

                <p className="mt-4 text-sm text-[var(--text-soft)]">
                    {siteMeta.location.join(' • ')}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href={siteMeta.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-[var(--accent-primary)] px-6 py-3 font-medium text-[#140d22] shadow-[var(--shadow-soft)] transition hover:bg-[var(--accent-glow)]"
                    >
                        View GitHub
                    </a>

                    <a
                        href={`mailto:${siteMeta.email}`}
                        className="rounded-xl border border-[var(--border-strong)] bg-[var(--bg-panel)] px-6 py-3 font-medium text-[var(--text-main)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-glow)]"
                    >
                        Contact Me
                    </a>

                    <a
                        href={siteMeta.cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-[var(--border-soft)] px-6 py-3 font-medium text-[var(--text-sub)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-main)]"
                    >
                        View CV
                    </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 text-sm text-[var(--text-sub)]">
          <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-4 py-2">
            Red Teaming
          </span>
                    <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-4 py-2">
            Security Challenges
          </span>
                    <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-4 py-2">
            Web Development
          </span>
                    <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-4 py-2">
            IoT
          </span>
                </div>
            </div>

            <div className="flex justify-center md:justify-end">
                <div className="relative flex items-center justify-center">
                    <div className="absolute h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(166,124,255,0.18),transparent_62%)] blur-3xl md:h-[410px] md:w-[410px]" />

                    <div className="relative rounded-[2.25rem] border border-[rgba(213,193,255,0.1)] bg-[linear-gradient(180deg,rgba(44,35,70,0.74),rgba(24,18,34,0.58))] p-4 shadow-[var(--shadow-main)] backdrop-blur-xl">
                        <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(213,193,255,0.32),transparent)]" />

                        <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[340px] sm:w-[340px] md:h-[390px] md:w-[390px]">
                            <div className="absolute inset-[8%] rounded-full border border-[rgba(213,193,255,0.14)]" />
                            <div className="absolute inset-[3%] rounded-full border border-[rgba(213,193,255,0.06)]" />

                            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(180deg,rgba(30,22,44,0.2),rgba(14,10,20,0.48))]" />

                            <div className="relative overflow-hidden rounded-full border border-[rgba(213,193,255,0.14)] bg-[rgba(20,15,31,0.48)] shadow-[0_20px_60px_rgba(8,5,18,0.34)]">
                                <img
                                    src={memoji}
                                    alt="Portrait illustration of Antonie Ochișor"
                                    className="h-[238px] w-[238px] object-cover sm:h-[270px] sm:w-[270px] md:h-[310px] md:w-[310px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}