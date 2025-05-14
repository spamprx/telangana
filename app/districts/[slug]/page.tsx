import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDistrictData } from "@/lib/districts"

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = getDistrictData(params.slug)

  if (!district) {
    return (
      <div className="container px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">District not found</h1>
        <p className="mb-8">The district you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/districts">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Districts
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            // src={district.coverImage || "/placeholder.svg"}
            src="/dummy-image.jpg" 
            alt={`${district.name} District`}
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{district.name} District</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/districts">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Districts
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About {district.name}</h2>
              <p className="text-gray-700 mb-6">{district.description}</p>

              <h2 className="text-2xl font-bold mb-4">Major Issues</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {district.issues.map((issue, index) => (
                  <li key={index} className="text-gray-700">
                    {issue}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Initiatives</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {district.initiatives.map((initiative, index) => (
                  <li key={index} className="text-gray-700">
                    {initiative}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">Population:</span> {district.population}
                    </li>
                    <li>
                      <span className="font-medium">Area:</span> {district.area}
                    </li>
                    <li>
                      <span className="font-medium">Headquarters:</span> {district.headquarters}
                    </li>
                    <li>
                      <span className="font-medium">Major Towns:</span> {district.majorTowns.join(", ")}
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <Image
                    // src={district.mapImage || "/placeholder.svg"}
                    src="/dummy-image.jpg" // Using dummy image
                    alt={`Map of ${district.name} District`}
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
