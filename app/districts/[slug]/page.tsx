"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDistrictData } from "@/lib/districts"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useState } from 'react'
import { use } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { galleryImages } from "@/lib/gallery"

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
  const [showMapDialog, setShowMapDialog] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  // Filter gallery images for this district
  const districtPhotos = galleryImages.filter(
    photo => photo.location.toLowerCase() === district?.name.toLowerCase()
  ).slice(0, 4) // Get up to 4 photos

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5))
  }

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

                <div className="rounded-lg overflow-hidden cursor-pointer" onClick={() => setShowMapDialog(true)}>
                  <Image
                    src={district.mapImage}
                    alt={`Map of ${district.name} District`}
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>

              <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
                <DialogContent className="sm:max-w-[90vw] h-[90vh] p-0">
                  <div className="absolute right-4 top-4 z-20">
                    <button
                      className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                      onClick={() => setShowMapDialog(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="sr-only">Close</span>
                    </button>
                  </div>
                  <div className="relative w-full h-full overflow-auto">
                    <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleZoomIn}
                        className="bg-white/80 hover:bg-white shadow-md"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleZoomOut}
                        className="bg-white/80 hover:bg-white shadow-md"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                    </div>
                    <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left', transition: 'transform 0.2s' }}>
                      <Image
                        src={district.mapImage}
                        alt={`Map of ${district.name} District`}
                        width={1200}
                        height={1200}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Photos from {district.name}</h2>
            <Button asChild>
              <Link href={`/gallery?location=${district.name.toLowerCase()}`}>
                View All Photos
              </Link>
            </Button>
          </div>

          {districtPhotos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {districtPhotos.map((photo) => (
                <div key={photo.id} className="relative h-48 rounded-lg overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-sm font-medium">{photo.title}</h3>
                      <p className="text-xs opacity-80">{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No photos available for this district yet.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
