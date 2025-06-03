import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heritage",
  description: "Explore the rich heritage of Telangana, including temples, forts, palaces, and historical sites."
}

export default function HeritageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 