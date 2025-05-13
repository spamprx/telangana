import Link from "next/link"
import Image from "next/image"
import { districts } from "@/lib/districts"

export function DistrictList() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-orange-600 text-white">
        <h2 className="text-xl font-bold">All Districts</h2>
      </div>
      <div className="divide-y max-h-[600px] overflow-y-auto">
        {districts.map((district) => (
          <Link
            key={district.slug}
            href={`/districts/${district.slug}`}
            className="flex items-center p-4 hover:bg-orange-50 transition-colors"
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
              <h3 className="font-medium">{district.name}</h3>
              <p className="text-sm text-gray-500">{district.headquarters}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
