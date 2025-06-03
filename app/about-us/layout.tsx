import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Telangana's cultural preservation and heritage documentation efforts."
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}