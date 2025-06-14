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
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="w-full flex h-24 items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Telangana Emblem" 
            width={60} 
            height={60} 
            className="object-contain"
          />
          <span className="font-bold font-serif text-orange-600 tracking-wide text-xl md:text-3xl">Jai Telangana</span>
        </Link>

        <nav className="hidden md:flex items-center">
          <div className="flex items-center justify-end gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  text-base font-medium pb-1
                  text-gray-800 hover:text-orange-600
                  ${pathname === link.href ? "border-b-2 border-orange-600" : "border-b-2 border-transparent hover:border-orange-600"}
                  transition-all duration-150 ease-in-out
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
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
