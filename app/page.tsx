"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GalleryPreview } from "@/components/gallery-preview"
import { DistrictMap } from "@/components/district-map"
import { useRef, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { heroSection } from "@/lib/heroSection"

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

const priorityDetails = {
  education: {
    title: "Quality and Free Education",
    questions: [
      "How is quality being equally ensured in government schools?",
      "How are teachers selected and trained?",
      "How is the implementation of digital schools progressing in rural areas?",
      "What is the solution if students drop out of school midway?"
    ],
    suggestion: "Would it be beneficial to start mentorship programs in partnership with private schools?"
  },
  healthcare: {
    title: "Quality, Free, and Accessible Healthcare Services",
    questions: [
      "What is the doctor-to-patient ratio in government hospitals?",
      "What measures are being taken to strengthen rural health centers?",
      "Is there a system to monitor quality in hospitals?",
      "Are emergency services accessible in remote areas?"
    ],
    suggestion: "Can mobile health clinics and telemedicine be utilized?"
  },
  agriculture: {
    title: "Agricultural Innovation and Reforms",
    questions: [
      "Are farmers being trained in modern agricultural practices?",
      "What steps are being taken to protect farmers from price fluctuations?",
      "Are soil and water testing facilities locally available?"
    ],
    suggestion: "Can methods that require less water and cost be promoted?"
  },
  water: {
    title: "Irrigation and Drinking Water Supply",
    questions: [
      "To what extent has irrigation coverage expanded in the state?",
      "Are the long-term impacts of Mission Bhagiratha and Mission Kakatiya being monitored?",
      "How is the quality of drinking water being tested?"
    ],
    suggestion: "Would forming village-level water user associations improve outcomes?"
  },
  womensSafety: {
    title: "Women's Safety and Reforms",
    questions: [
      "How are SHE Teams functioning? How are they being improved?",
      "Are courts prepared to deliver swift justice in crimes against women?",
      "Is gender sensitivity training available in government departments?"
    ],
    suggestion: "Would mobile apps or centers that allow women to report issues confidentially be effective?"
  },
  lawOrder: {
    title: "Law, Order, and Innovation in the Justice System",
    questions: [
      "How are digital reforms being implemented in police and courts?",
      "What is being done to build public trust in the police?",
      "Are police stations adequately staffed?"
    ],
    suggestion: "Would implementing community policing improve relations with the public?"
  },
  employment: {
    title: "Employment Generation",
    questions: [
      "What types of skill gaps are observed among youth?",
      "Are vocational training programs aligned with industry needs?",
      "How are rural youth getting jobs through EGMM?"
    ],
    suggestion: "Would expanding apprenticeship programs in collaboration with local industries yield results?"
  },
  itIndustry: {
    title: "IT and Industrial Policy",
    questions: [
      "What incentives are being provided to attract industries to tier-2 cities?",
      "What support is being given for startups and research-based innovation?",
      "Are infrastructure facilities sufficient for industries?"
    ],
    suggestion: "Would setting up innovation hubs in universities encourage innovation among youth?"
  }
}

export default function Home() {
  const mapRef = useRef<HTMLElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSection.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroSection.map((site, index) => (
            <div
              key={site.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={site.imageUrl}
                alt={site.title}
                fill
                className="object-cover brightness-[0.6]"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSection.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Current slide info */}
        <div className="absolute bottom-20 left-10 text-white z-20 max-w-sm">
          <h3 className="text-xl font-semibold mb-1">{heroSection[currentSlide].title}</h3>
          <p className="text-sm opacity-90">{heroSection[currentSlide].location}</p>
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
              <Link href="/heritage">View Heritage</Link>
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

      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">State Priorities</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Exploring key areas of focus and development in Telangana, from education to healthcare, 
            agriculture to women's safety, and beyond.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Quality Education</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Ensuring equal access to quality education across all districts.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.education.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.education.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.education.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Healthcare Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Healthcare Services</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Providing accessible and quality healthcare to all citizens.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.healthcare.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.healthcare.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.healthcare.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Agriculture Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Agricultural Innovation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Modernizing agriculture and supporting farmers.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.agriculture.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.agriculture.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.agriculture.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Water Supply Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Water Supply</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Ensuring reliable irrigation and drinking water.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.water.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.water.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.water.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Women's Safety Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Women's Safety</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Creating a safe and secure environment for women.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.womensSafety.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.womensSafety.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.womensSafety.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Law & Order Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Law & Order</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Strengthening justice system and public safety.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.lawOrder.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.lawOrder.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.lawOrder.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Employment Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Employment</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Creating opportunities for youth and skill development.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.employment.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.employment.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.employment.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* IT & Industry Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold ml-4">IT & Industry</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Promoting innovation and industrial growth.</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-orange-600">{priorityDetails.itIndustry.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {priorityDetails.itIndustry.questions.map((question, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Suggestion</h4>
                    <p className="text-gray-700">{priorityDetails.itIndustry.suggestion}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
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

      {/* State Priorities Section */}
      
    </main>
  )
}

// export async function generateMetadata({ params }: { params: { district: string } }): Promise<Metadata> {
//   const districtName = params.district.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
//   return {
//     title: `${districtName} District`
//   };
// }
