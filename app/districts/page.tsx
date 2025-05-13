import { DistrictMap } from "@/components/district-map"
import { DistrictList } from "@/components/district-list"

export default function DistrictsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 bg-orange-50">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-center">Telangana Districts</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Explore all 33 districts of Telangana. Click on any district to learn more about its unique features,
            challenges, and initiatives.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <DistrictList />
            </div>
            <div className="lg:col-span-3">
              <DistrictMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
