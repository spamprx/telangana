"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  { id: "all", name: "All Photos" },
  { id: "events", name: "Events" },
  { id: "districts", name: "District Visits" },
  { id: "community", name: "Community Outreach" },
  { id: "cultural", name: "Cultural Programs" },
]

const locations = [
  { id: "all", name: "All Locations" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "warangal", name: "Warangal" },
  { id: "karimnagar", name: "Karimnagar" },
  { id: "nizamabad", name: "Nizamabad" },
]

export function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeLocation, setActiveLocation] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search gallery..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Location</h3>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <Button
                key={location.id}
                variant={activeLocation === location.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveLocation(location.id)}
                className={activeLocation === location.id ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {location.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
