"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"
import { GalleryPreview } from "@/components/gallery-preview"
import { DistrictMap } from "@/components/district-map"
import { useRef } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/districts", label: "Districts" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/heritage", label: "Heritage" },
  { href: "/about", label: "About Us" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-center items-center">
        <div className="flex space-x-6 md:space-x-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  text-base font-medium pb-1
                  text-black
                  ${isActive
                    ? "border-b-2 border-orange-600"
                    : "border-b-2 border-transparent hover:border-orange-600"
                  }
                  transition-all duration-150 ease-in-out
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default function Home() {
  const mapRef = useRef<HTMLElement | null>(null);

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            // src="/hero-telangana.jpg"
            src="/dummy-image.jpg"
            alt="Telangana Landscape"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Discover Telangana</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Exploring the rich heritage, vibrant culture, and political landscape of India's youngest state
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={scrollToMap}>
              Explore State
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/events">View Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-orange-600">Our Moto</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are dedicated to promoting transparency, development, and citizen engagement across Telangana. Our
                mission is to bridge the gap between governance and citizens by providing accurate information about
                regional developments, political initiatives, and community needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through active participation and awareness, we aim to empower every citizen to contribute to Telangana's
                growth story and help build a prosperous future for all 33 districts.
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                // src="/about-telangana.jpg" 
                src="/dummy-image.jpg" // Using dummy image
                alt="Telangana Culture" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* District Map Section */}
      <section ref={mapRef} className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Explore Telangana Districts</h2>
          <DistrictMap />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Gallery Highlights</h2>
          <GalleryPreview />
          <div className="text-center mt-10">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// export async function generateMetadata({ params }: { params: { district: string } }): Promise<Metadata> {
//   const districtName = params.district.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
//   return {
//     title: `${districtName} District`
//   };
// }
