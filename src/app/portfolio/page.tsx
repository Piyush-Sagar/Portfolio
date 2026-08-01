import Header from "@/components/Header";
import Links from "@/components/Links";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-16">
          <header className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
                Projects & Links
              </h1>
              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                Selected work and ways to connect
              </p>
            </div>
            <a
              href="/Piyush Sagar Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>View Resume</span>
            </a>
          </header>
          <Links />
        </div>
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Piyush Sagar</p>
        </div>
      </footer>
    </div>
  );
}