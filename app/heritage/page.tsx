"use client"

import Image from "next/image"
import Link from "next/link"
import { heritageSites, HeritageSite } from "../../lib/heritageData"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

interface HeritageCardProps {
  site: HeritageSite;
}

export default function HeritagePage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  const selectedCategory = searchParams.category;

  // Filter sites based on category and search query
  const filteredSites = heritageSites
    .filter(site => {
      const matchesCategory = !selectedCategory || site.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title

  const totalPages = Math.ceil(filteredSites.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSites = filteredSites.slice(startIndex, endIndex);

  const categories = ['Temples', 'Forts & Palaces', 'Historical Sites'];

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Heritage of Telangana</h1>
      
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700">
          Telangana is home to a rich tapestry of cultural and historical landmarks that reflect its diverse heritage.
          From ancient temples to magnificent forts and palaces, the state preserves centuries of history and tradition.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search heritage sites..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        <Link
          href="/heritage"
          className={`px-4 py-2 rounded-full ${
            !selectedCategory
              ? 'bg-orange-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/heritage?category=${encodeURIComponent(category)}`}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {currentSites.map((site) => (
          <HeritageCard key={site.id} site={site} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/heritage?page=${page}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function HeritageCard({ site }: HeritageCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 w-full">
        <Image 
          src={site.imageUrl} 
          alt={site.title}
          fill
          style={{objectFit: "cover"}}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium mb-1">{site.title}</h3>
        <p className="text-orange-600 text-sm mb-3">{site.location}</p>
        <p className="text-gray-600 text-sm">{site.description}</p>
      </div>
    </div>
  )
} 