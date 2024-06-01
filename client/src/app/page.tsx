import Hero from "@/components/hero";
import { ProductsGrid } from "@/components/component/products-grid";

export default function Home() {
  return (
    <main>
      <header>
        <div className="pt-[10vh]">
          <Hero />
        </div>
        <div className="container mx-auto">
          <ProductsGrid />
        </div>
      </header>
    </main>
  );
}
