"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
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
import { useSwipeable } from "react-swipeable"

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSection.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % heroSection.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + heroSection.length) % heroSection.length),
    trackMouse: true,
  });

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        {...handlers}
      >
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

        {/* Navigation Arrows (Desktop only) */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSection.length) % heroSection.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 group hidden md:block"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSection.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 group hidden md:block"
          aria-label="Next slide"
        >
          <ArrowRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
        
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

        {/* Buttons (Desktop only) */}
        <div className="container relative z-10 px-4 md:px-6 text-center text-white hidden md:block">
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

      {/* Buttons (Mobile only, above Moto) */}
      <div className="block md:hidden w-full px-4 mt-4 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-4">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full" onClick={scrollToMap}>
            Explore State
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Link href="/heritage">View Heritage</Link>
          </Button>
        </div>
      </div>

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
            <div className="relative aspect-square w-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/logo.svg"
                alt="Telangana Culture" 
                fill 
                className="object-contain p-12 bg-gradient-to-br from-orange-50 via-white to-orange-100" 
                priority
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

      {/* State Priorities Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              State Priorities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Exploring key areas of focus and development in Telangana, from education to healthcare, 
              agriculture to women's safety, and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Education Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quality Education</h3>
                    <p className="text-white/90 text-sm">Free & accessible learning for all</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-blue-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                        {priorityDetails.education.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.education.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.education.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Healthcare Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
                    <p className="text-white/90 text-sm">Accessible medical services for all</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-emerald-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                        {priorityDetails.healthcare.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-emerald-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <span className="text-emerald-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.healthcare.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.healthcare.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Agriculture Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Agriculture</h3>
                    <p className="text-white/90 text-sm">Modern farming & farmer support</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-green-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-green-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        {priorityDetails.agriculture.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.agriculture.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.agriculture.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Water Supply Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Water Supply</h3>
                    <p className="text-white/90 text-sm">Irrigation & drinking water access</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-cyan-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-cyan-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                        {priorityDetails.water.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-cyan-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <span className="text-cyan-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.water.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.water.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Women's Safety Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Women's Safety</h3>
                    <p className="text-white/90 text-sm">Secure environment for all women</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-pink-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                        {priorityDetails.womensSafety.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-pink-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <span className="text-pink-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.womensSafety.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.womensSafety.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Law & Order Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Law & Order</h3>
                    <p className="text-white/90 text-sm">Justice system & public safety</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-purple-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                        {priorityDetails.lawOrder.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.lawOrder.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.lawOrder.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Employment Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Youth Empowerment</h3>
                    <p className="text-white/90 text-sm">Jobs & skill development</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-amber-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-amber-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                        {priorityDetails.employment.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <span className="text-amber-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.employment.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.employment.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* IT & Industry Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">IT & Industry</h3>
                    <p className="text-white/90 text-sm">Innovation & industrial growth</p>
                    <div className="mt-4 flex items-center text-white/80 text-sm">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden border-0">
                <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-300/20 rounded-full blur-2xl -z-10"></div>
                  
                  <DialogHeader className="relative pb-4 border-b border-indigo-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                        {priorityDetails.itIndustry.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-8 overflow-y-auto max-h-[60vh] px-2">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-indigo-100">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <span className="text-indigo-600 text-lg">?</span>
                        </div>
                        Key Questions
                      </h4>
                      <div className="space-y-3">
                        {priorityDetails.itIndustry.questions.map((question, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-semibold">{index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {question}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        Our Suggestion
                      </h4>
                      <p className="text-white/95 leading-relaxed">
                        {priorityDetails.itIndustry.suggestion}
                      </p>
                    </div>
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
    </main>
  )
}

// export async function generateMetadata({ params }: { params: { district: string } }): Promise<Metadata> {
//   const districtName = params.district.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
//   return {
//     title: `${districtName} District`
//   };
// }
