"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  // You can add more navigation links here
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-center items-center">
        <div className="flex space-x-6 md:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + '/')) // Handles nested routes for active state
            
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  text-base font-medium pb-1
                  ${isActive
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
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