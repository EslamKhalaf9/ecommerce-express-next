import React from 'react'
import { StarIcon } from '../icons/start'

export default function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {/* generate rating stars if 0 then 5 empty rating star the rating is from 0 to 10  */}
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          className={`w-4 h-4 text-yellow-500 ${index < Math.floor(rating / 2) ? "text-yellow-500" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}
