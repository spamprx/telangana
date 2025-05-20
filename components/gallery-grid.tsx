"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { galleryImages } from "@/lib/gallery"
import { Button } from "@/components/ui/button"

const ITEMS_PER_PAGE = 12

export function GalleryGrid({ location = "all" }: { location?: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId)
  }

  // Filter images by location
  const filteredImages = location === "all"
    ? galleryImages
    : galleryImages.filter(img => img.location.toLowerCase() === location.toLowerCase())

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentImages = filteredImages.slice(startIndex, endIndex)

  const selectedImageData = selectedImage !== null ? filteredImages.find((img) => img.id === selectedImage) : null

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((image) => (
          <div
            key={image.id}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(image.id)}
          >
            <Image
              // src={image.src || "/placeholder.svg"}
              src="/dummy-image.jpg" // Using dummy image
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center gap-2">
        {Array.from({ length: Math.min(10, totalPages) }, (_, i) => i + 1).map((pageNum) => (
          <Button
            key={pageNum}
            variant={currentPage === pageNum ? "default" : "outline"}
            size="sm"
            className={`w-10 h-10 ${
              currentPage === pageNum ? "bg-primary text-primary-foreground" : "text-gray-600"
            }`}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </Button>
        ))}
        {totalPages > 10 && (
          <Button
            variant="outline"
            size="sm"
            className="px-4 h-10"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        )}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
          {selectedImageData && (
            <>
              <div className="relative h-[500px] w-full">
                <Image
                  // src={selectedImageData.src || "/placeholder.svg"}
                  src="/dummy-image.jpg" // Using dummy image
                  alt={selectedImageData.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <DialogHeader className="p-4">
                <DialogTitle>{selectedImageData.title}</DialogTitle>
                <DialogDescription>
                  {selectedImageData.description}
                </DialogDescription>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    {selectedImageData.category}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    {selectedImageData.location}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    {selectedImageData.date}
                  </span>
                </div>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
