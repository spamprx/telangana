"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { galleryImages } from "@/lib/gallery"

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const selectedImageData = selectedImage !== null ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
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
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
