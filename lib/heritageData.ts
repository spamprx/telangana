export interface HeritageSite {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: 'Temples' | 'Forts & Palaces' | 'Historical Sites';
}

export const heritageSites: HeritageSite[] = [
  {
    id: 'ramappa',
    title: 'Ramappa Temple',
    location: 'Palampet, Mulugu',
    description: 'A 13th-century temple known for its intricate carvings and floating bricks. Recently designated as a UNESCO World Heritage Site.',
    imageUrl: '/placeholder-ramappa.jpg',
    category: 'Temples'
  },
  {
    id: 'thousand-pillar',
    title: 'Thousand Pillar Temple',
    location: 'Hanamkonda, Warangal',
    description: 'Built in 1163 AD by the Kakatiya king, this star-shaped temple is known for its exquisite stone carvings and thousand pillars.',
    imageUrl: '/placeholder-thousand-pillar.jpg',
    category: 'Temples'
  },
  {
    id: 'jogulamba',
    title: 'Jogulamba Temple',
    location: 'Alampur, Gadwal',
    description: 'One of the 18 Maha Shakti Peethas in India, this ancient temple is dedicated to Goddess Jogulamba.',
    imageUrl: '/placeholder-jogulamba.jpg',
    category: 'Temples'
  },
  {
    id: 'golconda',
    title: 'Golconda Fort',
    location: 'Hyderabad',
    description: 'A magnificent 16th-century fort known for its acoustic design, impressive architecture, and historical significance.',
    imageUrl: '/placeholder-golconda.jpg',
    category: 'Forts & Palaces'
  },
  {
    id: 'charminar',
    title: 'Charminar',
    location: 'Hyderabad',
    description: 'The iconic symbol of Hyderabad, built in 1591, is a stunning example of Indo-Islamic architecture.',
    imageUrl: '/placeholder-charminar.jpg',
    category: 'Forts & Palaces'
  },
  {
    id: 'warangal-fort',
    title: 'Warangal Fort',
    location: 'Warangal',
    description: 'A 13th-century fort built by the Kakatiya dynasty featuring impressive stone gateways and intricate sculptures.',
    imageUrl: '/placeholder-warangal-fort.jpg',
    category: 'Forts & Palaces'
  },
  {
    id: 'qutb-shahi',
    title: 'Qutb Shahi Tombs',
    location: 'Hyderabad',
    description: 'A complex of tombs housing the remains of the Qutb Shahi dynasty rulers, featuring Persian, Hindu, and Pathan architectural styles.',
    imageUrl: '/placeholder-qutb-shahi.jpg',
    category: 'Historical Sites'
  },
  {
    id: 'bhongir',
    title: 'Bhongir Fort',
    location: 'Bhongir, Yadadri',
    description: 'A unique egg-shaped hill fort built in the 10th century by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI.',
    imageUrl: '/placeholder-bhongir.jpg',
    category: 'Historical Sites'
  },
  {
    id: 'kolanupaka',
    title: 'Kolanupaka Temple',
    location: 'Kolanupaka, Yadadri',
    description: 'An ancient Jain temple with remarkable carvings and sculptures, including a 5-foot monolithic statue of Mahavira.',
    imageUrl: '/placeholder-kolanupaka.jpg',
    category: 'Historical Sites'
  }
]; 