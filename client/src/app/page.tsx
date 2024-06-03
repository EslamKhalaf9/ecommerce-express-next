import Hero from "@/components/hero";
import { ProductsGrid } from "@/components/product/products-grid";

export default async function Home() {
  const products = await (await fetch("http://localhost:3000/api/product")).json();
  return (
    <main>
      <header>
        <div className="pt-[10vh]">
          <Hero />
        </div>
        <div className="container mx-auto">
          <ProductsGrid products={products} />
        </div>
      </header>
    </main>
  );
}
