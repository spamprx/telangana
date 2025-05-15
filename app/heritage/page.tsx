import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Heritage"
};

interface HeritageCardProps {
    title: string;
    location: string;
    description: string;
    imageUrl: string;
  }

export default function HeritagePage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Heritage of Telangana</h1>
      
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700">
          Telangana is home to a rich tapestry of cultural and historical landmarks that reflect its diverse heritage.
          From ancient temples to magnificent forts and palaces, the state preserves centuries of history and tradition.
        </p>
      </div>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600 text-center">Temples</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <HeritageCard
            title="Ramappa Temple"
            location="Palampet, Mulugu"
            description="A 13th-century temple known for its intricate carvings and floating bricks. Recently designated as a UNESCO World Heritage Site."
            imageUrl="/placeholder-ramappa.jpg"
          />
          <HeritageCard
            title="Thousand Pillar Temple"
            location="Hanamkonda, Warangal"
            description="Built in 1163 AD by the Kakatiya king, this star-shaped temple is known for its exquisite stone carvings and thousand pillars."
            imageUrl="/placeholder-thousand-pillar.jpg"
          />
          <HeritageCard
            title="Jogulamba Temple"
            location="Alampur, Gadwal"
            description="One of the 18 Maha Shakti Peethas in India, this ancient temple is dedicated to Goddess Jogulamba."
            imageUrl="/placeholder-jogulamba.jpg"
          />
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600 text-center">Forts & Palaces</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <HeritageCard
            title="Golconda Fort"
            location="Hyderabad"
            description="A magnificent 16th-century fort known for its acoustic design, impressive architecture, and historical significance."
            imageUrl="/placeholder-golconda.jpg"
          />
          <HeritageCard
            title="Charminar"
            location="Hyderabad"
            description="The iconic symbol of Hyderabad, built in 1591, is a stunning example of Indo-Islamic architecture."
            imageUrl="/placeholder-charminar.jpg"
          />
          <HeritageCard
            title="Warangal Fort"
            location="Warangal"
            description="A 13th-century fort built by the Kakatiya dynasty featuring impressive stone gateways and intricate sculptures."
            imageUrl="/placeholder-warangal-fort.jpg"
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-orange-600 text-center">Historical Sites</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <HeritageCard
            title="Qutb Shahi Tombs"
            location="Hyderabad"
            description="A complex of tombs housing the remains of the Qutb Shahi dynasty rulers, featuring Persian, Hindu, and Pathan architectural styles."
            imageUrl="/placeholder-qutb-shahi.jpg"
          />
          <HeritageCard
            title="Bhongir Fort"
            location="Bhongir, Yadadri"
            description="A unique egg-shaped hill fort built in the 10th century by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI."
            imageUrl="/placeholder-bhongir.jpg"
          />
          <HeritageCard
            title="Kolanupaka Temple"
            location="Kolanupaka, Yadadri"
            description="An ancient Jain temple with remarkable carvings and sculptures, including a 5-foot monolithic statue of Mahavira."
            imageUrl="/placeholder-kolanupaka.jpg"
          />
        </div>
      </section>
    </div>
  )
}


function HeritageCard({ title, location, description, imageUrl }: HeritageCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          style={{objectFit: "cover"}}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-orange-600 text-sm mb-3">{location}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
} 