"use client"

import { useState } from "react"
import { GalleryFilter } from "@/components/gallery-filter"
import { GalleryGrid } from "@/components/gallery-grid"

export function GalleryPageClient() {
  const [activeLocation, setActiveLocation] = useState("all")
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-center">Photo Gallery</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Browse through our collection of images showcasing events, district visits, and community outreach programs
            across Telangana.
          </p>

          <GalleryFilter activeLocation={activeLocation} setActiveLocation={setActiveLocation} />

          <div className="mt-8">
            <GalleryGrid location={activeLocation} />
          </div>
        </div>
      </section>
    </main>
  )
} 