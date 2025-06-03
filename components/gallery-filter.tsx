"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// const categories = [
//   { id: "all", name: "All Photos" },
//   { id: "events", name: "Events" },
//   { id: "districts", name: "District Visits" },
//   { id: "community", name: "Community Outreach" },
//   { id: "cultural", name: "Cultural Programs" },
// ]

const locations = [
  { id: "all", name: "All Locations" },
  { id: "adilabad", name: "Adilabad" },
  { id: "bhadradri-kothagudem", name: "Bhadradri Kothagudem" },
  { id: "hanumakonda", name: "Hanumakonda" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "jagitial", name: "Jagitial" },
  { id: "jangaon", name: "Jangaon" },
  { id: "jayashankar-bhupalpally", name: "Jayashankar Bhupalpally" },
  { id: "jogulamba-gadwal", name: "Jogulamba Gadwal" },
  { id: "kamareddy", name: "Kamareddy" },
  { id: "karimnagar", name: "Karimnagar" },
  { id: "khammam", name: "Khammam" },
  { id: "komaram-bheem-asifabad", name: "Komaram Bheem Asifabad" },
  { id: "mahabubabad", name: "Mahabubabad" },
  { id: "mahabubnagar", name: "Mahabubnagar" },
  { id: "mancherial", name: "Mancherial" },
  { id: "medak", name: "Medak" },
  { id: "medchal-malkajgiri", name: "Medchal–Malkajgiri" },
  { id: "mulugu", name: "Mulugu" },
  { id: "nagarkurnool", name: "Nagarkurnool" },
  { id: "nalgonda", name: "Nalgonda" },
  { id: "narayanpet", name: "Narayanpet" },
  { id: "nirmal", name: "Nirmal" },
  { id: "nizamabad", name: "Nizamabad" },
  { id: "peddapalli", name: "Peddapalli" },
  { id: "rajanna-sircilla", name: "Rajanna Sircilla" },
  { id: "ranga-reddy", name: "Ranga Reddy" },
  { id: "sangareddy", name: "Sangareddy" },
  { id: "siddipet", name: "Siddipet" },
  { id: "suryapet", name: "Suryapet" },
  { id: "vikarabad", name: "Vikarabad" },
  { id: "wanaparthy", name: "Wanaparthy" },
  { id: "warangal", name: "Warangal" },
  { id: "yadadri-bhuvanagiri", name: "Yadadri Bhuvanagiri" }
]

export function GalleryFilter({ 
  activeLocation, 
  setActiveLocation,
  searchQuery,
  setSearchQuery 
}: { 
  activeLocation: string, 
  setActiveLocation: (loc: string) => void,
  searchQuery: string,
  setSearchQuery: (query: string) => void 
}) {
  const getSearchPlaceholder = () => {
    if (activeLocation === "all") {
      return "Search by location, event, or description..."
    }
    const location = locations.find(loc => loc.id === activeLocation)
    return `Search in ${location?.name || ""} by event or description...`
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder={getSearchPlaceholder()}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {/* <div>
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
        </div> */}

        <div>
          <h3 className="text-sm font-medium mb-2">Location</h3>
          <Select value={activeLocation} onValueChange={setActiveLocation}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
