"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { LoginButton } from "@/components/login-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/telangana-logo.png" alt="Telangana Logo" width={40} height={40} /> */}
          <span className="text-xl font-bold">Telangana</span>
        </Link>

        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/districts" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Districts
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Events
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Gallery
          </Link>
        </nav>

        <div className="hidden md:flex items-center ml-6">
          <LoginButton />
        </div>

        <button className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 bg-white">
            <Link
              href="/"
              className="py-2 text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/districts"
              className="py-2 text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Districts
            </Link>
            <Link
              href="/events"
              className="py-2 text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="py-2 text-sm font-medium hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <div className="pt-4 mt-4 border-t">
              <LoginButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
