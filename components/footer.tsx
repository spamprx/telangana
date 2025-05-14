import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* <Image src="/telangana-logo-white.png" alt="Telangana Logo" width={40} height={40} /> */}
              <span className="text-xl font-bold text-white">Telangana</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Exploring the rich heritage, vibrant culture, and political landscape of India's youngest state.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/districts" className="text-gray-400 hover:text-white transition-colors">
                  Districts
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Districts</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/districts/hyderabad" className="text-gray-400 hover:text-white transition-colors">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/districts/warangal" className="text-gray-400 hover:text-white transition-colors">
                  Warangal
                </Link>
              </li>
              <li>
                <Link href="/districts/karimnagar" className="text-gray-400 hover:text-white transition-colors">
                  Karimnagar
                </Link>
              </li>
              <li>
                <Link href="/districts/nizamabad" className="text-gray-400 hover:text-white transition-colors">
                  Nizamabad
                </Link>
              </li>
              <li>
                <Link href="/districts" className="text-gray-400 hover:text-white transition-colors">
                  View All Districts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>IIT Hyderadabad</p>
              <p>Sangareddy, Telangana 502001</p>
              <p>India</p>
              <p className="mt-4">
                <a href="mailto:jaitelangana2028@gmail.com" className="hover:text-white transition-colors">
                    jaitelangana2028@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919440725957" className="hover:text-white transition-colors">
                  +91 9440 725 957
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Telangana Political & Geographical Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
