import { EventCard } from "@/components/event-card"
import { allEvents } from "@/lib/events"

export function EventList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allEvents.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          description={event.description}
          href={`/events/${event.slug}`}
        />
      ))}
    </div>
  )
}
