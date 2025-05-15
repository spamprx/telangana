import { EventCarousel } from "@/components/event-carousel"
import { EventList } from "@/components/event-list"

export const metadata = {
  title: "Events"
};

export default function EventsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-12 bg-orange-50">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-center">Events & Initiatives</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Explore our past and upcoming events across Telangana. From community outreach to policy discussions, see
            how we're making a difference.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
            <EventCarousel />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">All Events</h2>
            <EventList />
          </div>
        </div>
      </section>
    </main>
  )
}
