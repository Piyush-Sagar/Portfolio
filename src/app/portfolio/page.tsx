import Header from "@/components/Header";
import Links from "@/components/Links";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-16">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
              Projects & Links
            </h1>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              Selected work and ways to connect
            </p>
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