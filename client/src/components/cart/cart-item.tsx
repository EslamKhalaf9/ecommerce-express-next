'use client';

import Image from "next/image"
import type { ICartItem } from "./cart"
import { Button } from "../ui/button"
import TrashIcon from "../icons/trash-icon"
import { Input } from "../ui/input";

interface CartItemProps {
  item: ICartItem
  handleQuantityChange: (id: number, quantity: number) => void
  handleRemoveItem: (id: number) => void
}

const CartItem = ({ item, handleQuantityChange, handleRemoveItem }: CartItemProps) => {
  return (
    <div key={item.id} className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg" alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          min={1}
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          className="w-16 text-center"
        />
        <Button variant="outline" onClick={() => handleRemoveItem(item.id)}>
          <TrashIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default CartItem