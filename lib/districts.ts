export interface District {
  id: number
  slug: string
  name: string
  description: string
  population: string
  area: string
  headquarters: string
  majorTowns: string[]
  issues: [string, string][]
  initiatives: [string, string][]
  coverImage: string
  mapImage: string
  thumbnail: string
  mapCoords: string // For image map
}

// // Formatting function
// export function formatEntries(entries: [string, string][]): string[] {
//   return entries.map(([title, description]) => `<h3>${title}</h3>:\n${description}`);
// }

export const districts: District[] = [
  {
    id: 1,
    slug: "hyderabad",
    name: "Hyderabad",
    description:
      "Hyderabad is the capital and largest city of Telangana. Known for its rich history, culture, and IT industry, it's a major urban center in South India. The city is home to many historical monuments like Charminar, Golconda Fort, and modern tech parks.",
    population: "10.5 million",
    area: "650 sq km",
    headquarters: "Hyderabad",
    majorTowns: ["Secunderabad", "Kukatpally", "Gachibowli", "Uppal"],
    issues: [
      [
        "Urban congestion and traffic management",
        "Rapid urbanization has led to heavy traffic, congestion, and strain on transport systems, especially during peak hours."
      ],
      [
        "Water scarcity in certain areas",
        "Unequal water distribution and over-reliance on external water sources result in periodic shortages, especially in peripheral neighborhoods."
      ],
      [
        "Air pollution concerns",
        "Increasing vehicle emissions, construction dust, and industrial activity have contributed to deteriorating air quality in parts of the city."
      ],
      [
        "Housing affordability",
        "Rising real estate prices make it difficult for low- and middle-income groups to access quality housing within the city."
      ]
    ],
    initiatives: [
      [
        "Hyderabad Metro Rail project",
        "Designed to decongest roads and provide efficient mass transit, the metro system connects major parts of the city, easing commuter movement."
      ],
      [
        "IT corridor development",
        "Expansion of the IT corridor (Cyberabad) supports economic growth, job creation, and infrastructure upgrades in tech-focused zones."
      ],
      [
        "Lake restoration projects",
        "Efforts to rejuvenate lakes like Hussain Sagar and Durgam Cheruvu aim to improve water storage, reduce pollution, and enhance urban ecosystems."
      ],
      [
        "Smart city initiatives",
        "Technology-driven solutions for traffic, waste management, lighting, and surveillance are being implemented to improve overall urban governance and livability."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "120,150,180,200", // Placeholder coordinates
  },  
  {
    id: 2,
    slug: "warangal",
    name: "Warangal",
    description:
      "Warangal is the second largest city in Telangana and served as the capital of the Kakatiya dynasty. It's known for its historical monuments, temples, and educational institutions. The district has a rich cultural heritage and is an important educational hub.",
    population: "1.2 million",
    area: "1,235 sq km",
    headquarters: "Warangal",
    majorTowns: ["Hanamkonda", "Kazipet", "Jangaon", "Parkal"],
    issues: [
      [
        "Infrastructure development needs",
        "Inadequate transport, power, and civic infrastructure in several regions hampers economic growth, service delivery, and overall development."
      ],
      [
        "Agricultural water management",
        "Inefficient irrigation systems and overdependence on monsoons reduce crop productivity and sustainability in agriculture."
      ],
      [
        "Rural healthcare access",
        "Remote areas often lack well-equipped health centers, trained medical staff, and timely emergency services, affecting health outcomes."
      ],
      [
        "Educational quality improvements",
        "Many schools and colleges face issues such as outdated teaching methods, lack of resources, and low teacher-student ratios, limiting educational effectiveness."
      ]
    ],
    initiatives: [
      [
        "Heritage conservation of Warangal Fort and Thousand Pillar Temple",
        "Restoration and preservation efforts are being made to protect these iconic monuments, promote tourism, and preserve cultural heritage."
      ],
      [
        "Textile park development to boost local industry",
        "Establishing textile parks provides infrastructure, skill training, and market access, supporting traditional weaving communities and generating employment."
      ],
      [
        "Rural road connectivity improvement",
        "Developing and maintaining road networks in rural areas enhances mobility, access to services, and economic integration with urban centers."
      ],
      [
        "Educational institution expansion",
        "Setting up and upgrading schools, colleges, and vocational centers improves access to quality education and supports skill development."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "220,120,280,170", // Placeholder coordinates
  },  
  {
    id: 3,
    slug: "karimnagar",
    name: "Karimnagar",
    description:
      "Karimnagar is known for its granite industry, agricultural production, and cultural heritage. The district is located in the northern part of Telangana and is an important agricultural and industrial center with significant irrigation projects.",
    population: "1 million",
    area: "2,128 sq km",
    headquarters: "Karimnagar",
    majorTowns: ["Huzurabad", "Jammikunta", "Sircilla", "Jagtial"],
    issues: [
      [
        "Irrigation water management",
        "Inefficient irrigation systems and poor water distribution practices lead to wastage and water scarcity, affecting crop productivity and long-term sustainability."
      ],
      [
        "Granite industry environmental impact",
        "Unregulated granite mining causes deforestation, habitat disruption, dust pollution, and groundwater depletion, impacting both the environment and nearby communities."
      ],
      [
        "Rural employment opportunities",
        "Lack of diverse job options in rural areas results in underemployment and migration to urban centers, limiting economic growth in these regions."
      ],
      [
        "Healthcare infrastructure",
        "Many rural areas suffer from inadequate healthcare facilities, a shortage of medical professionals, and poor access to emergency and specialized services."
      ]
    ],
    initiatives: [
      [
        "Lower Manair Dam irrigation project expansion",
        "Enhancing the dam's irrigation capacity supports improved water supply for agriculture, enabling multiple cropping and increasing farm productivity."
      ],
      [
        "Granite industry regulation and modernization",
        "Implementing stricter environmental regulations and adopting cleaner technologies ensures sustainable mining practices while improving efficiency and safety."
      ],
      [
        "Rural skill development programs",
        "Training rural youth in various trades and modern skills boosts employability, promotes entrepreneurship, and supports local economic development."
      ],
      [
        "Healthcare facility upgrades in rural areas",
        "Investing in hospitals, clinics, medical equipment, and mobile health units helps improve access to quality healthcare services in underserved regions."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "180,80,240,130", // Placeholder coordinates
  },
  {
    id: 4,
    slug: "nizamabad",
    name: "Nizamabad",
    description:
      "Nizamabad is known for its agricultural production, particularly turmeric and rice. The district has a diverse cultural heritage with historical monuments and temples. It's an important commercial center in northern Telangana.",
    population: "1.8 million",
    area: "3,397 sq km",
    headquarters: "Nizamabad",
    majorTowns: ["Bodhan", "Armoor", "Balkonda", "Kamareddy"],
    issues: [
      [
        "Agricultural market access for farmers",
        "Farmers often face challenges reaching fair and competitive markets due to middlemen, inadequate transport, and lack of storage facilities, limiting their income and bargaining power."
      ],
      [
        "Turmeric price fluctuations",
        "Turmeric prices can vary drastically due to market demand, weather impacts, and lack of price regulation, causing income instability for farmers who rely heavily on its cultivation."
      ],
      [
        "Irrigation infrastructure",
        "Inadequate or poorly maintained irrigation systems hinder reliable water supply, affecting crop yield and increasing dependency on rainfall."
      ],
      [
        "Rural education quality",
        "Rural schools often suffer from poor infrastructure, teacher shortages, and outdated curricula, impacting students' learning outcomes and long-term opportunities."
      ]
    ],
    initiatives: [
      [
        "Turmeric processing and export promotion",
        "Enhancing processing units and export logistics for turmeric adds value, stabilizes prices, and opens up global markets, benefiting local farmers and boosting the economy."
      ],
      [
        "Irrigation canal network expansion",
        "Expanding and maintaining canal systems helps ensure consistent water supply for agriculture, especially during dry seasons, improving productivity and resilience."
      ],
      [
        "Agricultural market reforms",
        "These include policies to modernize marketplaces (mandis), promote digital platforms, and reduce intermediaries to ensure farmers receive fair prices and timely payments."
      ],
      [
        "Rural school infrastructure improvement",
        "Upgrading buildings, classrooms, toilets, and digital tools in rural schools enhances the learning environment and helps bridge the urban-rural education gap."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "140,60,200,110", // Placeholder coordinates
  },
  {
    id: 5,
    slug: "khammam",
    name: "Khammam",
    description:
      "Khammam is known for its agricultural production, forests, and mineral resources. The district has significant tribal populations and is rich in natural resources including coal deposits. It's an important agricultural and industrial center.",
    population: "1.4 million",
    area: "4,453 sq km",
    headquarters: "Khammam",
    majorTowns: ["Kothagudem", "Yellandu", "Sathupalli", "Madhira"],
    issues: [
      [
        "Tribal community development",
        "Tribal communities often face socio-economic disadvantages, limited access to healthcare, education, and livelihood opportunities, especially in remote and forested areas."
      ],
      [
        "Forest conservation and management",
        "Forests are under pressure from deforestation, illegal logging, and encroachment. Poor management can lead to biodiversity loss and environmental degradation."
      ],
      [
        "Coal mining environmental impact",
        "Coal mining causes air and water pollution, habitat destruction, and soil erosion, particularly affecting nearby ecosystems and indigenous communities."
      ],
      [
        "Agricultural modernization",
        "Outdated farming practices, low mechanization, and poor access to technology hinder agricultural productivity and income, especially in rural and tribal regions."
      ]
    ],
    initiatives: [
      [
        "Tribal welfare programs and education",
        "These programs aim to improve education, health, housing, and livelihood support for tribal populations, ensuring inclusive development and cultural preservation."
      ],
      [
        "Sustainable forest management practices",
        "Community-led forest management, afforestation, and eco-sensitive regulations help protect forest ecosystems while supporting local livelihoods."
      ],
      [
        "Mining regulation and worker safety",
        "Strengthening mining laws, enforcing environmental standards, and implementing safety protocols protect workers and minimize ecological damage."
      ],
      [
        "Agricultural technology adoption programs",
        "Promoting use of high-yield seeds, precision farming, mechanization, and digital tools to increase productivity and income for farmers."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "260,180,320,230", // Placeholder coordinates
  },
  {
    id: 6,
    slug: "adilabad",
    name: "Adilabad",
    description:
      "Adilabad is a northern district known for its forests, tribal populations, and agricultural production. The district has significant biodiversity and is home to various tribal communities with unique cultural traditions.",
    population: "708,972",
    area: "4,153 sq km",
    headquarters: "Adilabad",
    majorTowns: ["Nirmal", "Mancherial", "Asifabad", "Bellampalle"],
    issues: [
      [
        "Tribal welfare and development",
        "Many tribal communities face issues such as poverty, limited access to education and healthcare, and lack of representation. Ensuring their welfare involves inclusive development policies and respect for cultural identities."
      ],
      [
        "Forest conservation",
        "Deforestation, illegal logging, and habitat destruction threaten biodiversity and the environmental balance. Conservation efforts aim to protect forests through regulations, community participation, and reforestation."
      ],
      [
        "Rural connectivity",
        "Inadequate road and communication networks hinder economic development and access to essential services in rural areas. Improving connectivity helps integrate these regions with mainstream development."
      ],
      [
        "Agricultural productivity",
        "Low crop yields due to outdated practices, poor irrigation, and lack of market access affect farmers' incomes. Enhancing productivity involves technology use, better seeds, and efficient farming methods."
      ],
    ],
    initiatives: [
      [
        "Tribal education and healthcare programs",
        "These programs aim to improve literacy, school enrollment, maternal health, and disease prevention among tribal populations through targeted schemes and infrastructure."
      ],
      [
        "Sustainable forest management",
        "This approach balances ecological, economic, and social functions of forests, promoting responsible use, regeneration, and community involvement in forest governance."
      ],
      [
        "Rural road development project",
        "Projects like the Pradhan Mantri Gram Sadak Yojana (PMGSY) in India aim to provide all-weather road connectivity to unconnected villages, boosting local economies and service access."
      ],
      [
        "Agricultural modernization schemes",
        "These include initiatives promoting mechanization, high-yield seeds, precision farming, and digital tools to make agriculture more efficient, sustainable, and profitable."
      ],
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "160,40,220,90", // Placeholder coordinates
  },
  {
    id: 7,
    slug: "bhadradri",
    name: "Bhadradri Kothagudem",
    description:
      "Bhadradri Kothagudem is known for the famous Bhadrachalam temple, coal mines, and forest resources. The district has significant tribal populations and is rich in natural resources with a mix of industrial and agricultural activities.",
    population: "1,069,261",
    area: "7,483 sq km",
    headquarters: "Kothagudem",
    majorTowns: ["Bhadrachalam", "Palvancha", "Manuguru", "Yellandu"],
    issues: [
      [
        "Coal mining environmental impact",
        "Coal mining leads to deforestation, land degradation, air and water pollution, and displacement of communities, especially in ecologically sensitive zones."
      ],
      [
        "Tribal community development",
        "Tribal populations often face marginalization, lack of access to basic services, and loss of traditional livelihoods, especially in mining and forest regions."
      ],
      [
        "Forest conservation",
        "Forests face pressure from mining, encroachment, and illegal activities, threatening biodiversity and the environmental balance."
      ],
      [
        "Flood management along Godavari river",
        "Seasonal flooding causes significant damage to lives, crops, and infrastructure in areas along the Godavari, highlighting the need for effective flood mitigation systems."
      ]
    ],
    initiatives: [
      [
        "Sustainable mining practices",
        "Promoting environmentally responsible mining with land reclamation, pollution control, and reduced ecological footprint to balance development and conservation."
      ],
      [
        "Tribal welfare programs",
        "Implementing schemes focused on healthcare, education, skill development, and livelihood support to empower tribal communities while respecting their cultural identity."
      ],
      [
        "Eco-tourism development",
        "Encouraging tourism in forest and tribal regions to generate income, raise conservation awareness, and promote sustainable local development."
      ],
      [
        "Flood control infrastructure",
        "Constructing embankments, improving drainage, setting up early warning systems, and river management projects to reduce flood risks along the Godavari."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "280,200,340,250", // Placeholder coordinates
  },  
  {
    id: 8,
    slug: "hanumakonda",
    name: "Hanumakonda",
    description:
      "Hanumakonda, previously part of Warangal district, is known for educational institutions and historical sites. The district is an important educational and cultural center with a rich historical heritage.",
    population: "1,080,858",
    area: "1,309 sq km",
    headquarters: "Hanumakonda",
    majorTowns: ["Kazipet", "Hasanparthy", "Dharmasagar"],
    issues: [
      [
        "Urban infrastructure development",
        "Rapid urban growth often outpaces the development of roads, drainage, public transport, and utilities, leading to congestion and reduced quality of life."
      ],
      [
        "Educational institution quality",
        "Many institutions face challenges such as outdated curricula, faculty shortages, and inadequate facilities, affecting learning outcomes and employability."
      ],
      [
        "Heritage conservation",
        "Historical monuments and sites suffer from neglect, pollution, and urban encroachment, threatening cultural identity and tourism potential."
      ],
      [
        "Water management",
        "Inefficient water use, wastage, and overdependence on limited sources cause shortages and sustainability challenges in both urban and rural settings."
      ]
    ],
    initiatives: [
      [
        "Educational hub development",
        "Establishing and upgrading clusters of high-quality institutions with modern infrastructure, research facilities, and industry linkages to promote excellence in education."
      ],
      [
        "Historical monument restoration",
        "Restoration and preservation projects aimed at safeguarding cultural landmarks while promoting tourism and community involvement."
      ],
      [
        "Urban renewal projects",
        "Revitalizing old city areas through infrastructure upgrades, smart city features, and improved public spaces for a better urban living experience."
      ],
      [
        "Water conservation programs",
        "Initiatives like rainwater harvesting, lake rejuvenation, and efficient irrigation practices to enhance water availability and sustainability."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "230,130,290,180", // Placeholder coordinates
  },  
  {
    id: 9,
    slug: "jagtial",
    name: "Jagtial",
    description:
      "Jagtial is known for agricultural production and textile industry. The district has fertile lands and is an important center for agricultural production with emerging industrial sectors.",
    population: "985,417",
    area: "2,419 sq km",
    headquarters: "Jagtial",
    majorTowns: ["Korutla", "Metpally", "Dharmapuri", "Raikal"],
    issues: [
      [
        "Agricultural marketing infrastructure",
        "Many rural areas lack proper storage, grading, and transportation facilities, leading to post-harvest losses and poor price realization for farmers in the market."
      ],
      [
        "Irrigation water management",
        "Inefficient use of irrigation water, outdated methods, and over-dependence on monsoons affect agricultural productivity and sustainability."
      ],
      [
        "Rural employment",
        "Limited non-farm job opportunities in rural areas contribute to underemployment, seasonal migration, and economic insecurity for many households."
      ],
      [
        "Industrial development",
        "Inadequate infrastructure, poor connectivity, and limited investment deter the growth of industries in semi-urban and rural regions, slowing economic diversification."
      ]
    ],
    initiatives: [
      [
        "Agricultural market modernization",
        "Modernizing market yards with digital tools, better logistics, and transparent pricing mechanisms enhances efficiency and helps farmers access better markets."
      ],
      [
        "Irrigation project expansion",
        "Developing new irrigation systems and reviving old ones ensures wider and more efficient water distribution, reducing dependence on rain-fed agriculture."
      ],
      [
        "Textile industry promotion",
        "Supporting the textile sector-especially handloom and small-scale units-through subsidies, modern equipment, and export incentives creates jobs and boosts local economies."
      ],
      [
        "Skill development centers",
        "Setting up centers that provide vocational training in trades and technologies equips rural youth with employable skills, supporting both local industries and self-employment."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "190,90,250,140", // Placeholder coordinates
  },
  {
    id: 10,
    slug: "jangaon",
    name: "Jangaon",
    description:
      "Jangaon is an agricultural district with historical significance. The district has fertile lands and is primarily focused on agricultural production with some historical monuments and cultural heritage.",
    population: "566,376",
    area: "2,188 sq km",
    headquarters: "Jangaon",
    majorTowns: ["Ghanpur", "Palakurthi", "Cherial"],
    issues: [
      [
        "Agricultural water management",
        "Poor irrigation efficiency, over-reliance on groundwater, and erratic rainfall patterns lead to water stress and reduced agricultural output."
      ],
      [
        "Rural infrastructure",
        "Inadequate infrastructure such as roads, electricity, storage facilities, and digital connectivity limits rural development and economic opportunities."
      ],
      [
        "Farmer income stability",
        "Fluctuating crop prices, input costs, and climate risks contribute to income volatility, making farming unsustainable for many smallholders."
      ],
      [
        "Educational access",
        "Limited availability of schools, lack of qualified teachers, and poor facilities hinder educational attainment in rural and remote areas."
      ]
    ],
    initiatives: [
      [
        "Water conservation projects",
        "Initiatives like check dams, rainwater harvesting, and watershed management help improve water availability and support sustainable agriculture."
      ],
      [
        "Rural road development",
        "Upgrading and constructing roads in rural areas improves connectivity to markets, healthcare, and education, boosting overall development."
      ],
      [
        "Crop diversification programs",
        "Promoting cultivation of high-value and climate-resilient crops reduces risk, improves soil health, and enhances farmers' income."
      ],
      [
        "Educational institution expansion",
        "Establishing more schools, colleges, and vocational centers in underserved areas increases educational access and reduces dropout rates."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "210,140,270,190", // Placeholder coordinates
  },
  
  {
    id: 11,
    slug: "jayashankar",
    name: "Jayashankar Bhupalpally",
    description:
      "Jayashankar Bhupalpally is known for its forests, wildlife sanctuaries, and tribal populations. The district has rich biodiversity and is focused on forest conservation and tribal welfare.",
    population: "416,763",
    area: "2,293 sq km",
    headquarters: "Bhupalpally",
    majorTowns: ["Mulugu", "Eturnagaram", "Tadvai"],
    issues: [
      [
        "Tribal development",
        "Tribal communities often face social and economic exclusion, with limited access to education, healthcare, and livelihood opportunities. Development efforts must ensure cultural sensitivity and inclusive growth."
      ],
      [
        "Forest conservation",
        "Forests are threatened by deforestation, encroachment, and illegal logging, impacting biodiversity, climate regulation, and indigenous livelihoods."
      ],
      [
        "Wildlife protection",
        "Habitat loss, poaching, and human-wildlife conflict endanger various species and disrupt ecosystems, requiring focused conservation efforts."
      ],
      [
        "Rural connectivity",
        "Poor road and transport networks in remote areas limit access to markets, healthcare, education, and employment, hindering rural development."
      ]
    ],
    initiatives: [
      [
        "Tribal welfare schemes",
        "These include education support, healthcare access, livelihood training, and housing initiatives tailored to improve the quality of life for tribal populations."
      ],
      [
        "Eco-tourism development",
        "Promoting responsible tourism in forest and tribal areas generates income for local communities while encouraging conservation and cultural preservation."
      ],
      [
        "Wildlife conservation programs",
        "Programs focused on habitat restoration, anti-poaching efforts, and community participation aim to protect endangered species and biodiversity."
      ],
      [
        "Rural infrastructure improvement",
        "Investments in roads, electricity, internet, and water supply help bridge the rural-urban divide and boost economic and social development in remote areas."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "200,110,260,160", // Placeholder coordinates
  },
  {
    id: 12,
    slug: "gadwal",
    name: "Jogulamba Gadwal",
    description:
      "Jogulamba Gadwal is known for agriculture and the historic Jogulamba temple. The district is primarily agricultural with significant cultural and religious heritage.",
    population: "609,990",
    area: "2,928 sq km",
    headquarters: "Gadwal",
    majorTowns: ["Alampur", "Ieeja", "Maldakal"],
    issues: [
      [
        "Water scarcity for agriculture",
        "Inadequate irrigation facilities and over-reliance on rainfall limit agricultural productivity, affecting farmer incomes and food security."
      ],
      [
        "Rural poverty",
        "Lack of employment opportunities, low agricultural income, and limited access to basic services contribute to persistent poverty in rural areas."
      ],
      [
        "Religious tourism infrastructure",
        "Many pilgrimage sites lack essential amenities such as roads, sanitation, accommodation, and visitor management systems, hindering tourism potential."
      ],
      [
        "Educational facilities",
        "Rural and semi-urban areas often suffer from a shortage of quality educational institutions, infrastructure, and trained teachers, impacting learning outcomes."
      ]
    ],
    initiatives: [
      [
        "Irrigation project development",
        "Expanding and upgrading irrigation systems (e.g., canals, check dams, drip irrigation) to ensure reliable water supply for agriculture."
      ],
      [
        "Temple tourism promotion",
        "Improving infrastructure, services, and promotional activities around key religious sites to attract more tourists and support local economies."
      ],
      [
        "Rural livelihood programs",
        "Skill development, self-employment schemes, and support for small-scale industries to generate sustainable income for rural populations."
      ],
      [
        "Educational institution improvement",
        "Enhancing school and college infrastructure, digital learning tools, and teacher training to improve the quality and reach of education."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "150,220,210,270", // Placeholder coordinates
  },  
  {
    id: 13,
    slug: "kamareddy",
    name: "Kamareddy",
    description:
      "Kamareddy is an agricultural district known for rice and sugarcane production. The district has fertile lands and is primarily focused on agricultural production with emerging industrial sectors.",
    population: "972,625",
    area: "3,652 sq km",
    headquarters: "Kamareddy",
    majorTowns: ["Banswada", "Yellareddy", "Domakonda"],
    issues: [
      [
        "Agricultural water management",
        "Inefficient irrigation practices, over-extraction of groundwater, and climate variability are causing water stress, reducing agricultural productivity and sustainability."
      ],
      [
        "Sugar industry challenges",
        "The sugar industry faces problems like price fluctuations, delayed payments to farmers, excess production, and mounting debt for sugar mills."
      ],
      [
        "Rural infrastructure",
        "Poor roads, inadequate power supply, limited digital connectivity, and lack of storage facilities hinder rural development and access to services."
      ],
      [
        "Farmer income stability",
        "Farmers experience income instability due to price volatility, crop failure, and limited access to insurance or diversified livelihood sources."
      ]
    ],
    initiatives: [
      [
        "Irrigation modernization",
        "Promoting micro-irrigation, drip and sprinkler systems, and efficient water use techniques to improve water-use efficiency and reduce dependency on rainfall."
      ],
      [
        "Sugar industry support",
        "Measures like subsidies, ethanol blending incentives, and financial restructuring help stabilize the industry and ensure timely payments to sugarcane farmers."
      ],
      [
        "Rural road development",
        "Building and upgrading rural roads improves market access, mobility, and service delivery, contributing to economic growth and social inclusion."
      ],
      [
        "Agricultural market reforms",
        "Reforms aim to enhance price transparency, reduce intermediary control, promote e-marketing platforms, and improve infrastructure for storage and logistics."
      ]
    ],  
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "130,70,190,120", // Placeholder coordinates
  },
  {
    id: 14,
    slug: "komaram-bheem",
    name: "Kumuram Bheem Asifabad",
    description:
      "Kumuram Bheem Asifabad is a tribal district with extensive forest cover and wildlife. Named after tribal leader Kumuram Bheem, the district focuses on tribal welfare and forest conservation.",
    population: "515,812",
    area: "4,878 sq km",
    headquarters: "Asifabad",
    majorTowns: ["Kaghaznagar", "Sirpur", "Jainoor"],
    issues: [
      [
        "Tribal development and welfare",
        "Tribal communities often face marginalization, poor access to education, healthcare, and livelihood opportunities. Development efforts must ensure cultural sensitivity and inclusive growth."
      ],
      [
        "Forest conservation",
        "Forests are under pressure from deforestation, mining, and encroachment. Conservation is vital to protect biodiversity, regulate climate, and support indigenous communities."
      ],
      [
        "Human-wildlife conflict",
        "As human settlements expand into forest areas, conflicts with wildlife (e.g., crop damage, livestock loss, or attacks) increase. This poses risks to both people and animal populations."
      ],
      [
        "Rural connectivity",
        "Limited access to roads, transport, and digital networks in rural areas hinders economic growth and delivery of services like healthcare and education."
      ]
    ],
    initiatives: [
      [
        "Tribal education programs",
        "These initiatives aim to improve literacy, reduce drop-out rates, and provide culturally relevant education to tribal youth, often through residential schools and scholarships."
      ],
      [
        "Sustainable forest management",
        "Focuses on conserving forest resources while allowing responsible use. It includes community participation, afforestation, and biodiversity protection to ensure long-term sustainability."
      ],
      [
        "Wildlife corridor protection",
        "Protecting and restoring migration routes for animals helps reduce human-wildlife conflict and maintain genetic diversity among species in fragmented habitats."
      ],
      [
        "Rural infrastructure development",
        "Projects that build and upgrade roads, electricity, water supply, and internet in rural areas to improve living standards and promote economic inclusion."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "170,30,230,80", // Placeholder coordinates
  },
  {
    id: 15,
    slug: "mahabubabad",
    name: "Mahabubabad",
    description:
      "Mahabubabad is an agricultural district with significant tribal population. The district has a mix of agricultural activities and tribal communities with unique cultural traditions.",
    population: "774,549",
    area: "2,877 sq km",
    headquarters: "Mahabubabad",
    majorTowns: ["Dornakal", "Thorrur", "Kesamudram"],
    issues: [
      [
        "Tribal welfare",
        "Tribal communities often face socio-economic disadvantages, limited access to education, healthcare, and livelihoods, requiring inclusive and culturally sensitive development efforts."
      ],
      [
        "Agricultural productivity",
        "Many farmers struggle with low yields due to outdated practices, poor soil health, and limited access to modern technology and inputs."
      ],
      [
        "Rural healthcare",
        "Inadequate medical facilities, lack of doctors, and poor infrastructure in rural areas hinder timely and quality healthcare access for villagers."
      ],
      [
        "Educational access",
        "Children in remote and marginalized areas often face barriers like long travel distances, inadequate schools, and economic constraints, limiting their educational opportunities."
      ]
    ],
    initiatives: [
      [
        "Tribal development programs",
        "Schemes focused on improving education, housing, livelihoods, and healthcare for tribal populations, while preserving their cultural heritage."
      ],
      [
        "Agricultural modernization",
        "Promoting high-yield varieties, mechanization, soil testing, and digital agriculture tools to enhance efficiency and boost farmer income."
      ],
      [
        "Rural health center establishment",
        "Setting up well-equipped primary health centers and sub-centers with trained staff to provide accessible healthcare services in rural regions."
      ],
      [
        "Educational infrastructure improvement",
        "Building and upgrading schools, classrooms, hostels, and providing digital tools to improve the learning environment and enrollment rates in underserved areas."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "240,160,300,210", // Placeholder coordinates
  },  
  {
    id: 17,
    slug: "mancherial",
    name: "Mancherial",
    description:
      "Mancherial is known for coal mines and thermal power plants. The district has significant industrial activity centered around coal mining and power generation with associated environmental challenges.",
    population: "807,037",
    area: "4,016 sq km",
    headquarters: "Mancherial",
    majorTowns: ["Bellampalle", "Mandamarri", "Luxettipet"],
    issues: [
      [
        "Coal mining environmental impact",
        "Coal mining leads to deforestation, habitat destruction, and air and water pollution, severely affecting ecosystems and local communities."
      ],
      [
        "Industrial pollution",
        "Emissions and waste from mining and associated industries contribute to air, water, and soil contamination, posing risks to human and environmental health."
      ],
      [
        "Worker safety and health",
        "Mining is hazardous work, with risks of accidents, respiratory illnesses, and inadequate protective measures for laborers, especially in unregulated operations."
      ],
      [
        "Post-mining land reclamation",
        "Abandoned or degraded mining sites often remain barren and unusable. Without proper reclamation, they pose long-term environmental and safety hazards."
      ]
    ],
    initiatives: [
      [
        "Environmental monitoring and protection",
        "Regular assessment of air, water, and soil quality, along with stricter enforcement of environmental standards, helps mitigate mining-related pollution."
      ],
      [
        "Mine worker safety programs",
        "These include safety training, modern equipment, health check-ups, and strict adherence to occupational safety standards to reduce accidents and health risks."
      ],
      [
        "Land reclamation projects",
        "Rehabilitating mined lands through afforestation, soil restoration, and conversion for agriculture or other productive use helps restore ecological balance."
      ],
      [
        "Clean energy transition planning",
        "Strategic planning to reduce reliance on coal by promoting renewable energy sources supports sustainable development while managing the economic impact on mining communities."
      ] 
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "180,50,240,100", // Placeholder coordinates
  },
  {
    id: 18,
    slug: "medak",
    name: "Medak",
    description:
      "Medak is known for the historic Medak Cathedral and agricultural production. The district has a rich religious heritage and is primarily agricultural with some industrial development.",
    population: "467,428",
    area: "2,786 sq km",
    headquarters: "Medak",
    majorTowns: ["Narsapur", "Toopran", "Ramayampet"],
    issues: [
      [
        "Agricultural water management",
        "Inefficient irrigation methods and water scarcity hinder crop productivity and long-term sustainability, especially in drought-prone and over-exploited regions."
      ],
      [
        "Rural infrastructure",
        "Many rural areas lack adequate roads, electricity, sanitation, and digital connectivity, limiting access to services and economic opportunities."
      ],
      [
        "Heritage conservation",
        "Historical sites and monuments face neglect, encroachment, and environmental damage, risking the loss of cultural identity and tourism potential."
      ],
      [
        "Industrial development",
        "Lack of industrial infrastructure, investment, and skilled labor in some regions hampers balanced economic growth and job creation."
      ]
    ],
    initiatives: [
      [
        "Cathedral conservation project",
        "A targeted effort to restore and preserve historic cathedrals, focusing on structural repairs, heritage tourism promotion, and cultural education."
      ],
      [
        "Irrigation improvement",
        "Upgrading canal systems, promoting micro-irrigation, and efficient water use practices help ensure reliable water supply for agriculture."
      ],
      [
        "Rural road development",
        "Expanding and improving road networks enhances rural connectivity, supports market access, and facilitates the delivery of health, education, and public services."
      ],
      [
        "Industrial zone establishment",
        "Creating dedicated industrial zones with infrastructure, incentives, and streamlined regulations encourages manufacturing and job creation in designated regions."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "110,120,170,170", // Placeholder coordinates
  },  
  {
    id: 19,
    slug: "medchal",
    name: "Medchal Malkajgiri",
    description:
      "Medchal Malkajgiri is a suburban district of Hyderabad with industrial zones and residential areas. The district is rapidly urbanizing and is an important part of the Greater Hyderabad region.",
    population: "2,440,073",
    area: "1,084 sq km",
    headquarters: "Shamirpet",
    majorTowns: ["Kompally", "Dundigal", "Alwal", "Malkajgiri"],
    issues: [
      [
        "Urban planning and development",
        "Unplanned urban expansion leads to inefficient land use, strain on infrastructure, and difficulties in delivering basic services effectively."
      ],
      [
        "Traffic congestion",
        "Rapid urbanization, rising vehicle numbers, and inadequate road networks contribute to severe traffic jams, increasing travel time and pollution."
      ],
      [
        "Industrial pollution",
        "Unregulated industrial activity results in air, water, and soil pollution, affecting public health and environmental quality."
      ],
      [
        "Housing affordability",
        "Rising property prices and rental rates, especially in urban areas, make it difficult for economically weaker sections to access quality housing."
      ]
    ],
    initiatives: [
      [
        "Urban infrastructure development",
        "Projects to upgrade roads, drainage, public utilities, and smart city infrastructure aim to support sustainable urban growth."
      ],
      [
        "Public transportation improvement",
        "Enhancing bus, metro, and other mass transit systems helps reduce traffic congestion and provides affordable mobility options."
      ],
      [
        "Industrial zone regulation",
        "Implementing stricter environmental norms and zoning policies ensures that industrial growth does not compromise ecological or public health."
      ],
      [
        "Affordable housing projects",
        "Government and public-private partnership initiatives to build cost-effective housing units target urban poor and middle-income families."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "110,160,170,210", // Placeholder coordinates
  },     
  {
    id: 20,
    slug: "mulugu",
    name: "Mulugu",
    description:
      "Mulugu is known for its forests, tribal populations, and the famous Ramappa Temple, a UNESCO World Heritage site. The district has rich biodiversity and cultural heritage with focus on conservation.",
    population: "257,744",
    area: "3,881 sq km",
    headquarters: "Mulugu",
    majorTowns: ["Eturnagaram", "Tadvai", "Venkatapuram"],
    issues: [
      [
        "Tribal welfare",
        "Many tribal communities face issues such as poverty, limited access to education and healthcare, and lack of representation. Ensuring their welfare involves inclusive development policies and respect for cultural identities."
      ],
      [
        "Forest conservation",
        "Deforestation, illegal logging, and habitat destruction threaten biodiversity and the environmental balance. Conservation efforts aim to protect forests through regulations, community participation, and reforestation."
      ],
      [
        "Tourism infrastructure",
        "Developing infrastructure to support tourism in the district."
      ],
      [
        "Rural connectivity",
        "Rural areas lack adequate connectivity, affecting access to services and opportunities."
      ],
    ],
    initiatives: [
      [
        "Ramappa Temple tourism development",
        "Developing tourism around the famous Ramappa Temple."
      ],
      [
        "Tribal cultural preservation",
        "Preserving the cultural heritage of tribal communities."
      ],
      [
        "Eco-tourism promotion",
        "Promoting eco-tourism to support sustainable development and conservation efforts."
      ],
      [
        "Rural infrastructure improvement",
        "Improving rural infrastructure to support the district's development."
      ],
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "220,140,280,190", // Placeholder coordinates
  },
  {
    id: 21,
    slug: "nagarkurnool",
    name: "Nagarkurnool",
    description:
      "Nagarkurnool is known for agriculture and the Srisailam reservoir. The district has significant water resources and is focused on agricultural development and water management.",
    population: "893,308",
    area: "6,545 sq km",
    headquarters: "Nagarkurnool",
    majorTowns: ["Kollapur", "Achampet", "Kalwakurthy"],
    issues: [
      [
        "Water resource management",
        "Uneven distribution, overuse of groundwater, and inefficient water storage and supply systems pose challenges to sustainable water use for agriculture, drinking, and industry."
      ],
      [
        "Agricultural productivity",
        "Factors such as outdated farming methods, limited irrigation access, and soil degradation contribute to low crop yields and farmer income instability."
      ],
      [
        "Rural infrastructure",
        "Lack of quality roads, electricity, storage facilities, and digital connectivity in rural areas limits economic growth and access to basic services."
      ],
      [
        "Tourism development",
        "Untapped potential due to poor infrastructure, limited promotion, and inadequate facilities at tourist sites restricts tourism-based economic growth."
      ]
    ],
    initiatives: [
      [
        "Srisailam reservoir management",
        "Efforts to optimize water storage, regulate flow, and support multi-purpose use of the reservoir for irrigation, drinking water, and hydropower generation."
      ],
      [
        "Irrigation project expansion",
        "Developing and expanding irrigation systems to improve water availability for farming, increase crop cycles, and boost agricultural output."
      ],
      [
        "Rural road development",
        "Constructing and upgrading rural roads to improve connectivity to markets, schools, and healthcare, thus supporting inclusive development."
      ],
      [
        "Eco-tourism promotion",
        "Encouraging sustainable tourism in natural and cultural heritage areas to generate income, create jobs, and promote environmental conservation."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "170,210,230,260", // Keep existing coordinates
  },  
  {
    id: 22,
    slug: "nalgonda",
    name: "Nalgonda",
    description:
      "Nalgonda is known for agriculture, limestone quarries, and fluoride issues in groundwater. The district has been addressing water quality challenges while developing its agricultural and industrial sectors.",
    population: "1,618,416",
    area: "7,122 sq km",
    headquarters: "Nalgonda",
    majorTowns: ["Miryalaguda", "Devarakonda", "Nakrekal"],
    issues: [
      [
        "Fluoride contamination in water",
        "High fluoride levels in groundwater cause serious health issues such as dental and skeletal fluorosis, particularly in rural areas reliant on borewells for drinking water."
      ],
      [
        "Agricultural water management",
        "Inefficient irrigation and overuse of groundwater reduce agricultural productivity and lead to water stress, especially in drought-prone regions."
      ],
      [
        "Limestone mining environmental impact",
        "Unregulated limestone mining leads to land degradation, dust pollution, loss of biodiversity, and can impact water availability and quality in surrounding areas."
      ],
      [
        "Rural healthcare",
        "Lack of access to quality healthcare facilities, trained personnel, and basic medical infrastructure hampers health outcomes in rural populations."
      ]
    ],
    initiatives: [
      [
        "Safe drinking water projects",
        "These include the installation of water purification systems, piped water supply schemes, and community water tanks to ensure access to clean and safe drinking water."
      ],
      [
        "Fluoride mitigation programs",
        "Programs aimed at reducing fluoride exposure through defluoridation units, alternative water sources, health awareness, and nutrition support for affected populations."
      ],
      [
        "Sustainable mining practices",
        "Introducing eco-friendly mining techniques, enforcing environmental regulations, and rehabilitating mined areas to minimize ecological damage."
      ],
      [
        "Irrigation infrastructure improvement",
        "Development and modernization of canal systems, promotion of micro-irrigation, and water harvesting structures to enhance efficient water use in agriculture."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "190,180,250,230", // Keep existing coordinates
  },  
  {
    id: 23,
    slug: "narayanpet",
    name: "Narayanpet",
    description:
      "Narayanpet is a recently formed district known for agriculture and handloom weaving. The district has a rich tradition of handloom textiles and is primarily agricultural.",
    population: "566,874",
    area: "2,336 sq km",
    headquarters: "Narayanpet",
    majorTowns: ["Makthal", "Dhanwada", "Krishna"],
    issues: [
      [
        "Water scarcity for agriculture",
        "Managing water resources for agricultural purposes in the district."
      ],
      [
        "Handloom industry challenges",
        "The handloom industry faces challenges such as market access and skill shortage."
      ],
      [
        "Rural infrastructure",
        "The district needs to improve rural infrastructure to support its growing population."
      ],
      [
        "Educational access",
        "There is a need to improve educational access in rural areas."
      ],
    ],
    initiatives: [
      [
        "Handloom weaver support programs",
        "Implementing programs to support handloom weavers and promote their craft."
      ],
      [
        "Water conservation projects",
        "Implementing projects to conserve water resources and manage them effectively."
      ],
      [
        "Rural road development",
        "Developing rural roads to improve connectivity and access."
      ],
      [
        "Educational institution establishment",
        "Establishing educational institutions to enhance access to education in rural areas."
      ],
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "140,230,200,280", // Placeholder coordinates
  },
  {
    id: 24,
    slug: "nirmal",
    name: "Nirmal",
    description:
      "Nirmal is known for its furniture industry, forests, and agricultural production. The district has a tradition of wooden toy and furniture making along with agricultural activities.",
    population: "709,418",
    area: "3,845 sq km",
    headquarters: "Nirmal",
    majorTowns: ["Bhainsa", "Khanapur", "Mudhole"],
    issues: [
      [
        "Furniture industry modernization",
        "The furniture sector often faces challenges such as outdated tools, limited design innovation, and lack of skilled labor. Modernization involves adopting new technologies, enhancing design capabilities, and improving global competitiveness."
      ],
      [
        "Forest conservation",
        "Unsustainable logging and land use threaten forest ecosystems. Conservation efforts aim to preserve biodiversity, support ecological balance, and ensure resources for future generations."
      ],
      [
        "Agricultural productivity",
        "Many farmers struggle with low yields due to poor irrigation, outdated techniques, and limited access to inputs. Improving productivity requires modern farming methods, better inputs, and access to markets."
      ],
      [
        "Rural infrastructure",
        "Poor infrastructure in rural areas-such as roads, electricity, and sanitation-hampers development. Strengthening it is essential for improving quality of life and enabling economic opportunities."
      ]
    ],
    initiatives: [
      [
        "Furniture craftsmanship promotion",
        "This involves supporting traditional artisans, introducing skill development programs, and encouraging design innovation to boost the quality and appeal of locally made furniture."
      ],
      [
        "Sustainable forestry practices",
        "These include regulated logging, afforestation, and community-based forest management to ensure long-term ecological and economic benefits from forest resources."
      ],
      [
        "Agricultural modernization",
        "Initiatives focus on mechanization, use of high-yielding and climate-resilient seeds, precision farming, and digital agriculture to increase farm efficiency and income."
      ],
      [
        "Rural connectivity improvement",
        "Projects aimed at enhancing road networks, internet access, and transport systems in rural areas to integrate them into broader economic and service delivery frameworks."
      ]
    ],    
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "170,50,230,100", // Placeholder coordinates
  },
  {
    id: 25,
    slug: "peddapalli",
    name: "Peddapalli",
    description:
      "Peddapalli is an industrial district with thermal power plants and coal mines. The district has significant industrial activity centered around power generation and mining with associated development challenges.",
    population: "795,332",
    area: "2,236 sq km",
    headquarters: "Peddapalli",
    majorTowns: ["Ramagundam", "Manthani", "Sulthanabad"],
    issues: [
      [
        "Industrial pollution",
        "Emissions and waste from industries contaminate air, water, and soil, harming public health and ecosystems, and often violating environmental norms."
      ],
      [
        "Coal mining environmental impact",
        "Coal mining leads to deforestation, land degradation, and pollution of water bodies, with long-term effects on local biodiversity and communities."
      ],
      [
        "Worker safety and health",
        "Many industrial and mining workers face hazardous working conditions, with risks of accidents, exposure to harmful substances, and inadequate healthcare access."
      ],
      [
        "Urban infrastructure",
        "Rapid urbanization has strained existing infrastructure, leading to traffic congestion, poor sanitation, housing shortages, and inadequate public services."
      ]
    ],
    initiatives: [
      [
        "Environmental monitoring and protection",
        "Regular environmental audits, pollution control systems, and enforcement of green regulations aim to minimize industrial and mining-related environmental damage."
      ],
      [
        "Industrial safety standards implementation",
        "Enforcing strict safety protocols, conducting regular inspections, and providing safety training help prevent workplace accidents and ensure compliance."
      ],
      [
        "Urban development projects",
        "Infrastructure projects focused on roads, housing, public transport, waste management, and smart city features aim to improve urban living conditions."
      ],
      [
        "Worker health programs",
        "Initiatives offering regular health screenings, insurance, workplace hygiene improvements, and mental health support contribute to the well-being of workers."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "190,70,250,120", // Placeholder coordinates
  },
  {
    id: 26,
    slug: "rajanna",
    name: "Rajanna Sircilla",
    description:
      "Rajanna Sircilla is known for its textile industry and handloom weaving. The district has a rich tradition of textile production and is working to modernize and support this industry.",
    population: "552,037",
    area: "2,019 sq km",
    headquarters: "Sircilla",
    majorTowns: ["Vemulawada", "Tangallapally", "Gambhiraopet"],
    issues: [
      [
        "Textile industry modernization",
        "Modernizing the textile industry to improve productivity and sustainability."
      ],
      [
        "Weaver welfare",
        "Ensuring the welfare of weavers in the textile industry."
      ],
      [
        "Water management for textile production",
        "Managing water resources for textile production in the district."
      ],
      [
        "Marketing of textile products",
        "Promoting and marketing textile products to increase market access and sales."
      ],
    ],
    initiatives: [
      [
        "Textile park development",
        "Developing a textile park to support the textile industry and create employment opportunities."
      ],
      [
        "Weaver cooperative support",
        "Providing support to weavers through cooperative structures."
      ],
      [
        "Skill development for textile workers",
        "Implementing programs to enhance the skills of textile workers."
      ],
      [
        "Textile export promotion",
        "Promoting textile exports to increase revenue and market access."
      ],
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "180,90,240,140", // Placeholder coordinates
  },
  {
    id: 27,
    slug: "ranga-reddy",
    name: "Ranga Reddy",
    description:
      "Ranga Reddy is a suburban district surrounding Hyderabad with rapid urbanization and industrial growth. The district is experiencing significant development as part of the Greater Hyderabad region.",
    population: "2,446,265",
    area: "5,031 sq km",
    headquarters: "Shamshabad",
    majorTowns: ["Ibrahimpatnam", "Chevella", "Shadnagar"],
    issues: [
      [
        "Urban sprawl management",
        "Uncontrolled expansion of cities leads to loss of green spaces, traffic congestion, and strain on infrastructure and public services, making urban living unsustainable."
      ],
      [
        "Infrastructure development",
        "Rapid urbanization often outpaces the development of roads, public transport, drainage, and utilities, resulting in service gaps and quality-of-life issues."
      ],
      [
        "Water supply and management",
        "Urban areas face challenges such as over-extraction, leakage, pollution, and unequal distribution of water, affecting daily life and long-term sustainability."
      ],
      [
        "Housing affordability",
        "Rising land and construction costs, coupled with increasing demand, make affordable housing inaccessible for low- and middle-income populations."
      ]
    ],
    initiatives: [
      [
        "Planned urban development",
        "Implementing city master plans, zoning regulations, and smart city frameworks to ensure organized growth, efficient land use, and sustainable urban living."
      ],
      [
        "Industrial corridor establishment",
        "Developing dedicated industrial zones with infrastructure and incentives boosts economic activity, job creation, and balanced regional development."
      ],
      [
        "Water conservation projects",
        "Initiatives like rainwater harvesting, wastewater recycling, and watershed management aim to secure sustainable urban water resources."
      ],
      [
        "Affordable housing initiatives",
        "Programs that provide subsidies, low-cost housing schemes, and public-private partnerships to make housing accessible to economically weaker sections."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "130,170,190,220", // Placeholder coordinates
  },  
  {
    id: 28,
    slug: "sangareddy",
    name: "Sangareddy",
    description:
      "Sangareddy is an industrial district with pharmaceutical companies and agricultural production. The district has a mix of industrial and agricultural activities with growing pharmaceutical sector.",
    population: "1,527,628",
    area: "4,403 sq km",
    headquarters: "Sangareddy",
    majorTowns: ["Patancheru", "Zaheerabad", "Sadasivpet"],
    issues: [
      [
        "Industrial pollution management",
        "Uncontrolled emissions and waste from industries, especially in urban and peri-urban areas, degrade air, water, and soil quality, posing health and environmental risks."
      ],
      [
        "Pharmaceutical industry regulation",
        "Inconsistent regulatory compliance, quality control issues, and environmental concerns in pharmaceutical manufacturing can impact public health and export credibility."
      ],
      [
        "Agricultural water management",
        "Inefficient irrigation, overuse of water for certain crops, and lack of conservation methods lead to water stress and reduced agricultural sustainability."
      ],
      [
        "Urban-rural development balance",
        "Uneven development leads to resource concentration in urban areas while rural regions lag in infrastructure, services, and economic opportunities, widening disparities."
      ]
    ],
    initiatives: [
      [
        "Pharmaceutical industry promotion",
        "Support through incentives, research and development grants, and infrastructure development aims to boost production, innovation, and global competitiveness in the pharma sector."
      ],
      [
        "Pollution control measures",
        "Enforcement of environmental regulations, adoption of cleaner technologies, and establishment of monitoring systems help mitigate industrial pollution."
      ],
      [
        "Agricultural modernization",
        "Incorporating advanced irrigation techniques, high-yield crop varieties, and digital farming tools enhances efficiency, productivity, and resource conservation in agriculture."
      ],
      [
        "Rural-urban connectivity improvement",
        "Enhancing transport, communication, and digital networks bridges the development gap, promotes economic integration, and improves access to services for rural populations."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "100,130,160,180", // Placeholder coordinates
  },  
  {
    id: 29,
    slug: "siddipet",
    name: "Siddipet",
    description:
      "Siddipet is known for agricultural production and irrigation projects. The district has been a focus area for agricultural development and water management initiatives.",
    population: "1,012,065",
    area: "3,632 sq km",
    headquarters: "Siddipet",
    majorTowns: ["Gajwel", "Dubbaka", "Husnabad"],
    issues: [
      [
        "Irrigation water management",
        "Poor planning and outdated irrigation systems lead to water wastage, uneven distribution, and reduced agricultural efficiency, especially during dry seasons."
      ],
      [
        "Agricultural marketing",
        "Farmers often lack access to well-regulated markets, face price exploitation, and deal with inadequate storage and transport, limiting their income and market reach."
      ],
      [
        "Rural infrastructure",
        "In many areas, basic infrastructure like roads, electricity, and sanitation is underdeveloped, hindering economic activities and access to essential services."
      ],
      [
        "Educational facilities",
        "Shortages of schools, trained teachers, and learning resources in rural and semi-urban areas affect education quality and student retention."
      ]
    ],
    initiatives: [
      [
        "Irrigation project implementation",
        "New and upgraded irrigation projects aim to improve water distribution, enhance cropping intensity, and support sustainable agricultural growth."
      ],
      [
        "Agricultural market development",
        "Establishing better market yards, cold storage, digital platforms, and farmer-producer organizations (FPOs) to boost price realization and reduce post-harvest losses."
      ],
      [
        "Rural road improvement",
        "Strengthening rural road networks improves connectivity, facilitates trade, and ensures faster access to schools, healthcare, and emergency services."
      ],
      [
        "Educational institution establishment",
        "Setting up new schools, colleges, and vocational centers with proper infrastructure and staffing helps enhance educational access and quality in underserved areas."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "140,110,200,160", // Placeholder coordinates
  },  
  {
    id: 30,
    slug: "suryapet",
    name: "Suryapet",
    description:
      "Suryapet is an agricultural district with rice production and dairy farming. The district has fertile lands and is focused on agricultural development and dairy sector growth.",
    population: "1,099,560",
    area: "3,607 sq km",
    headquarters: "Suryapet",
    majorTowns: ["Kodad", "Huzurnagar", "Nalgonda"],
    issues: [
      [
        "Agricultural water management",
        "Inefficient irrigation methods, declining groundwater levels, and irregular rainfall patterns hinder agricultural productivity and long-term sustainability."
      ],
      [
        "Dairy industry development",
        "Challenges such as low productivity, lack of cold storage, poor veterinary services, and limited market access affect the growth and profitability of the dairy sector."
      ],
      [
        "Rural infrastructure",
        "Many rural areas suffer from inadequate roads, electricity, sanitation, and digital connectivity, which limits development and access to services."
      ],
      [
        "Agricultural marketing",
        "Farmers often face challenges in selling their produce due to inadequate market access, lack of storage facilities, and price volatility, reducing their income potential."
      ]
    ],
    initiatives: [
      [
        "Dairy cooperative support",
        "Strengthening dairy cooperatives helps in improving milk procurement, processing, and distribution, while ensuring fair prices and support services for dairy farmers."
      ],
      [
        "Irrigation infrastructure improvement",
        "Expanding and modernizing irrigation systems like canals, drip, and sprinkler irrigation ensures better water use efficiency and increased crop yields."
      ],
      [
        "Rural road development",
        "Building and upgrading rural roads improves connectivity, enhances access to markets, schools, and healthcare, and supports overall rural growth."
      ],
      [
        "Agricultural market modernization",
        "Developing modern market yards, e-marketing platforms, cold storage, and logistics facilities helps farmers get better prices and reduces post-harvest losses."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "210,170,270,220", // Keep existing coordinates
  },  
  {
    id: 32,
    slug: "wanaparthy",
    name: "Wanaparthy",
    description:
      "Wanaparthy is an agricultural district known for groundnut cultivation. The district is primarily agricultural with focus on improving productivity and water management.",
    population: "577,758",
    area: "2,152 sq km",
    headquarters: "Wanaparthy",
    majorTowns: ["Atmakur", "Pebbair", "Gopalpet"],
    issues: [
      [
        "Water scarcity for agriculture",
        "Limited rainfall, over-extraction of groundwater, and inadequate irrigation facilities lead to water shortages, affecting crop growth and farm income."
      ],
      [
        "Groundnut crop productivity",
        "Groundnut yields are often low due to poor seed quality, pest infestations, and lack of access to modern farming practices and inputs."
      ],
      [
        "Rural infrastructure",
        "Insufficient road networks, electricity, storage facilities, and transport options limit rural development and access to essential services."
      ],
      [
        "Agricultural marketing",
        "Farmers face challenges in selling their produce at fair prices due to lack of nearby markets, poor infrastructure, and limited bargaining power."
      ]
    ],
    initiatives: [
      [
        "Water conservation projects",
        "Implementation of check dams, rainwater harvesting, and watershed management to improve groundwater recharge and ensure sustainable irrigation."
      ],
      [
        "Groundnut cultivation improvement",
        "Programs promoting high-yield varieties, integrated pest management, and training in modern agricultural practices to boost groundnut productivity and profitability."
      ],
      [
        "Rural road development",
        "Building and upgrading rural roads to connect villages with markets, healthcare, and education facilities, fostering economic and social growth."
      ],
      [
        "Agricultural market establishment",
        "Setting up local agricultural markets with proper infrastructure to reduce post-harvest losses, cut transportation costs, and improve price realization for farmers."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "150,210,210,260", // Placeholder coordinates
  },  
  {
    id: 33,
    slug: "yadadri",
    name: "Yadadri Bhuvanagiri",
    description:
      "Yadadri Bhuvanagiri is known for the famous Yadadri temple and agricultural production. The district has significant religious tourism and is developing its agricultural sector.",
    population: "739,448",
    area: "3,092 sq km",
    headquarters: "Bhongir",
    majorTowns: ["Yadagirigutta", "Alair", "Mothkur"],
    issues: [
      [
        "Religious tourism infrastructure",
        "Many pilgrimage sites lack adequate facilities such as transport, lodging, sanitation, and crowd management systems, limiting their tourism potential."
      ],
      [
        "Temple development",
        "Historical and culturally significant temples require restoration, expansion, and better management to accommodate increasing pilgrim footfall and preserve heritage."
      ],
      [
        "Agricultural water management",
        "Inefficient irrigation practices and inadequate water resources affect farm productivity, especially in drought-prone rural areas."
      ],
      [
        "Rural connectivity",
        "In many regions, poor road and transport infrastructure hinders access to markets, healthcare, and educational services, affecting rural livelihoods."
      ]
    ],
    initiatives: [
      [
        "Yadadri temple development project",
        "A major initiative to transform Yadadri into a world-class spiritual and cultural center through temple renovation, improved amenities, and urban planning."
      ],
      [
        "Pilgrimage tourism promotion",
        "Efforts to enhance religious tourism through infrastructure upgrades, tourism circuits, and promotion of local culture to boost the regional economy."
      ],
      [
        "Irrigation infrastructure improvement",
        "Projects aimed at expanding canals, modernizing irrigation systems, and improving water distribution to support agricultural sustainability."
      ],
      [
        "Rural road development",
        "Construction and upgrading of rural roads to improve last-mile connectivity, access to services, and integration of rural areas with economic centers."
      ]
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "160,160,220,210", // Placeholder coordinates
  },  
];

export function getDistrictData(slug: string): District | undefined {
  return districts.find((district) => district.slug === slug);
}

// export function getDistrictWithFormattedDetails(slug: string): (District & { formattedIssues: string[]; formattedInitiatives: string[] }) | undefined {
//   const district = getDistrictData(slug); // Use existing function to find the district
//   if (district) {
//     // Call formatEntries for issues and initiatives
//     const formattedIssues = formatEntries(district.issues);
//     const formattedInitiatives = formatEntries(district.initiatives);
    
//     // Return the original district data along with the formatted strings
//     return {
//       ...district,
//       formattedIssues,
//       formattedInitiatives,
//     };
//   }
//   return undefined;
// }
