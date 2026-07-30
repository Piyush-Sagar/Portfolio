import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Links from "@/components/Links";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Links />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Piyush Sagar</p>
        </div>
      </footer>
    </div>
  );
}