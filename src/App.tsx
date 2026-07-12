import { siteMeta } from './data/site'

function App() {
  return (
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
        <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10 md:py-10">
          <section
              id="home"
              className="flex min-h-screen flex-col justify-center gap-10 py-10"
          >
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent-primary)]">
                {siteMeta.nickname}
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                {siteMeta.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-sub)] md:text-lg">
                {siteMeta.intro}
              </p>

              <p className="mt-4 text-sm text-[var(--text-sub)]">
                {siteMeta.location.join(' • ')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                  href={siteMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[var(--accent-primary)] px-6 py-3 font-medium text-[#140d22] transition hover:bg-[var(--accent-glow)]"
              >
                View GitHub
              </a>

              <a
                  href={`mailto:${siteMeta.email}`}
                  className="rounded-xl border border-[color:rgba(201,168,255,0.2)] bg-[color:rgba(44,35,70,0.65)] px-6 py-3 font-medium text-[var(--text-main)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-glow)]"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-[var(--text-sub)]">
            <span className="rounded-full border border-[color:rgba(201,168,255,0.12)] px-4 py-2">
              Cybersecurity
            </span>
              <span className="rounded-full border border-[color:rgba(201,168,255,0.12)] px-4 py-2">
              Cloud
            </span>
              <span className="rounded-full border border-[color:rgba(201,168,255,0.12)] px-4 py-2">
              Web Applications
            </span>
              <span className="rounded-full border border-[color:rgba(201,168,255,0.12)] px-4 py-2">
              Automation
            </span>
            </div>
          </section>
        </main>
      </div>
  )
}

export default App