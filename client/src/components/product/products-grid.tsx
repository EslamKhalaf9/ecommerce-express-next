import ProductCard from "./product-card"

interface Props {
  products: Product[]
}

export interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

export function ProductsGrid({ products }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

