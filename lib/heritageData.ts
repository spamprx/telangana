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
    imageUrl: '/heritage/temples/ramappa.png',
    category: 'Temples'
  },
  {
    id: 'thousand-pillar',
    title: 'Thousand Pillar Temple',
    location: 'Hanamkonda, Warangal',
    description: 'Built in 1163 AD by the Kakatiya king, this star-shaped temple is known for its exquisite stone carvings and thousand pillars.',
    imageUrl: '/heritage/temples/1000-pillars.png',
    category: 'Temples'
  },
  {
    id: 'jogulamba',
    title: 'Jogulamba Temple',
    location: 'Alampur, Gadwal',
    description: 'One of the 18 Maha Shakti Peethas in India, this ancient temple is dedicated to Goddess Jogulamba.',
    imageUrl: '/heritage/temples/jogulamba.png',
    category: 'Temples'
  },
  {
    id: 'yadagirigutta',
    title: 'Yadagirigutta Temple',
    location: 'Yadagirigutta, Yadadri',
    description: 'A famous temple dedicated to Lord Narasimha, known for its spiritual significance and architectural beauty.',
    imageUrl: '/heritage/temples/yadagirigutta.png',
    category: 'Temples'
  },
  {
    id: 'sammakka-sarakka',
    title: 'Sammakka Sarakka Temple',
    location: 'Medaram, Mulugu',
    description: 'A tribal temple dedicated to the mother-daughter duo of Sammakka and Sarakka, hosts the largest tribal fair in Asia.',
    imageUrl: '/heritage/temples/sammakka-sarakka.png',
    category: 'Temples'
  },
  {
    id: 'swarnagiri',
    title: 'Swarnagiri Temple',
    location: 'Swarnagiri, Nalgonda',
    description: 'An ancient temple known for its golden peak and spiritual significance.',
    imageUrl: '/heritage/temples/swarnagiri.png',
    category: 'Temples'
  },
  {
    id: 'bhadrachalam',
    title: 'Bhadrachalam Temple',
    location: 'Bhadrachalam, Bhadradri',
    description: 'A sacred temple dedicated to Lord Rama, known for its historical and religious importance.',
    imageUrl: '/heritage/temples/bhadrachalam.png',
    category: 'Temples'
  },
  {
    id: 'peddamma',
    title: 'Peddamma Temple',
    location: 'Hyderabad',
    description: 'A revered temple dedicated to Goddess Peddamma, known for its spiritual significance and annual celebrations.',
    imageUrl: '/heritage/temples/peddamma.png',
    category: 'Temples'
  },
  {
    id: 'balkapet-yalamma',
    title: 'Balkapet Yalamma Temple',
    location: 'Balkapet, Hyderabad',
    description: 'An ancient temple dedicated to Goddess Yalamma, known for its unique traditions and spiritual importance.',
    imageUrl: '/heritage/temples/balkapet-yalamma.png',
    category: 'Temples'
  },
  {
    id: 'jaganadhh',
    title: 'Jaganadhh Temple',
    location: 'Hyderabad',
    description: 'A significant temple dedicated to Lord Jagannath, known for its architectural beauty and religious importance.',
    imageUrl: '/heritage/temples/jaganadhh.png',
    category: 'Temples'
  },
  {
    id: 'birla-mandir',
    title: 'Birla Mandir',
    location: 'Hyderabad',
    description: 'A modern temple built with white marble, offering a panoramic view of the city and Hussain Sagar Lake.',
    imageUrl: '/heritage/temples/birla-mandir.png',
    category: 'Temples'
  },
  {
    id: 'chilkur-balaji',
    title: 'Chilkur Balaji Temple',
    location: 'Chilkur, Hyderabad',
    description: 'Known as the "Visa Balaji Temple", this ancient temple is famous for its unique customs and spiritual significance.',
    imageUrl: '/heritage/temples/chilkur-balaji.png',
    category: 'Temples'
  },
  {
    id: 'golconda',
    title: 'Golconda Fort',
    location: 'Hyderabad',
    description: 'A magnificent 16th-century fort known for its acoustic design, impressive architecture, and historical significance.',
    imageUrl: '/heritage/forts/golconda.png',
    category: 'Forts & Palaces'
  },
  {
    id: 'charminar',
    title: 'Charminar',
    location: 'Hyderabad',
    description: 'The iconic symbol of Hyderabad, built in 1591, is a stunning example of Indo-Islamic architecture.',
    imageUrl: '/heritage/forts/charminar.png',
    category: 'Forts & Palaces'
  },
  {
    id: 'warangal-fort',
    title: 'Warangal Fort',
    location: 'Warangal',
    description: 'A 13th-century fort built by the Kakatiya dynasty featuring impressive stone gateways and intricate sculptures.',
    imageUrl: '/heritage/forts/warangal-fort.png',
    category: 'Forts & Palaces'
  },
  {
    id: 'qutb-shahi',
    title: 'Qutb Shahi Tombs',
    location: 'Hyderabad',
    description: 'A complex of tombs housing the remains of the Qutb Shahi dynasty rulers, featuring Persian, Hindu, and Pathan architectural styles.',
    imageUrl: '/heritage/historical-sites/qutb-shahi.png',
    category: 'Historical Sites'
  },
  {
    id: 'bhongir',
    title: 'Bhongir Fort',
    location: 'Bhongir, Yadadri',
    description: 'A unique egg-shaped hill fort built in the 10th century by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI.',
    imageUrl: '/heritage/historical-sites/bhongir.png',
    category: 'Historical Sites'
  },
  {
    id: 'kolanupaka',
    title: 'Kolanupaka Temple',
    location: 'Kolanupaka, Yadadri',
    description: 'An ancient Jain temple with remarkable carvings and sculptures, including a 5-foot monolithic statue of Mahavira.',
    imageUrl: '/heritage/historical-sites/kolanupaka.png',
    category: 'Historical Sites'
  }
]; 