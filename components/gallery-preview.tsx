import Image from "next/image"
import { galleryImages } from "@/lib/gallery"

export function GalleryPreview() {
  // Only show first 6 images for preview
  const previewImages = galleryImages.slice(0, 6)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {previewImages.map((image) => (
        <div key={image.id} className="relative h-64 rounded-lg overflow-hidden">
          <Image
            // src={image.src || "/placeholder.svg"}
            src="/dummy-image.jpg" // Using dummy image
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}
