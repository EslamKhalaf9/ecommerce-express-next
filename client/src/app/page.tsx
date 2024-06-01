import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <header>
        <div className="pt-[10vh]">
          <Hero />
        </div>
        <div className="container mx-auto">
          <section className="py-8">
            <h2 className="text-4xl font-bold">Welcome to Create Next App</h2>
            <p className="text-lg mt-4">
              Get started by editing <code>pages/index.tsx</code>
            </p>
            <Button>
              Learn more
            </Button>
          </section>
        </div>
      </header>
    </main>
  );
}
