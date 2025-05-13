export interface Event {
  id: number
  slug: string
  title: string
  date: string
  location: string
  description: string
  image: string
  content?: string
}

export const featuredEvents: Event[] = [
  {
    id: 1,
    slug: "warangal-development-conference",
    title: "Warangal Development Conference",
    date: "May 15, 2023",
    location: "Warangal",
    description:
      "A major conference bringing together policy makers, urban planners, and citizens to discuss the future development of Warangal district, focusing on infrastructure, heritage preservation, and economic growth.",
    // image: "/events/warangal-conference.jpg",
    image: "/dummy-image.jpg",
  },
  {
    id: 2,
    slug: "hyderabad-tech-summit",
    title: "Hyderabad Tech Summit",
    date: "April 22, 2023",
    location: "Hyderabad",
    description:
      "The annual technology summit bringing together industry leaders, startups, and government officials to showcase innovation and discuss Telangana's digital future.",
    // image: "/events/tech-summit.jpg",
    image: "/dummy-image.jpg",
  },
  {
    id: 3,
    slug: "rural-outreach-program",
    title: "Rural Outreach Program",
    date: "March 10, 2023",
    location: "Multiple Districts",
    description:
      "A comprehensive outreach initiative across rural Telangana addressing agricultural concerns, healthcare access, and educational opportunities for rural communities.",
    // image: "/events/rural-outreach.jpg",
    image: "/dummy-image.jpg",
  },
]

export const allEvents: Event[] = [
  ...featuredEvents,
  {
    id: 4,
    slug: "cultural-heritage-festival",
    title: "Telangana Cultural Heritage Festival",
    date: "February 18, 2023",
    location: "Hyderabad",
    description:
      "A celebration of Telangana's rich cultural heritage featuring traditional music, dance, crafts, and cuisine from across the state.",
    // image: "/events/cultural-festival.jpg",
    image: "/dummy-image.jpg",
  },
  {
    id: 5,
    slug: "irrigation-project-inauguration",
    title: "Irrigation Project Inauguration",
    date: "January 25, 2023",
    location: "Nizamabad",
    description:
      "Inauguration of a major irrigation project that will benefit farmers across multiple districts in northern Telangana.",
    image: "/events/irrigation-project.jpg",
  },
  {
    id: 6,
    slug: "healthcare-initiative-launch",
    title: "Rural Healthcare Initiative Launch",
    date: "December 12, 2022",
    location: "Karimnagar",
    description:
      "Launch of a new healthcare initiative aimed at improving medical facilities and services in rural areas of Telangana.",
    image: "/events/healthcare-initiative.jpg",
  },
  {
    id: 7,
    slug: "education-reform-conference",
    title: "Education Reform Conference",
    date: "November 5, 2022",
    location: "Hyderabad",
    description:
      "A conference focused on educational reforms and improvements across Telangana's public education system.",
    image: "/events/education-conference.jpg",
  },
  {
    id: 8,
    slug: "tribal-welfare-program",
    title: "Tribal Welfare Program",
    date: "October 18, 2022",
    location: "Khammam",
    description: "A comprehensive program addressing the needs and development of tribal communities in Telangana.",
    image: "/events/tribal-welfare.jpg",
  },
  {
    id: 9,
    slug: "tourism-development-workshop",
    title: "Tourism Development Workshop",
    date: "September 22, 2022",
    location: "Warangal",
    description: "A workshop focused on developing tourism potential across Telangana's historical and natural sites.",
    image: "/events/tourism-workshop.jpg",
  },
]
