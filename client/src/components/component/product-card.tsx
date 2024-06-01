import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export default function ProductCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
    <div className="relative group">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View product</span>
      </Link>
      <Image
        alt="Product 4"
        className="object-cover w-full h-60"
        height={300}
        src="/placeholder.svg"
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
        <div className="flex items-center gap-0.5">
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">(17)</span>
      </div>
      <h3 className="font-semibold text-lg">Leather Wallet</h3>
      <p className="font-semibold text-lg">$29.99</p>
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-2 justify-end w-full">
          <Button size="sm">Add to Cart</Button>
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

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
