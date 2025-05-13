import { GalleryFilter } from "@/components/gallery-filter"
import { GalleryGrid } from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-center">Photo Gallery</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Browse through our collection of images showcasing events, district visits, and community outreach programs
            across Telangana.
          </p>

          <GalleryFilter />

          <div className="mt-8">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </main>
  )
}
