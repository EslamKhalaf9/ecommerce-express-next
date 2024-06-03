"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Product } from "../product/products-grid"
import CartItem from "./cart-item"
import { toast } from "../ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

export interface ICartItem extends Product {
  quantity: number
}

export default function Cart() {
  const [cart, setCart] = useState<ICartItem[]>([])
  
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
      const updatedCart = cart.filter((item: ICartItem) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      toast({
        title: "Removed from cart",
        description: "Product removed from cart successfully",
      })
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  }
  const handleQuantityChange = (id: number, quantity: number) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = cart.map((item: ICartItem) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating quantity", error);
    }
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
            <CartItem key={item.id} item={item} handleQuantityChange={handleQuantityChange} handleRemoveItem={handleRemoveItem} />
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