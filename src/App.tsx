import { Hero } from './sections/Hero'
import {About} from "./sections/About.tsx";

function App() {
  return (
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
        <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10 md:py-10">
          <Hero />
          <About />
        </main>
      </div>
  )
}

export default App