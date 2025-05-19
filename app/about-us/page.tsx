"use client"

import { useState } from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role?: string;
  description: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  isLeadership?: boolean;
  profileDetails?: string;
}

const teamMembers: TeamMemberProps[] = [
  // Leadership (with enhanced card)
  {
    name: "Asha Latha",
    role: "Project Director",
    description: "Leads the overall vision and strategy for showcasing Telangana's rich culture.",
    imageUrl: "/team/ashalatha.jpg",
    isLeadership: true,
    profileDetails: "Asha Latha is the Project Director with 20+ years of experience in cultural initiatives. She is passionate about preserving Telangana's heritage and has led several successful projects in the region."
  },
  {
    name: "BS Murthy",
    role: "Project Director",
    description: "Leads the overall vision and strategy for showcasing Telangana's rich culture.",
    imageUrl: "/team/murthy.jpg",
    isLeadership: true,
    profileDetails: "BS Murthy is a visionary leader and Project Director, known for his dedication to cultural preservation and community engagement in Telangana."
  },
  {
    name: "Nagendra",
    role: "Head of Department",
    description: "Leads the overall vision and strategy for showcasing Telangana's rich culture.",
    imageUrl: "/team/nagendra.jpg",
    isLeadership: true,
    profileDetails: "Nagendra heads the department and brings a wealth of experience in managing large teams and executing impactful cultural programs."
  },
  {
    name: "Tanish Reddy",
    role: "Project Director",
    description: "Coordinates between different teams and ensures the smooth operation of all initiatives.",
    imageUrl: "/team/tanish.jpg",
    isLeadership: true,
    profileDetails: "Tanish Reddy is responsible for coordination and smooth operation of all initiatives, ensuring timely delivery and quality outcomes."
  },
  // Design and Editing Team
  {
    name: "Nihar",
    role: "Web Developer",
    description: "Manages the technical infrastructure and development of the website.",
    imageUrl: "/team/nihar.jpg",
    profileDetails: "Nihar is a dedicated developer focused on backend and infrastructure."
  },  
  {
    name: "Deepthi Kanigiri",
    role: "Lead Content Creator",
    description: "Oversees all content creation and maintains editorial standards.",
    imageUrl: "/team/deepthi.jpg",
    profileDetails: `I’m Deepthi Kanigiri, a postgraduate student in Aerospace Engineering and the Lead Content Creator for this platform. My role spans the full content development cycle—concept design, editorial oversight, and visual storytelling—delivering content that’s technically sound, engaging, and accessible. With hands on experience in CAD modeling, aerodynamic simulations, and engineering tools like SolidWorks and AutoCAD, I bring a unique blend of analytical thinking and creative execution. My current research on hypersonic airflow behavior shapes how I approach complexity-breaking it down and communicating it clearly.
    
    I blend engineering logic with creative communication to design high impact content across formats from technical briefs and slide decks to interactive visuals and design systems using tools like Canva and PowerPoint. Mathematics and music both sharpen my structural thinking and narrative clarity, while anime fuels my passion for visual storytelling. Whether under tight deadlines or high-pressure scenarios, I prioritize intentionality, clarity, and coherence building content that not only informs but connects.`
  },
  {
    name: "Bhargavi Peela",
    role: "Content Writer",
    description: "Specializes in coverage of local events and district profiles.",
    imageUrl: "/team/bhargavi.jpg",
    profileDetails: "Bhargavi Peela covers local events and brings district stories to life."
  },

  {
    name: "Sreekari Pendem",
    role: "Content Writer",
    description: "Researches and writes engaging content about Telangana's culture and heritage.",
    imageUrl: "/team/sreekari.jpg",
    profileDetails: `Hi! I’m P. Sreekari, an undergraduate student from the Engineering Science Department at IIT Hyderabad. I’m a curious and creative mind who loves exploring ideas, solving problems, and learning something new every day.

    Whether it’s through writing code, creating art, or having thoughtful conversations, I enjoy finding meaningful ways to connect with people and make a positive impact. I'm passionate about blending logic with creativity to understand the world better and maybe even change it a little.`
  },
  // Web Team
  {
    name: "Praneeth Chamarthy",
    role: "Web Developer",
    description: "Manages the technical infrastructure and development of the website.",
    imageUrl: "/team/praneeth.jpeg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth"
    },
    profileDetails: "Hi, I’m Chamarthy Praneeth, a second-year Computer Science undergraduate at IIT Hyderabad. I’m passionate about front-end web development and have led multiple college fest websites, including Milan, Diesta, and Prayas. I'm proficient in technologies like React, Next.js, Tailwind, and Three.js, and I recently built a full-stack cricket tournament management platform for a DBMS project. I'm also an active contributor to college activities, having coordinated both technical and logistical teams. I'm always eager to explore new frameworks and build user-focused web applications."
  },
  {
    name: "Gona Sanjana",
    role: "Web Developer",
    description: "Implements frontend features and ensures responsive design across devices.",
    imageUrl: "/team/sanjana.jpg",
    profileDetails: `I’m Gona Sanjana, a second-year Computer Science Engineering undergraduate at IIT Hyderabad. I’m passionate about front-end development and have honed my skills through self-driven learning and hands-on projects. From building a RISCV cache simulator to creating a dynamic cricket tournament management website, I enjoy solving complex problems and bringing ideas to life through code.

    My technical toolkit includes HTML, CSS, JavaScript, React, Node.js, and tools like Git and Docker. I'm a fast learner who thrives in collaborative environments and takes pride in balancing academics with extracurriculars. Outside the classroom, I'm an active member of the Shuffle Crew dance club, where I’ve performed in and helped organize several events, including Inter IIT competitions.

    I constantly seek opportunities to grow—both as a developer and as a creative individual.`
  },
  {
    name: "Chandra Neel",
    role: "Event Photographer",
    description: "Documents cultural events and festivals throughout the state.",
    imageUrl: "/team/chandra.jpg",
    profileDetails: "Chandra Neel specializes in event photography, documenting Telangana's vibrant festivals."
  },
  {
    name: "Arjun Nenavath",
    role: "Lead Photographer",
    description: "Captures the beauty of Telangana's landscapes, architecture, and people.",
    imageUrl: "/team/arjun.jpg",
    profileDetails: "Arjun Nenavath leads the photography team, capturing stunning visuals across Telangana."
  },
  {
    name: "Karthik Kumar",
    role: "Content Writer",
    description: "Researches and writes engaging content about Telangana's culture and heritage.",
    imageUrl: "/team/karthik.jpg",
    profileDetails:` Hello! I’m Narayana Karthik Kumar, an 3rd year undergraduate student at the Indian Institute of Technology Hyderabad (IIT Hyderabad). I’m currently pursuing my academic journey here with a deep interest in technology, innovation, and problem-solving. IIT Hyderabad has given me a platform to explore not just the depths of my chosen field, but also the broader spectrum of learning, collaboration, and personal growth.

    I believe in the power of curiosity and creativity to drive meaningful change. Whether it's working on class projects, participating in tech events, or collaborating with fellow students on real-world challenges, I’m always looking for opportunities to apply what I learn and push the boundaries of what’s possible.
    
    Outside the classroom, I’m actively involved in various campus activities and student communities. I enjoy engaging in extracurricular activities, whether it’s organizing competitive tournaments, contributing to clubs, or simply being part of a team working toward a shared goal. These experiences have helped me develop leadership, communication, and organizational skills, which I value as much as my technical knowledge.
    
    When I’m not working on academics or events, I love immersing myself in creative outlets. I have a passion for gaming, anime, coding, music, photography and cinematography which keeps me inspired and connected to a world beyond textbooks and deadlines. I also enjoy spending time exploring new ideas, whether through reading, watching documentaries, or brainstorming on my next project.
    
    Thanks for stopping by!`
    
  },


  // Management Team
  {
    name: "Charan",
    role: "Photographer",
    description: "Captures the beauty of Telangana's landscapes, architecture, and people.",
    imageUrl: "/team/charan1.jpg",
    profileDetails: "Charan is a passionate photographer with a love for Telangana's scenic beauty."
  }
  // Photography Team


];

function LeadershipCard({
  name,
  role,
  description,
  imageUrl,
  socialLinks,
  onViewProfile
}: TeamMemberProps & { onViewProfile: () => void }) {
  return (
    <div className="relative bg-gradient-to-br from-orange-100 via-white to-orange-200 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 border-2 border-orange-200">
      <div className="flex flex-col items-center p-8">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold text-orange-700 mb-1">{name}</h3>
        <p className="text-orange-500 font-semibold mb-2">{role}</p>
        <p className="text-gray-700 text-center mb-4">{description}</p>
        <div className="flex space-x-3 mb-4">
          {socialLinks?.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          )}
          {socialLinks?.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {socialLinks?.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          )}
        </div>
        <button
          onClick={onViewProfile}
          className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition-colors"
        >
          View Profile
        </button>
      </div>
      <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 rounded-bl-2xl font-bold text-xs shadow">Leadership</div>
    </div>
  );
}

function TeamMemberCard({
  name,
  role,
  description,
  imageUrl,
  socialLinks,
  onViewProfile
}: TeamMemberProps & { onViewProfile: () => void }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
      <div className="relative w-full h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <Image
          src={imageUrl}
          alt={`${name} - ${role}`}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{name}</h3>
          <div className="flex items-center mt-1">
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
          <button
            onClick={onViewProfile}
            className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-orange-200 transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileDialog({
  open,
  onClose,
  member
}: {
  open: boolean;
  onClose: () => void;
  member?: TeamMemberProps;
}) {
  if (!open || !member) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-orange-400 shadow">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3 className="text-xl font-bold text-orange-700 mb-1">{member.name}</h3>
          <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
          <p className="text-gray-700 text-center">{member.profileDetails || member.description}</p>
        </div>
      </div>
    </div>
  );
}

function MainLeaderProfile({
  name,
  role,
  description,
  imageUrl,
  profileDetails,
  onViewProfile
}: TeamMemberProps & { onViewProfile: () => void }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100">
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl transform -rotate-6"></div>
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-bold text-orange-700 mb-2">{name}</h3>
        <p className="text-xl text-orange-500 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{profileDetails}</p>
        <button
          onClick={onViewProfile}
          className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
        >
          View Full Profile
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | undefined>(undefined);

  const handleViewProfile = (member: TeamMemberProps) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const mainLeaders = teamMembers.slice(0, 3);
  const secondaryLeaders = teamMembers.slice(3, 5); // Tanish and Nihar
  const otherMembers = teamMembers.slice(5);

  return (
    <div className="container mx-auto px-4 py-10 md:py-16 bg-gray-50">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our Team</h1>
      <div className="max-w-7xl mx-auto">
        {/* Top Leadership Section */}
        <div className="space-y-8 mb-16">
          {mainLeaders.map((leader) => (
            <MainLeaderProfile
              key={leader.name}
              {...leader}
              onViewProfile={() => handleViewProfile(leader)}
            />
          ))}
        </div>

        {/* Secondary Leaders (Tanish and Nihar) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {secondaryLeaders.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              onViewProfile={() => handleViewProfile(member)}
            />
          ))}
        </div>

        {/* Other Team Members */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {otherMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              onViewProfile={() => handleViewProfile(member)}
            />
          ))}
        </div>
      </div>
      <ProfileDialog open={dialogOpen} onClose={() => setDialogOpen(false)} member={selectedMember} />
    </div>
  );
}