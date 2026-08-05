import { siteMeta } from '../data/site'

const memoji = '/Memoji2.png'
const cyberOpsBadge = '/cyberopsBadge.png'

export function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-[100dvh] flex-col justify-center gap-8 py-8 sm:gap-10 sm:py-10 md:min-h-screen md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12"
        >
            {/* LEFT COLUMN: Main Information */}
            <div className="max-w-3xl">
                {/* Status Pill */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[rgba(36,29,54,0.45)] px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--text-sub)] sm:px-4 sm:text-[11px] sm:tracking-[0.22em] md:mb-6">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]" />
                    Open to opportunities
                </div>

                {/* Nickname & Main Heading */}
                <div className="mb-5 md:mb-6">
                    <p className="mb-2.5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-primary)] sm:mb-3 sm:text-sm sm:tracking-[0.28em]">
                        <span className="h-px w-6 shrink-0 bg-[var(--accent-primary)]" />
                        {siteMeta.nickname}
                    </p>

                    <h1 className="max-w-3xl text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-4xl sm:leading-[1.15] sm:tracking-[-0.03em] md:text-5xl">
                        {siteMeta.title}
                    </h1>
                </div>

                {/* Intro & Location */}
                <div className="space-y-2.5 sm:space-y-3">
                    <p className="max-w-xl text-[0.95rem] leading-6 text-[var(--text-sub)] sm:text-lg sm:leading-8">
                        {siteMeta.intro}
                    </p>

                    <p className="flex items-center gap-2 text-sm leading-6 text-[var(--text-soft)] sm:text-base sm:leading-7">
                        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                        {siteMeta.location.join(' • ')}
                    </p>
                </div>



                {/* MOBILE ONLY: Memoji + Badge placement */}
                <div className="my-6 flex flex-col items-center gap-4 md:hidden">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(166,124,255,0.18),transparent_62%)] blur-xl" />
                        <div className="relative rounded-2xl border border-[rgba(213,193,255,0.12)] bg-[linear-gradient(180deg,rgba(44,35,70,0.74),rgba(24,18,34,0.58))] p-2.5 shadow-[var(--shadow-main)] backdrop-blur-xl">
                            <div className="relative flex h-[140px] w-[140px] items-center justify-center">
                                <div className="relative overflow-hidden rounded-full border border-[rgba(213,193,255,0.14)] bg-[rgba(20,15,31,0.48)] shadow-[0_10px_30px_rgba(8,5,18,0.34)]">
                                    <img
                                        src={memoji}
                                        alt="Portrait illustration of Antonie Ochișor"
                                        className="h-[110px] w-[110px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[280px] items-center gap-3 rounded-xl border border-[rgba(213,193,255,0.16)] bg-[rgba(36,29,54,0.5)] p-2.5 shadow-[var(--shadow-soft)] backdrop-blur-md">
                        <img
                            src={cyberOpsBadge}
                            alt="Cisco CyberOps Associate Badge"
                            className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(8,5,18,0.5)]"
                        />
                        <div className="flex min-w-0 flex-col pr-1">
                            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--accent-primary)]">
                                Verified Badge
                            </span>
                            <span className="truncate text-xs font-semibold text-[var(--text-main)]">
                                Cisco CyberOps Associate
                            </span>
                            <span className="truncate text-[10px] text-[var(--text-soft)]">
                                Cisco Networking Academy
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action CTAs */}
                <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:mt-8 sm:gap-3 md:mt-10 md:gap-4">
                    <a
                        href={siteMeta.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center rounded-xl bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-medium text-[#140d22] shadow-[var(--shadow-soft)] transition hover:bg-[var(--accent-glow)] sm:px-6 sm:py-3 sm:text-base"                    >
                        View GitHub
                    </a>

                    <a
                        href={siteMeta.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-panel)] px-4 py-2.5 text-sm font-medium text-[var(--text-main)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-glow)] sm:px-6 sm:py-3 sm:text-base"
                    >
                        LinkedIn
                    </a>

                    <a
                        href={`mailto:${siteMeta.email}`}
                        className="w-full sm:w-auto text-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-panel)] px-4 py-2.5 text-sm font-medium text-[var(--text-main)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-glow)] sm:px-6 sm:py-3 sm:text-base"                    >
                        Contact Me
                    </a>

                    <a
                        href={siteMeta.cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center rounded-xl border border-[var(--border-soft)] px-4 py-2.5 text-sm font-medium text-[var(--text-sub)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-main)] sm:px-6 sm:py-3 sm:text-base"                    >
                        View CV
                    </a>
                </div>

                {/* Skill Pills Strip */}
                <div className="mt-7 border-t border-[rgba(213,193,255,0.08)] pt-5 sm:mt-8 sm:pt-6 md:mt-10">
                    <div className="flex flex-wrap gap-2 text-sm text-[var(--text-sub)] sm:gap-3 sm:text-base">
                        <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-3 py-1.5 sm:px-4 sm:py-2">
                            Red Teaming
                        </span>
                        <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-3 py-1.5 sm:px-4 sm:py-2">
                            Malware Analysis
                        </span>
                        <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-3 py-1.5 sm:px-4 sm:py-2">
                            Reverse Engineering
                        </span>
                        <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-3 py-1.5 sm:px-4 sm:py-2">
                            Web Development
                        </span>
                        <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.36)] px-3 py-1.5 sm:px-4 sm:py-2">
                            IoT
                        </span>
                    </div>
                </div>
            </div>


            {/* RIGHT COLUMN: Memoji Avatar & Certification Card */}
            <div className="hidden md:flex flex-col items-center gap-6 sm:gap-10 md:items-end md:justify-between md:gap-14">                    {/* Background Glow */}
                    <div className="absolute h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(166,124,255,0.18),transparent_62%)] blur-2xl sm:h-[300px] sm:w-[300px] sm:blur-3xl md:h-[410px] md:w-[410px]" />

                    {/* Outer Frame */}
                    <div className="relative rounded-[1.5rem] border border-[rgba(213,193,255,0.12)] bg-[linear-gradient(180deg,rgba(44,35,70,0.74),rgba(24,18,34,0.58))] p-3 shadow-[var(--shadow-main)] backdrop-blur-xl sm:rounded-[2rem] sm:p-4 md:rounded-[2.25rem]">
                        <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(213,193,255,0.32),transparent)]" />

                        <div className="relative flex h-[170px] w-[170px] items-center justify-center sm:h-[260px] sm:w-[260px] md:h-[390px] md:w-[390px]">
                            <div className="absolute inset-[8%] rounded-full border border-[rgba(213,193,255,0.14)]" />
                            <div className="absolute inset-[3%] rounded-full border border-[rgba(213,193,255,0.06)]" />
                            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(180deg,rgba(30,22,44,0.2),rgba(14,10,20,0.48))]" />

                            <div className="relative overflow-hidden rounded-full border border-[rgba(213,193,255,0.14)] bg-[rgba(20,15,31,0.48)] shadow-[0_20px_60px_rgba(8,5,18,0.34)]">
                                <img
                                    src={memoji}
                                    alt="Portrait illustration of Antonie Ochișor"
                                    className="h-[135px] w-[135px] object-cover sm:h-[205px] sm:w-[205px] md:h-[310px] md:w-[310px]"
                                />
                            </div>
                        </div>
                    </div>

                {/* VERIFIED CERTIFICATION BADGE CARD */}
                <div className="flex w-full max-w-[300px] items-center gap-3 rounded-2xl border border-[rgba(213,193,255,0.16)] bg-[rgba(36,29,54,0.5)] p-3 shadow-[var(--shadow-soft)] backdrop-blur-md transition hover:border-[rgba(213,193,255,0.3)] hover:bg-[rgba(36,29,54,0.7)] sm:max-w-none sm:gap-4 sm:p-3.5 md:mt-2">
                    <img
                        src={cyberOpsBadge}
                        alt="Cisco CyberOps Associate Badge"
                        className="h-12 w-12 shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(8,5,18,0.5)] sm:h-16 sm:w-16"
                    />
                    <div className="flex min-w-0 flex-col pr-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--accent-primary)] sm:text-[10px] sm:tracking-[0.18em]">
                            Verified Badge
                        </span>
                        <span className="truncate text-xs font-semibold text-[var(--text-main)] sm:text-sm">
                            Cisco CyberOps Associate
                        </span>
                        <span className="truncate text-[10px] text-[var(--text-soft)] sm:text-xs">
                            Cisco Networking Academy
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}