import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  title: string
  date: string
  image: string
  description: string
  href: string
}

export function EventCard({ title, date, image, description, href }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link href={href}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}
