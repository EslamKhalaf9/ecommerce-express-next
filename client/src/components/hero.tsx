"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnMouseEnter: false, stopOnInteraction: false, stopOnFocusIn: false })
  )

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[90vh] w-screen">
                <Card>
                  <CardContent className="w-screen h-[90vh] flex items-center justify-center p-0 m-0 bg-green-400 bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(https://source.unsplash.com/random/800x600)`,
                    }}
                  >
                    <span
                      className="w-screen h-[90vh] text-4xl text-white font-bold flex items-center justify-center bg-black bg-opacity-30"
                    >
                      {index}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
