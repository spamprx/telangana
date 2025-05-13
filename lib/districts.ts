export interface District {
  id: number
  slug: string
  name: string
  description: string
  population: string
  area: string
  headquarters: string
  majorTowns: string[]
  issues: string[]
  initiatives: string[]
  coverImage: string
  mapImage: string
  thumbnail: string
  mapCoords: string // For image map
}

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
      "Urban congestion and traffic management",
      "Water scarcity in certain areas",
      "Air pollution concerns",
      "Housing affordability",
    ],
    initiatives: [
      "Hyderabad Metro Rail project for improved public transportation",
      "IT corridor development to boost tech industry",
      "Lake restoration projects to improve water bodies",
      "Smart city initiatives for better urban management",
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
      "Infrastructure development needs",
      "Agricultural water management",
      "Rural healthcare access",
      "Educational quality improvements",
    ],
    initiatives: [
      "Heritage conservation of Warangal Fort and Thousand Pillar Temple",
      "Textile park development to boost local industry",
      "Rural road connectivity improvement",
      "Educational institution expansion",
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
      "Irrigation water management",
      "Granite industry environmental impact",
      "Rural employment opportunities",
      "Healthcare infrastructure",
    ],
    initiatives: [
      "Lower Manair Dam irrigation project expansion",
      "Granite industry regulation and modernization",
      "Rural skill development programs",
      "Healthcare facility upgrades in rural areas",
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
      "Agricultural market access for farmers",
      "Turmeric price fluctuations",
      "Irrigation infrastructure",
      "Rural education quality",
    ],
    initiatives: [
      "Turmeric processing and export promotion",
      "Irrigation canal network expansion",
      "Agricultural market reforms",
      "Rural school infrastructure improvement",
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
      "Tribal community development",
      "Forest conservation and management",
      "Coal mining environmental impact",
      "Agricultural modernization",
    ],
    initiatives: [
      "Tribal welfare programs and education",
      "Sustainable forest management practices",
      "Mining regulation and worker safety",
      "Agricultural technology adoption programs",
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
      "Tribal welfare and development",
      "Forest conservation",
      "Rural connectivity",
      "Agricultural productivity",
    ],
    initiatives: [
      "Tribal education and healthcare programs",
      "Sustainable forest management",
      "Rural road development project",
      "Agricultural modernization schemes",
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
      "Coal mining environmental impact",
      "Tribal community development",
      "Forest conservation",
      "Flood management along Godavari river",
    ],
    initiatives: [
      "Sustainable mining practices",
      "Tribal welfare programs",
      "Eco-tourism development",
      "Flood control infrastructure",
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
      "Urban infrastructure development",
      "Educational institution quality",
      "Heritage conservation",
      "Water management",
    ],
    initiatives: [
      "Educational hub development",
      "Historical monument restoration",
      "Urban renewal projects",
      "Water conservation programs",
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
      "Agricultural marketing infrastructure",
      "Irrigation water management",
      "Rural employment",
      "Industrial development",
    ],
    initiatives: [
      "Agricultural market modernization",
      "Irrigation project expansion",
      "Textile industry promotion",
      "Skill development centers",
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
      "Agricultural water management",
      "Rural infrastructure",
      "Farmer income stability",
      "Educational access",
    ],
    initiatives: [
      "Water conservation projects",
      "Rural road development",
      "Crop diversification programs",
      "Educational institution expansion",
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
      "Tribal development",
      "Forest conservation",
      "Wildlife protection",
      "Rural connectivity",
    ],
    initiatives: [
      "Tribal welfare schemes",
      "Eco-tourism development",
      "Wildlife conservation programs",
      "Rural infrastructure improvement",
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
      "Water scarcity for agriculture",
      "Rural poverty",
      "Religious tourism infrastructure",
      "Educational facilities",
    ],
    initiatives: [
      "Irrigation project development",
      "Temple tourism promotion",
      "Rural livelihood programs",
      "Educational institution improvement",
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
      "Agricultural water management",
      "Sugar industry challenges",
      "Rural infrastructure",
      "Farmer income stability",
    ],
    initiatives: [
      "Irrigation modernization",
      "Sugar industry support",
      "Rural road development",
      "Agricultural market reforms",
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
      "Tribal development and welfare",
      "Forest conservation",
      "Human-wildlife conflict",
      "Rural connectivity",
    ],
    initiatives: [
      "Tribal education programs",
      "Sustainable forest management",
      "Wildlife corridor protection",
      "Rural infrastructure development",
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
      "Tribal welfare",
      "Agricultural productivity",
      "Rural healthcare",
      "Educational access",
    ],
    initiatives: [
      "Tribal development programs",
      "Agricultural modernization",
      "Rural health center establishment",
      "Educational infrastructure improvement",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "240,160,300,210", // Placeholder coordinates
  },
  {
    id: 16,
    slug: "mahbubnagar",
    name: "Mahabubnagar",
    description:
      "Mahabubnagar is known for agriculture and migration issues due to historical drought conditions. The district has been working on water conservation and agricultural improvement to address these challenges.",
    population: "919,903",
    area: "2,738 sq km",
    headquarters: "Mahabubnagar",
    majorTowns: ["Jadcherla", "Shadnagar", "Kalwakurthy"],
    issues: [
      "Water scarcity",
      "Drought management",
      "Migration of labor",
      "Agricultural productivity",
    ],
    initiatives: [
      "Water conservation projects",
      "Drought-resistant crop promotion",
      "Rural employment guarantee programs",
      "Irrigation infrastructure development",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "160,200,220,250", // Placeholder coordinates
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
      "Coal mining environmental impact",
      "Industrial pollution",
      "Worker safety and health",
      "Post-mining land reclamation",
    ],
    initiatives: [
      "Environmental monitoring and protection",
      "Mine worker safety programs",
      "Land reclamation projects",
      "Clean energy transition planning",
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
      "Agricultural water management",
      "Rural infrastructure",
      "Heritage conservation",
      "Industrial development",
    ],
    initiatives: [
      "Cathedral conservation project",
      "Irrigation improvement",
      "Rural road development",
      "Industrial zone establishment",
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
      "Urban planning and development",
      "Traffic congestion",
      "Industrial pollution",
      "Housing affordability",
    ],
    initiatives: [
      "Urban infrastructure development",
      "Public transportation improvement",
      "Industrial zone regulation",
      "Affordable housing projects",
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
      "Tribal welfare",
      "Forest conservation",
      "Tourism infrastructure",
      "Rural connectivity",
    ],
    initiatives: [
      "Ramappa Temple tourism development",
      "Tribal cultural preservation",
      "Eco-tourism promotion",
      "Rural infrastructure improvement",
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
      "Water resource management",
      "Agricultural productivity",
      "Rural infrastructure",
      "Tourism development",
    ],
    initiatives: [
      "Srisailam reservoir management",
      "Irrigation project expansion",
      "Rural road development",
      "Eco-tourism promotion",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "170,210,230,260", // Placeholder coordinates
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
      "Fluoride contamination in water",
      "Agricultural water management",
      "Limestone mining environmental impact",
      "Rural healthcare",
    ],
    initiatives: [
      "Safe drinking water projects",
      "Fluoride mitigation programs",
      "Sustainable mining practices",
      "Irrigation infrastructure improvement",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "190,180,250,230", // Placeholder coordinates
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
      "Water scarcity for agriculture",
      "Handloom industry challenges",
      "Rural infrastructure",
      "Educational access",
    ],
    initiatives: [
      "Handloom weaver support programs",
      "Water conservation projects",
      "Rural road development",
      "Educational institution establishment",
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
      "Furniture industry modernization",
      "Forest conservation",
      "Agricultural productivity",
      "Rural infrastructure",
    ],
    initiatives: [
      "Furniture craftsmanship promotion",
      "Sustainable forestry practices",
      "Agricultural modernization",
      "Rural connectivity improvement",
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
      "Industrial pollution",
      "Coal mining environmental impact",
      "Worker safety and health",
      "Urban infrastructure",
    ],
    initiatives: [
      "Environmental monitoring and protection",
      "Industrial safety standards implementation",
      "Urban development projects",
      "Worker health programs",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "190,70,250,120", // Placeholder coordinates
  },
  {
    id: 26,
    slug: "rajanna-sircilla",
    name: "Rajanna Sircilla",
    description:
      "Rajanna Sircilla is known for its textile industry and handloom weaving. The district has a rich tradition of textile production and is working to modernize and support this industry.",
    population: "552,037",
    area: "2,019 sq km",
    headquarters: "Sircilla",
    majorTowns: ["Vemulawada", "Tangallapally", "Gambhiraopet"],
    issues: [
      "Textile industry modernization",
      "Weaver welfare",
      "Water management for textile production",
      "Marketing of textile products",
    ],
    initiatives: [
      "Textile park development",
      "Weaver cooperative support",
      "Skill development for textile workers",
      "Textile export promotion",
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
      "Urban sprawl management",
      "Infrastructure development",
      "Water supply and management",
      "Housing affordability",
    ],
    initiatives: [
      "Planned urban development",
      "Industrial corridor establishment",
      "Water conservation projects",
      "Affordable housing initiatives",
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
      "Industrial pollution management",
      "Pharmaceutical industry regulation",
      "Agricultural water management",
      "Urban-rural development balance",
    ],
    initiatives: [
      "Pharmaceutical industry promotion",
      "Pollution control measures",
      "Agricultural modernization",
      "Rural-urban connectivity improvement",
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
      "Irrigation water management",
      "Agricultural marketing",
      "Rural infrastructure",
      "Educational facilities",
    ],
    initiatives: [
      "Irrigation project implementation",
      "Agricultural market development",
      "Rural road improvement",
      "Educational institution establishment",
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
      "Agricultural water management",
      "Dairy industry development",
      "Rural infrastructure",
      "Agricultural marketing",
    ],
    initiatives: [
      "Dairy cooperative support",
      "Irrigation infrastructure improvement",
      "Rural road development",
      "Agricultural market modernization",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "210,170,270,220", // Placeholder coordinates
  },
  {
    id: 31,
    slug: "vikarabad",
    name: "Vikarabad",
    description:
      "Vikarabad is known for its forests, agricultural production, and tourism potential. The district has significant forest cover and is developing its agricultural and tourism sectors.",
    population: "927,140",
    area: "3,386 sq km",
    headquarters: "Vikarabad",
    majorTowns: ["Pargi", "Tandur", "Kodangal"],
    issues: [
      "Forest conservation",
      "Agricultural productivity",
      "Tourism infrastructure",
      "Rural connectivity",
    ],
    initiatives: [
      "Eco-tourism development",
      "Sustainable agriculture promotion",
      "Forest protection programs",
      "Rural infrastructure improvement",
    ],
    coverImage: "/dummy-image.jpg",
    mapImage: "/dummy-image.jpg",
    thumbnail: "/dummy-image.jpg",
    mapCoords: "120,180,180,230", // Placeholder coordinates
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
      "Water scarcity for agriculture",
      "Groundnut crop productivity",
      "Rural infrastructure",
      "Agricultural marketing",
    ],
    initiatives: [
      "Water conservation projects",
      "Groundnut cultivation improvement",
      "Rural road development",
      "Agricultural market establishment",
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
      "Religious tourism infrastructure",
      "Temple development",
      "Agricultural water management",
      "Rural connectivity",
    ],
    initiatives: [
      "Yadadri temple development project",
      "Pilgrimage tourism promotion",
      "Irrigation infrastructure improvement",
      "Rural road development",
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
