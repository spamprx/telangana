"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDistrictData } from "@/lib/districts"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { use } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Carousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[40vh]">
              <Image
                src={src}
                alt={`District Image ${index + 1}`}
                fill
                className="object-cover brightness-[0.7]"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={scrollNext}
      >
        <ArrowLeft className="h-6 w-6 rotate-180" />
      </button>
    </div>
  )
}

export default function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const district = getDistrictData(resolvedParams.slug)

  if (!district) {
    return (
      <div className="container px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">District not found</h1>
        <p className="mb-8">The district you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/districts">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Districts
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Carousel images={district.carouselImages} />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{district.name} District</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/districts">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Districts
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About {district.name}</h2>
              <p className="text-gray-700 mb-6">{district.description}</p>

              <h2 className="text-2xl font-bold mb-4">Major Issues</h2>
              <Accordion type="single" collapsible className="mb-6">
                {district.issues.map((issue, index) => (
                  <AccordionItem key={index} value={`issue-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {issue[0]}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 pt-2">{issue[1]}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <h2 className="text-2xl font-bold mb-4">Initiatives</h2>
              <Accordion type="single" collapsible className="mb-6">
                {district.initiatives.map((initiative, index) => (
                  <AccordionItem key={index} value={`initiative-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {initiative[0]}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 pt-2">{initiative[1]}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">Population:</span> {district.population}
                    </li>
                    <li>
                      <span className="font-medium">Area:</span> {district.area}
                    </li>
                    <li>
                      <span className="font-medium">Headquarters:</span> {district.headquarters}
                    </li>
                    <li>
                      <span className="font-medium">Major Towns:</span> {district.majorTowns.join(", ")}
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <Image
                    // src={district.mapImage || "/placeholder.svg"}
                    src={district.mapImage} // Using dummy image
                    alt={`Map of ${district.name} District`}
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
