"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Product } from "./product/products-grid"

interface CartItem extends Product {
  quantity: number
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([])
  
  useEffect(() => {
    const cart = localStorage.getItem("cart")
    if (cart) {
      setCart(JSON.parse(cart))
    }
  }
  , [])

  const handleRemoveItem = (id: number) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = cart.filter((item: CartItem) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  }
  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
  }
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const taxes = subtotal * 0.16
  const total = subtotal + taxes
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="grid gap-6">
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
              <Image src="/placeholder.svg" alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-16 text-center"
                />
                <Button variant="outline" size="icon" onClick={() => handleRemoveItem(item.id)}>
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-6" />
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Tax:</p>
            <p>${taxes.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between font-bold">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
            prefetch={false}
          >
            Continue Shopping
          </Link>
          <Button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}