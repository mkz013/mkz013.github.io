// Projects.tsx
import { useMemo, useState } from 'react'
import { projects } from '../data/projects'

type Filter =
    | 'all'
    | 'AI & Voice'
    | 'Security Engineering'
    | 'Web Development'
    | 'Penetration Testing'
    | 'Mobile Security'

export function Projects() {
    const [filter, setFilter] = useState<Filter>('all')
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null)
    const categories = useMemo(
        () => ['all', ...new Set(projects.map((project) => project.category))] as Filter[],
        []
    )

    const filteredProjects = projects.filter((project) =>
        filter === 'all' ? true : project.category === filter
    )

    return (
        <section
            id="projects"
            className="border-t border-[rgba(213,193,255,0.08)] py-14 sm:py-16 md:py-20"
        >
            <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-primary)] sm:text-sm sm:tracking-[0.28em]">
                    Projects
                </p>

                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl sm:tracking-[-0.03em] md:text-4xl">
                    Selected work across security, software, and systems.
                </h2>

                <p className="text-base leading-7 text-[var(--text-sub)] sm:text-lg sm:leading-8">
                    A curated set of projects that reflect how I approach implementation,
                    analysis, and practical technical problem-solving.
                </p>
            </div>

            {/* Filter pills: horizontal scroll on mobile instead of wrap-cramming */}
            <div className="mb-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mb-8 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                            filter === category
                                ? 'bg-[var(--accent-primary)] text-[#140d22]'
                                : 'border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.3)] text-[var(--text-sub)] hover:border-[rgba(213,193,255,0.18)] hover:text-[var(--text-main)]'
                        }`}
                    >
                        {category === 'all' ? 'All' : category}
                    </button>
                ))}
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
                {filteredProjects.map((project) => (
                    <article
                        key={`${project.id}-${project.title}`}
                        onClick={() =>
                            setExpandedProjectId(
                                expandedProjectId === project.id ? null : project.id
                            )
                        }

                        className="group flex flex-col rounded-[1.25rem] border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.34)] p-4 shadow-[var(--shadow-soft)] transition hover:border-[rgba(213,193,255,0.18)] hover:bg-[rgba(36,29,54,0.46)] sm:rounded-[1.5rem] sm:p-6 md:rounded-[1.75rem] md:p-7">
                        {/* Meta row: category + year + student badge */}
                        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5">
                            <span className="rounded-full bg-[rgba(166,124,255,0.14)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent-glow)] sm:px-3 sm:text-xs">
                                {project.category}
                            </span>

                            <span className="rounded-full border border-[rgba(213,193,255,0.1)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-sub)] sm:px-3 sm:text-xs">
                                {project.year}
                            </span>

                            {project.isStudentProject && (
                                <span className="rounded-full border border-[rgba(213,193,255,0.1)] bg-[rgba(20,15,31,0.4)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-sub)] sm:px-3 sm:text-xs">
                                    Student project
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold leading-tight tracking-[-0.02em] text-[var(--text-main)] sm:text-2xl">
                            {project.title}
                        </h3>

                        <div className="mt-3 mb-3 h-px w-full bg-[rgba(213,193,255,0.1)] sm:mt-4 sm:mb-4" />

                        {/* Overview */}
                        <div className="space-y-1.5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)] sm:text-xs sm:tracking-[0.14em]">
                                Overview
                            </p>
                            <p className="text-sm leading-6 text-[var(--text-main)] sm:text-base sm:leading-7">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-2 text-[10px] font-medium text-[var(--accent-primary)] sm:hidden">
                            {expandedProjectId === project.id ? 'Tap to collapse ▲' : 'Tap for details ▼'}
                        </div>

                        {/* Details - Visible by default on desktop, toggleable on mobile */}
                        <div
                            className={`mt-3 space-y-1.5 sm:mt-4 sm:block ${
                                expandedProjectId === project.id ? 'block' : 'hidden'
                            }`}
                        >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)] sm:text-xs sm:tracking-[0.14em]">
                                Details
                            </p>
                            <p className="text-sm leading-6 text-[var(--text-sub)] sm:text-base sm:leading-7">
                                {project.details}
                            </p>
                        </div>

                        {/* Tech stack */}
                        <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-[rgba(213,193,255,0.1)] bg-[rgba(20,15,31,0.42)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-sub)] sm:px-3 sm:py-1.5 sm:text-xs"                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-5 flex flex-wrap gap-4 border-t border-[rgba(213,193,255,0.08)] pt-4 text-sm font-medium sm:mt-6 sm:gap-5 sm:pt-5 sm:text-base">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--accent-glow)] transition hover:text-[var(--text-main)]"
                            >
                                GitHub →
                            </a>

                            {project.liveLink && project.liveLink !== '#' && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--accent-glow)] transition hover:text-[var(--text-main)]"
                                >
                                    Live / Details →
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="py-10 text-center text-[var(--text-sub)] sm:py-12">
                    No projects found in this category.
                </div>
            )}
        </section>
    )
}