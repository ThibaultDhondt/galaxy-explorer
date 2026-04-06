export interface SolarObject {
  id: string;
  name: string;
  type: 'star' | 'planet' | 'dwarf-planet';
  imageUrl: string;
  orbitRadius: number; // SVG px from sun center (0 for Sun)
  orbitAngle: number;  // degrees
  visualRadius: number; // SVG px
  color: string;
  facts: {
    diameter: string;
    distanceFromSun: string;
    orbitalPeriod: string;
    moons: string;
    atmosphere: string;
  };
  description: string;
}

export const solarObjects: SolarObject[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/1024px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
    orbitRadius: 0,
    orbitAngle: 0,
    visualRadius: 30,
    color: '#FDB813',
    facts: {
      diameter: '1,392,700 km',
      distanceFromSun: '0',
      orbitalPeriod: 'N/A',
      moons: 'N/A',
      atmosphere: 'Hydrogen (73%), Helium (25%)',
    },
    description:
      'The Sun is the star at the center of our solar system, containing over 99.8% of the total mass of the system. Its nuclear fusion core converts 600 million tons of hydrogen into helium every second, releasing the energy that powers all life on Earth. The Sun\'s magnetic activity drives solar wind that shapes the heliosphere surrounding our entire solar system.',
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1024px-Mercury_in_true_color.jpg',
    orbitRadius: 65,
    orbitAngle: 45,
    visualRadius: 4,
    color: '#9B9B9B',
    facts: {
      diameter: '4,879 km',
      distanceFromSun: '57.9 million km',
      orbitalPeriod: '88 Earth days',
      moons: '0',
      atmosphere: 'Minimal (sodium, oxygen traces)',
    },
    description:
      'Mercury is the smallest planet and the closest to the Sun, with a heavily cratered surface that records billions of years of impacts. Despite its proximity to the Sun, it is not the hottest planet — its lack of a substantial atmosphere means heat escapes rapidly, and temperatures swing from 430°C at noon to −180°C at night. A Mercurian day lasts 59 Earth days, and its year only 88.',
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/1024px-Venus-real_color.jpg',
    orbitRadius: 100,
    orbitAngle: 120,
    visualRadius: 7,
    color: '#E8C98B',
    facts: {
      diameter: '12,104 km',
      distanceFromSun: '108.2 million km',
      orbitalPeriod: '225 Earth days',
      moons: '0',
      atmosphere: 'CO₂ (96%), Nitrogen (3.5%)',
    },
    description:
      'Venus is the hottest planet in the solar system, with surface temperatures reaching 465°C due to a runaway greenhouse effect — hotter than Mercury despite being farther from the Sun. Its thick atmosphere exerts a crushing pressure 90 times that of Earth\'s at sea level. Venus rotates so slowly and in the opposite direction that the Sun rises in the west and sets in the east.',
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg',
    orbitRadius: 140,
    orbitAngle: 200,
    visualRadius: 8,
    color: '#4B9AE5',
    facts: {
      diameter: '12,742 km',
      distanceFromSun: '149.6 million km',
      orbitalPeriod: '365.25 days',
      moons: '1 (Moon)',
      atmosphere: 'Nitrogen (78%), Oxygen (21%)',
    },
    description:
      'Earth is the only known planet to harbor life, made possible by its liquid water oceans, oxygen-rich atmosphere, and protective magnetic field. It is the densest planet in the solar system and the largest of the four rocky inner planets. Earth\'s relatively large Moon stabilizes its axial tilt, contributing to the long-term climate stability that allowed complex life to evolve.',
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg',
    orbitRadius: 185,
    orbitAngle: 300,
    visualRadius: 6,
    color: '#C1440E',
    facts: {
      diameter: '6,779 km',
      distanceFromSun: '227.9 million km',
      orbitalPeriod: '687 Earth days',
      moons: '2 (Phobos, Deimos)',
      atmosphere: 'CO₂ (95%), Nitrogen (3%)',
    },
    description:
      'Mars, the Red Planet, hosts Olympus Mons — the tallest volcano in the solar system at nearly three times the height of Mount Everest. Ancient river valleys, polar ice caps, and mineral deposits strongly suggest that liquid water once flowed across its surface. Multiple rovers and orbiters are currently studying Mars in preparation for eventual crewed missions.',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/1024px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
    orbitRadius: 278,
    orbitAngle: 60,
    visualRadius: 20,
    color: '#C88B3A',
    facts: {
      diameter: '139,820 km',
      distanceFromSun: '778.5 million km',
      orbitalPeriod: '11.9 Earth years',
      moons: '95 confirmed',
      atmosphere: 'Hydrogen (89%), Helium (10%)',
    },
    description:
      'Jupiter is the largest planet in the solar system — its mass is greater than twice that of all other planets combined. Its iconic Great Red Spot is a storm wider than Earth that has raged for over 350 years. Jupiter\'s powerful gravity acts as a partial shield for the inner solar system, deflecting and capturing many comets and asteroids.',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1024px-Saturn_during_Equinox.jpg',
    orbitRadius: 360,
    orbitAngle: 150,
    visualRadius: 17,
    color: '#E4D191',
    facts: {
      diameter: '116,460 km',
      distanceFromSun: '1.43 billion km',
      orbitalPeriod: '29.5 Earth years',
      moons: '146 confirmed',
      atmosphere: 'Hydrogen (96%), Helium (3%)',
    },
    description:
      'Saturn\'s spectacular ring system — spanning 282,000 km but only about 10 m thick in places — is made of ice and rock ranging from microscopic grains to boulders the size of houses. Saturn is the least dense planet in the solar system; it would float on water. Its moon Titan is the only moon in the solar system with a thick atmosphere and surface lakes of liquid methane.',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1024px-Uranus2.jpg',
    orbitRadius: 435,
    orbitAngle: 260,
    visualRadius: 12,
    color: '#7AE8E2',
    facts: {
      diameter: '50,724 km',
      distanceFromSun: '2.87 billion km',
      orbitalPeriod: '84 Earth years',
      moons: '28 confirmed',
      atmosphere: 'Hydrogen (83%), Helium (15%), Methane (2%)',
    },
    description:
      'Uranus is unique in that it rotates nearly on its side, with an axial tilt of 98 degrees — likely the result of a massive collision early in the solar system\'s history. Its methane-rich atmosphere absorbs red light, giving the planet its distinctive blue-green colour. Uranus is the coldest planet in the solar system, with temperatures as low as −224°C.',
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/1024px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
    orbitRadius: 505,
    orbitAngle: 350,
    visualRadius: 11,
    color: '#3B5BD6',
    facts: {
      diameter: '49,244 km',
      distanceFromSun: '4.5 billion km',
      orbitalPeriod: '165 Earth years',
      moons: '16 confirmed',
      atmosphere: 'Hydrogen (80%), Helium (19%), Methane (1.5%)',
    },
    description:
      'Neptune is the windiest planet in the solar system, with storms reaching speeds of 2,100 km/h. It was predicted to exist through mathematical calculations before it was ever directly observed in 1846, making it the first planet discovered by deduction rather than observation. Its largest moon, Triton, orbits in the opposite direction of Neptune\'s rotation, suggesting it was gravitationally captured from the Kuiper Belt.',
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'dwarf-planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/1024px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg',
    orbitRadius: 565,
    orbitAngle: 100,
    visualRadius: 3,
    color: '#C8B7A6',
    facts: {
      diameter: '2,377 km',
      distanceFromSun: '5.9 billion km (avg)',
      orbitalPeriod: '248 Earth years',
      moons: '5 (Charon, Styx, Nix, Kerberos, Hydra)',
      atmosphere: 'Nitrogen, methane (thin, seasonal)',
    },
    description:
      'Pluto was reclassified from a planet to a dwarf planet in 2006 when astronomers defined a stricter planetary criterion. NASA\'s New Horizons mission revealed in 2015 that Pluto is a geologically active world, with towering water-ice mountains and a vast nitrogen glacier called Tombaugh Regio. Pluto and its large moon Charon are sometimes considered a double dwarf planet system, as Charon is over half Pluto\'s diameter.',
  },
];
