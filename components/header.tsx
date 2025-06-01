"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/districts", label: "Districts" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/heritage", label: "Heritage" },
  { href: "/about-us", label: "About Us" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-24 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-4">
          <Image 
            src="/dummy-image.jpg" 
            alt="Telangana Emblem" 
            width={60} 
            height={60} 
            className="object-contain"
          />
          <span className="text-2xl font-bold font-serif text-orange-600 tracking-wide">Jai Telangana</span>
        </Link>

        <nav className="hidden md:flex ml-auto gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-base font-medium pb-1
                text-black
                ${pathname === link.href ? "border-b-2 border-orange-600" : "border-b-2 border-transparent hover:border-orange-600"}
                transition-all duration-150 ease-in-out
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
