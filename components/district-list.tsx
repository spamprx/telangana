"use client"

import Link from "next/link"
import Image from "next/image"
import { districts } from "@/lib/districts"
import { useState } from "react"

export function DistrictList() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter and sort districts based on search term
  const filteredDistricts = districts
    .filter(district => 
      district.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4 bg-white border-b border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">All Districts</h2>
        
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search districts..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
        {filteredDistricts.map((district) => (
          <Link
            key={district.slug}
            href={`/districts/${district.slug}`}
            className="flex items-center p-4 hover:bg-gray-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
              <Image
                // src={district.thumbnail || "/district-placeholder.jpg"}
                src="/dummy-image.jpg" // Using dummy image
                alt={district.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-gray-800">{district.name}</h3>
              <p className="text-sm text-gray-500">{district.headquarters}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}