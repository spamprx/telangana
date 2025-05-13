"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { featuredEvents } from "@/lib/events"

export function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredEvents.length - 1 : prevIndex - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="relative h-[500px] w-full">
        {featuredEvents.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image 
              // src={event.image || "/placeholder.svg"} 
              src="/dummy-image.jpg" // Using dummy image
              alt={event.title} 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h3>
              <div className="flex items-center text-sm mb-4">
                <span className="bg-orange-600 px-2 py-1 rounded-md mr-3">{event.date}</span>
                <span>{event.location}</span>
              </div>
              <p className="text-gray-200 mb-4 max-w-2xl">{event.description}</p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href={`/events/${event.slug}`}>Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
