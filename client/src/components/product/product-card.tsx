"use client";

import Link from "next/link"
import { Button } from "../ui/button"
import { HeartIcon } from "../icons/heart"
import type { Product } from "./products-grid"
import RatingStars from "./rating-stars"
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  function addToCart(product: Product) {
    console.log('add to cart')
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || "{}") : [];
    const existingProduct = cart.find((p: Product) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    toast({
      title: "Added to cart",
      description: "Product added to cart successfully",
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
      <div className="relative group">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View product</span>
        </Link>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Product 4"
          className="object-cover w-full h-60"
          height={300}
          src={product.image}
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="absolute top-4 right-4 z-10">
          <Button size="icon" variant="ghost">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500" />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-sm text-gray-500 dark:text-gray-400">(17)</span>
        </div>
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="font-semibold text-lg">${product.price}</p>
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-2 justify-end w-full">
            <Button onClick={() => addToCart(product)} size="sm">Add to Cart</Button>
            <Button size="sm" variant="outline">
              <HeartIcon className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
