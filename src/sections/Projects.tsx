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
            className="border-t border-[rgba(213,193,255,0.08)] py-20"
        >
            <div className="mb-10 flex flex-col gap-4 md:max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-primary)]">
                    Projects
                </p>

                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                    Selected work across security, software, and systems.
                </h2>

                <p className="text-[15px] leading-7 text-[var(--text-sub)] md:text-base">
                    A curated set of projects that reflect how I approach implementation,
                    analysis, and practical technical problem-solving.
                </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`rounded-full px-4 py-2 text-sm transition ${
                            filter === category
                                ? 'bg-[var(--accent-primary)] text-[#140d22]'
                                : 'border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.3)] text-[var(--text-sub)] hover:border-[rgba(213,193,255,0.18)] hover:text-[var(--text-main)]'
                        }`}
                    >
                        {category === 'all' ? 'All' : category}
                    </button>
                ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {filteredProjects.map((project) => (
                    <article
                        key={project.id}
                        className="group flex flex-col rounded-[1.75rem] border border-[rgba(213,193,255,0.08)] bg-[rgba(36,29,54,0.34)] p-6 shadow-[var(--shadow-soft)] transition hover:border-[rgba(213,193,255,0.18)] hover:bg-[rgba(36,29,54,0.46)]"
                    >
                        <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[rgba(166,124,255,0.12)] px-3 py-1 text-xs text-[var(--accent-glow)]">
                {project.category}
              </span>

                            <span className="rounded-full border border-[rgba(213,193,255,0.08)] px-3 py-1 text-xs text-[var(--text-soft)]">
                {project.year}
              </span>

                            {project.isStudentProject && (
                                <span className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(20,15,31,0.3)] px-3 py-1 text-xs text-[var(--text-sub)]">
                  Student project
                </span>
                            )}
                        </div>

                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-main)]">
                            {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">
                            {project.description}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                            {project.details}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-[rgba(213,193,255,0.08)] bg-[rgba(20,15,31,0.38)] px-3 py-1.5 text-xs text-[var(--text-sub)]"
                                >
                  {tech}
                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
                <div className="py-12 text-center text-[var(--text-soft)]">
                    No projects found in this category.
                </div>
            )}
        </section>
    )
}