export interface HeritageSite {
    id: string;
    title: string;
    location: string;
    description: string;
    imageUrl: string;
    category: 'Temples' | 'Forts & Palaces' | 'Historical Sites';
  }
  
  export const heroSection: HeritageSite[] = [
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