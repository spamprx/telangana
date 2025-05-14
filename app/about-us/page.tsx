import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Telangana",
  description: "Learn about the team behind Telangana's official website",
}


interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    socialLinks?: {
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  }
  

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 bg-gray-50">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our Team</h1>
      
      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-600 border-b pb-2">Leadership</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <TeamMember
              name="Nagendra"
              role="Head of Department"
              description="Leads the overall vision and strategy for showcasing Telangana's rich culture."
              imageUrl="/placeholder-profile1.jpg"
            />
            <TeamMember
              name="Tanish Reddy"
              role="Project Director"
              description="Coordinates between different teams and ensures the smooth operation of all initiatives."
              imageUrl="/placeholder-profile2.jpg"
            />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-600 border-b pb-2">Editing Team</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Deepthi Kangiri"
              role="Lead Content Editor"
              description="Oversees all content creation and maintains editorial standards."
              imageUrl="/deepthi.jpg"
            />
            <TeamMember
              name="Karthik Kumar"
              role="Content Writer"
              description="Researches and writes engaging content about Telangana's culture and heritage."
              imageUrl="/placeholder-profile4.jpg"
            />
            <TeamMember
              name="Bhargavi Peela"
              role="Content Writer"
              description="Specializes in coverage of local events and district profiles."
              imageUrl="/placeholder-profile5.jpg"
            />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-600 border-b pb-2">Web Team</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Praneeth Chamarthy"
              role="Lead Developer"
              description="Manages the technical infrastructure and development of the website."
              imageUrl="/hi.jpeg"
              socialLinks={{
                twitter: "https://twitter.com/praneeth",
                linkedin: "https://linkedin.com/in/praneeth",
                github: "https://github.com/praneeth"
              }}
            />
            <TeamMember
              name="Sanjana Gona"
              role="Web Developer"
              description="Implements frontend features and ensures responsive design across devices."
              imageUrl="/placeholder-profile8.jpg"
            />
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-600 border-b pb-2">Photography Team</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <TeamMember
              name="Arjun Nenavath"
              role="Lead Photographer"
              description="Captures the beauty of Telangana's landscapes, architecture, and people."
              imageUrl="/placeholder-profile9.jpg"
            />
            <TeamMember
              name="Chandra Neel"
              role="Event Photographer"
              description="Documents cultural events and festivals throughout the state."
              imageUrl="/placeholder-profile10.jpg"
            />
            <TeamMember
              name="Charan"
              role="Photographer"
              description="Captures the beauty of Telangana's landscapes, architecture, and people."
              imageUrl="/placeholder-profile9.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function TeamMember({ name, role, description, imageUrl, socialLinks }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
      <div className="relative w-full h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <Image 
          src={imageUrl} 
          alt={`${name} - ${role}`}
          fill
          style={{objectFit: "cover"}}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{name}</h3>
          <div className="flex items-center mt-1">
            <div className="h-0.5 w-8 bg-orange-500 mr-2"></div>
            <p className="text-orange-300 font-medium">{role}</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex space-x-3">
            {socialLinks?.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            )}
            {socialLinks?.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {socialLinks?.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
          </div>
          <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">View Profile</div>
        </div>
      </div>
    </div>
  )
} 