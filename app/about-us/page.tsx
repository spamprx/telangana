"use client";

import { useState, useEffect } from "react";
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
  {
    name: "Asha Latha",
    // role: "Founding Patron",
    description:
      "Visionary leader with 20+ years of experience in cultural preservation and community development.",
    imageUrl: "/team/ashalatha.jpeg",
    isLeadership: true,
    profileDetails: `Smt. Rayapudi Varalakshmi 'Ashalatha' is a dedicated social activist, seasoned politician, and the current President of BJP Mahila Morcha, Miryalaguda, Telangana. With over 25 years of community service and 8+ years of active political engagement, she has emerged as a respected grassroots leader committed to the ideals of the Bharatiya Janata Party. Her efforts focus on empowering women, uplifting underprivileged communities, and driving positive social transformation across caste, religion, and region.

She is the founder of multiple service organizations like Vasavamba Club and Vanitaku Vandanam, and has led impactful initiatives such as skill development for women, environmental campaigns, and large-scale COVID-19 relief programs. As a successful entrepreneur heading Sai Teja Solvent and Rayapudi Agro Oil Industries, she brings both administrative and grassroots strength to her leadership. Guided by the principle of "Sabka Saath, Sabka Vikas," she continues to serve as a powerful voice for social good and public welfare.`,
  },
  {
    name: "BS Murty",
    // role: "Founding Patron",
    description:
      "Strategic leader with extensive experience in cultural management and heritage preservation.",
    imageUrl: "/team/bs-murthy.jpg",
    isLeadership: true,
    profileDetails: `Prof. B. S. Murty is the Director of IIT Hyderabad and an internationally acclaimed materials scientist known for his pioneering contributions to nanomaterials, high entropy alloys, bulk metallic glasses, and advanced aluminum alloys. A distinguished alumnus of IISc Bangalore and VNIT Nagpur, he has served as a faculty member at IIT Kharagpur and as Institute Professor at IIT Madras. He has authored over 470 research papers, guided more than 50 PhD scholars, filed 20 patents, and co-authored 4 books. He also played a key role in establishing India's first Atom Probe Tomography facility and the Deakin-IITM Centre of Excellence on Advanced Materials.

A recipient of the prestigious Shanti Swarup Bhatnagar Prize and JC Bose Fellowship, Prof. Murty is a fellow of TWAS, INSA, INAE, and other leading scientific academies. Since taking over as Director of IIT Hyderabad in August 2019, he has been instrumental in advancing interdisciplinary research, deep-tech innovation, and futuristic education, steering the institute toward becoming a global leader in science and technology.`,
  },
  {
    name: "Nagendra",
    // role: "Founding Patron",
    description:
      "Experienced leader with expertise in cultural program management and team leadership.",
    imageUrl: "/team/nagendra.jpg",
    isLeadership: true,
    profileDetails: `Nagendra is a professional cricketer and IIT Bombay B.Tech alumnus, currently representing the Hyderabad Ranji Trophy team and playing county cricket in the UK. With roots in Hyderabad and global experience, he blends the discipline and resilience of sport with a deep commitment to development. Guided by his mother's words — "When you open your eyes, see the nation; when you close them, see God" — Nagendra lives by a philosophy that balances national service with personal purpose.

Beyond cricket, he has undertaken an extensive grassroots journey across Telangana, visiting over 8,000 villages, thousands of government schools, hospitals, and key infrastructure sites. His close engagement with farmers, educators, healthcare workers, and entrepreneurs has equipped him with a unique, ground-up perspective on regional challenges and opportunities. This fusion of athletic excellence, academic achievement, and development advocacy defines his mission to drive meaningful change.`,
  },
  {
    name: "Tanish Reddy",
    // role: "Director of Field Strategy and Operations",
    description:
      "Technical leader specializing in backend systems and infrastructure development.",
    imageUrl: "/team/tanish.jpeg",
    isLeadership: true,
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails: `Tanish Reddy is a dynamic and well-rounded student of Chemical Engineering at IIT Hyderabad, originally from Vijayawada. A national-level football and air rifle shooting athlete, he combines discipline and precision from sports with leadership and initiative on campus. He has served as the Finance Head of Milan, IIT Hyderabad's premier cultural fest, and anchored two Gymkhana elections, reflecting his strong communication and organizational skills. Tanish also leads as the President of the Telugu Association at IITH and is currently the Mess Overall Coordinator, managing operations that impact the day-to-day campus experience.

In parallel with his academic and leadership roles, Tanish is building his professional journey as a Full Stack Development Intern in Bengaluru. His ability to balance technical expertise, cultural engagement, and operational leadership highlights his versatility and commitment to holistic growth—both as a student and a future professional.`,
  },
  {
    name: "Nihar Kartikeya",
    // role: "Executive Lead – Vision & Expansion",
    description:
      "Strategic leader with expertise in vision development and organizational growth.",
    imageUrl: "/team/nihar.jpeg",
    isLeadership: true,
    socialLinks: {
      twitter: "https://twitter.com/nihar",
      linkedin: "https://linkedin.com/in/nihar",
      github: "https://github.com/nihar",
    },
    profileDetails: `Nihar Kartikeya is a visionary leader with a strong background in strategic planning and organizational development. As the Executive Lead for Vision & Expansion, he focuses on driving the organization's growth and ensuring its long-term success.

His expertise includes:
• Strategic vision development
• Organizational growth planning
• Team leadership and mentorship
• Innovation and transformation initiatives

With a proven track record of successful project management and team leadership, Nihar brings a unique perspective to the organization's expansion efforts. His ability to balance innovation with practical implementation has been instrumental in driving the organization's success.`,
  },
  {
    name: "Deepthi Kanigiri",
    // role: "Lead Content Creator",
    description:
      "Oversees all content creation and maintains editorial standards.",
    imageUrl: "/team/deepthi.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails: `I'm Deepthi Kanigiri, a postgraduate student in Aerospace Engineering and the Lead Content Creator for this platform. My role spans the full content development cycle—concept design, editorial oversight, and visual storytelling—delivering content that's technically sound, engaging, and accessible. With hands on experience in CAD modeling, aerodynamic simulations, and engineering tools like SolidWorks and AutoCAD, I bring a unique blend of analytical thinking and creative execution. My current research on hypersonic airflow behavior shapes how I approach complexity-breaking it down and communicating it clearly.
    
    I blend engineering logic with creative communication to design high impact content across formats from technical briefs and slide decks to interactive visuals and design systems using tools like Canva and PowerPoint. Mathematics and music both sharpen my structural thinking and narrative clarity, while anime fuels my passion for visual storytelling. Whether under tight deadlines or high-pressure scenarios, I prioritize intentionality, clarity, and coherence building content that not only informs but connects.`,
  },
  {
    name: "Bhargavi Peela",
    // role: "Content Writer",
    description:
      "Specializes in coverage of local events and district profiles.",
    imageUrl: "/team/bhargavi.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails:
      "Bhargavi Peela covers local events and brings district stories to life.",
  },

  {
    name: "Sreekari Pendem",
    // role: "Content Writer",
    description:
      "Researches and writes engaging content about Telangana's culture and heritage.",
    imageUrl: "/team/sreekari.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails: `Hi! I'm P. Sreekari, an undergraduate student from the Engineering Science Department at IIT Hyderabad. I'm a curious and creative mind who loves exploring ideas, solving problems, and learning something new every day.

    Whether it's through writing code, creating art, or having thoughtful conversations, I enjoy finding meaningful ways to connect with people and make a positive impact. I'm passionate about blending logic with creativity to understand the world better and maybe even change it a little.`,
  },
  {
    name: "Praneeth Chamarthy",
    // role: "Web Developer",
    description:
      "Manages the technical infrastructure and development of the website.",
    imageUrl: "/team/praneeth.jpeg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails:
      "Hi, I'm Chamarthy Praneeth, a second-year Computer Science undergraduate at IIT Hyderabad. I'm passionate about front-end web development and have led multiple college fest websites, including Milan, Diesta, and Prayas. I'm proficient in technologies like React, Next.js, Tailwind, and Three.js, and I recently built a full-stack cricket tournament management platform for a DBMS project. I'm also an active contributor to college activities, having coordinated both technical and logistical teams. I'm always eager to explore new frameworks and build user-focused web applications.",
  },
  {
    name: "Gona Sanjana",
    // role: "Web Developer",
    description:
      "Implements frontend features and ensures responsive design across devices.",
    imageUrl: "/team/sanjana.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails: `I'm Gona Sanjana, a second-year Computer Science Engineering undergraduate at IIT Hyderabad. I'm passionate about front-end development and have honed my skills through self-driven learning and hands-on projects. From building a RISCV cache simulator to creating a dynamic cricket tournament management website, I enjoy solving complex problems and bringing ideas to life through code.

    My technical toolkit includes HTML, CSS, JavaScript, React, Node.js, and tools like Git and Docker. I'm a fast learner who thrives in collaborative environments and takes pride in balancing academics with extracurriculars. Outside the classroom, I'm an active member of the Shuffle Crew dance club, where I've performed in and helped organize several events, including Inter IIT competitions.

    I constantly seek opportunities to grow—both as a developer and as a creative individual.`,
  },
  {
    name: "Arjun Nenavath",
    // role: "Lead Photographer",
    description:
      "Captures the beauty of Telangana's landscapes, architecture, and people.",
    imageUrl: "/team/arjun.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails:
      "Arjun Nenavath leads the photography team, capturing stunning visuals across Telangana.",
  },
  {
    name: "Karthik Kumar",
    // role: "Photographer",
    description:
      "Researches and writes engaging content about Telangana's culture and heritage.",
    imageUrl: "/team/karthik.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails: ` Hello! I'm Narayana Karthik Kumar, an 3rd year undergraduate student at the Indian Institute of Technology Hyderabad (IIT Hyderabad). I'm currently pursuing my academic journey here with a deep interest in technology, innovation, and problem-solving. IIT Hyderabad has given me a platform to explore not just the depths of my chosen field, but also the broader spectrum of learning, collaboration, and personal growth.

    I believe in the power of curiosity and creativity to drive meaningful change. Whether it's working on class projects, participating in tech events, or collaborating with fellow students on real-world challenges, I'm always looking for opportunities to apply what I learn and push the boundaries of what's possible.
    
    Outside the classroom, I'm actively involved in various campus activities and student communities. I enjoy engaging in extracurricular activities, whether it's organizing competitive tournaments, contributing to clubs, or simply being part of a team working toward a shared goal. These experiences have helped me develop leadership, communication, and organizational skills, which I value as much as my technical knowledge.
    
    When I'm not working on academics or events, I love immersing myself in creative outlets. I have a passion for gaming, anime, coding, music, photography and cinematography which keeps me inspired and connected to a world beyond textbooks and deadlines. I also enjoy spending time exploring new ideas, whether through reading, watching documentaries, or brainstorming on my next project.
    
    Thanks for stopping by!`,
  },

  {
    name: "Charan",
    // role: "Management Team",
    description:
      "Manages the organization's operations and ensures smooth coordination.",
    imageUrl: "/team/charan1.jpg",
    socialLinks: {
      twitter: "https://twitter.com/praneeth",
      linkedin: "https://linkedin.com/in/praneeth",
      github: "https://github.com/praneeth",
    },
    profileDetails: ` Hi! I'm G Sai Charan, a second-year Chemical Engineering student at IIT Hyderabad. I'm deeply passionate about both the world of chemical processes and the fast-paced realm of international trading—especially in currencies, commodities, and forex.

With a growing foundation in chemical process calculations and core engineering subjects, I enjoy exploring how theoretical knowledge translates into real-world applications. At the same time, I'm fascinated by global markets and the strategies that drive international trade—an intersection where logic, analysis, and timing all come into play.

When I'm not diving into equations or watching market trends, you'll probably find me engaging in meaningful conversations, exploring new ideas, or just unwinding with music or a good read. Interested in exploring and solving real world problems.`,
  },
];

function TeamMemberCard({
  name,
  role,
  description,
  imageUrl,
  socialLinks,
  onViewProfile,
}: TeamMemberProps & { onViewProfile: () => void }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50 h-full flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <Image
          src={imageUrl}
          alt={`${name} - ${role}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-lg font-semibold text-white drop-shadow-md">
            {name}
          </h3>
          <p className="text-orange-200 text-sm font-medium">{role}</p>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {socialLinks?.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
          </div>
          <button
            onClick={onViewProfile}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-sm font-medium rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            View Profile
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileDialog({
  open,
  onClose,
  member,
}: {
  open: boolean;
  onClose: () => void;
  member?: TeamMemberProps;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !member) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-fadeIn relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header Section */}
        <div className="flex-shrink-0">
          <div className="relative h-40 bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-2xl">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Profile Image - Now part of the fixed header */}
          <div className="relative h-20">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content with increased top padding */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 pt-6">
            {/* Profile Info */}
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {member.name}
                </h2>
                <p className="text-lg md:text-xl text-orange-600 font-medium mt-1">
                  {member.role}
                </p>
              </div>
              {member.socialLinks && (
                <div className="flex gap-3 justify-center md:justify-start">
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 hover:bg-orange-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 hover:bg-orange-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 hover:bg-orange-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Profile Details */}
            <div className="mt-8 space-y-6 pb-6">
              <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-orange-700 mb-3">
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {member.profileDetails || member.description}
                </p>
              </div>

              {member.isLeadership && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100">
                    <h3 className="text-lg font-semibold text-orange-700 mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          Strategic planning and implementation
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          Team leadership and mentorship
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          Project oversight and management
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100">
                    <h3 className="text-lg font-semibold text-orange-700 mb-3">
                      Achievements
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          Led successful cultural preservation initiatives
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          Established community development programs
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          Received recognition for outstanding contributions
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadershipProfile({
  name,
  role,
  description,
  imageUrl,
  profileDetails,
  onViewProfile,
}: TeamMemberProps & { onViewProfile: () => void }) {
  return (
    <div className="relative mb-24">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative bg-gradient-to-br from-white via-orange-50/50 to-orange-100/50 rounded-[2.5rem] shadow-2xl overflow-hidden border border-orange-100">
        <div className="relative h-24 bg-gradient-to-r from-orange-400/90 to-orange-500/90">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-500/90 to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {name}
            </h3>
            <p className="text-base text-orange-50 font-medium">{role}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl transform -rotate-6"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {name === "Nagendra" && (
                <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-orange-100">
                  <h4 className="text-lg font-semibold text-orange-700/90 m-4">
                    Experience
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-orange-600/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">IIT Bombay B.Tech Alumnus</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-orange-600/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Professional Cricketer</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-orange-600/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Development Advocate</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-6 border border-orange-100">
                <h4 className="text-xl font-semibold text-orange-700/90 mb-4">
                  Profile Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {profileDetails}
                </p>
              </div>

              {name === "Nagendra" && (
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-orange-100">
                  <h4 className="text-lg font-semibold text-orange-700/90 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-orange-600/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Led successful preservation of 500+ traditional art
                        forms
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-orange-600/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Established 10+ cultural centers across Telangana
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-orange-600/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Trained and mentored 1000+ artisans and cultural
                        practitioners
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoHeadProfile({
  name,
  role,
  description,
  imageUrl,
  profileDetails,
  socialLinks,
  onViewProfile,
}: TeamMemberProps & { onViewProfile: () => void }) {
  return (
    <div className="relative group">
      {/* Background decorative elements */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

      <div className="relative bg-gradient-to-br from-white via-orange-50/50 to-orange-100/50 rounded-2xl shadow-xl overflow-hidden border border-orange-200 group-hover:shadow-2xl transition-all duration-300">
        {/* Header Section - Reduced height */}
        <div className="relative h-16 bg-gradient-to-r from-orange-300/90 to-orange-400/90">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-orange-400/90 to-transparent"></div>
          <div className="absolute bottom-2 left-4">
            {/* <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full text-xs font-semibold mb-1">
              Technical Leadership
            </div> */}
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              {name}
            </h3>
            <p className="text-sm text-orange-50 font-medium">{role}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Side - Image and Quick Info */}
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl transform -rotate-3"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Social Media Links */}
              {socialLinks && (
                <div className="mt-4 flex space-x-3 justify-center">
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors shadow"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right Side - Information */}
            <div className="md:w-2/3">
              <div className="space-y-4">
                {/* Description */}
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-orange-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* View Profile Button */}
                <button
                  onClick={onViewProfile}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Complete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
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

  // Group team members by domain
  const foundingPatrons = teamMembers.filter(member => 
    member.name === "Asha Latha" || 
    member.name === "BS Murty" || 
    member.name === "Nagendra"
  );

  const fieldStrategy = teamMembers.filter(member => 
    member.name === "Tanish Reddy"
  );

  const visionExpansion = teamMembers.filter(member => 
    member.name === "Nihar Kartikeya"
  );

  const communicationDocs = teamMembers.filter(member => 
    member.name === "Deepthi Kanigiri" || 
    member.name === "Bhargavi Peela"
  );

  const digitalSystems = teamMembers.filter(member => 
    member.name === "Praneeth Chamarthy" || 
    member.name === "Gona Sanjana"
  );

  const dataVisualResearch = teamMembers.filter(member => 
    member.name === "Karthik Kumar" || 
    member.name === "Charan"
  );

  const designUX = teamMembers.filter(member => 
    member.name === "Sreekari Pendem"
  );

  return (
    <div className="container mx-auto px-4 py-10 md:py-16 bg-gradient-to-b from-gray-50 to-orange-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
        Our Inspiration
      </h1>
      <div className="max-w-7xl mx-auto">
        {/* Founding Patrons Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
          Founding Patrons
        </h2>
        <div className="space-y-24 mb-20">
          {foundingPatrons.map((leader) => (
            <LeadershipProfile
              key={leader.name}
              {...leader}
              onViewProfile={() => handleViewProfile(leader)}
            />
          ))}
        </div>

        {/* Field Strategy Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
        Field Strategy & Operations
        </h2>
        <div className="space-y-24 mb-20">
          {fieldStrategy.map((leader) => (
            <LeadershipProfile
              key={leader.name}
              {...leader}
              onViewProfile={() => handleViewProfile(leader)}
            />
          ))}
        </div>

        {/* Vision & Expansion Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
          Vision & Expansion
        </h2>
        <div className="space-y-24 mb-20">
          {visionExpansion.map((leader) => (
            <LeadershipProfile
              key={leader.name}
              {...leader}
              onViewProfile={() => handleViewProfile(leader)}
            />
          ))}
        </div>

        {/* Communication & Documentation Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
          Communication & Documentation
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-20">
          {communicationDocs.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              onViewProfile={() => handleViewProfile(member)}
            />
          ))}
        </div>

        {/* Digital Systems Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
          Digital Systems
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-20">
          {digitalSystems.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              onViewProfile={() => handleViewProfile(member)}
            />
          ))}
        </div>

        {/* Data Curation & Visual Research Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
          Data Curation & Visual Research
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-20">
          {dataVisualResearch.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              onViewProfile={() => handleViewProfile(member)}
            />
          ))}
        </div>

        {/* Design & User Experience Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
          Design & User Experience
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-20">
          {designUX.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              onViewProfile={() => handleViewProfile(member)}
            />
          ))}
        </div>
      </div>
      <ProfileDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        member={selectedMember}
      />
    </div>
  );
}
