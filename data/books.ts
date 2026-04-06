export interface SpaceBook {
  id: string;
  title: string;
  author: string;
  year: number;
  isbn: string;
  description: string;
}

export const spaceBooks: SpaceBook[] = [
  {
    id: 'cosmos',
    title: 'Cosmos',
    author: 'Carl Sagan',
    year: 1980,
    isbn: '0394502949',
    description: 'A sweeping journey through 15 billion years of cosmic evolution, blending science, history, and wonder.',
  },
  {
    id: 'pale-blue-dot',
    title: 'Pale Blue Dot',
    author: 'Carl Sagan',
    year: 1994,
    isbn: '0679430725',
    description: 'A vision of humanity\'s future in space, inspired by the famous Voyager 1 photograph of Earth from 6 billion km away.',
  },
  {
    id: 'brief-history-time',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    year: 1988,
    isbn: '0553380163',
    description: 'Hawking makes black holes, the Big Bang, and the nature of time accessible without a single equation.',
  },
  {
    id: 'right-stuff',
    title: 'The Right Stuff',
    author: 'Tom Wolfe',
    year: 1979,
    isbn: '0374250316',
    description: 'The electrifying true story of the test pilots and Mercury astronauts who first pushed humans beyond the atmosphere.',
  },
  {
    id: 'carrying-fire',
    title: 'Carrying the Fire',
    author: 'Michael Collins',
    year: 1974,
    isbn: '0374531943',
    description: 'The Apollo 11 command module pilot\'s candid memoir, widely considered the finest astronaut autobiography ever written.',
  },
  {
    id: 'case-for-mars',
    title: 'The Case for Mars',
    author: 'Robert Zubrin',
    year: 1996,
    isbn: '0684827573',
    description: 'A detailed, passionate argument for how and why humanity should colonize Mars using existing technology.',
  },
  {
    id: 'martian',
    title: 'The Martian',
    author: 'Andy Weir',
    year: 2011,
    isbn: '0804139024',
    description: 'A botanist stranded on Mars must survive using ingenuity and potatoes — rigorously researched science fiction.',
  },
  {
    id: 'astrophysics-hurry',
    title: 'Astrophysics for People in a Hurry',
    author: 'Neil deGrasse Tyson',
    year: 2017,
    isbn: '0393609391',
    description: 'The most essential concepts in astrophysics condensed into a witty, pocket-sized guide.',
  },
  {
    id: 'astronaut-guide',
    title: "An Astronaut's Guide to Life on Earth",
    author: 'Chris Hadfield',
    year: 2013,
    isbn: '9780316253222',
    description: 'ISS commander Hadfield shares hard-won life lessons from two decades of preparing for extreme environments.',
  },
  {
    id: 'endurance',
    title: 'Endurance',
    author: 'Scott Kelly',
    year: 2017,
    isbn: '1524761516',
    description: 'The gripping account of a year aboard the ISS and the physical and psychological toll of long-duration spaceflight.',
  },
  {
    id: 'first-man',
    title: 'First Man',
    author: 'James R. Hansen',
    year: 2005,
    isbn: '0743273141',
    description: 'The authorized biography of Neil Armstrong, tracing the quiet engineer who became the first human on the Moon.',
  },
  {
    id: 'packing-for-mars',
    title: 'Packing for Mars',
    author: 'Mary Roach',
    year: 2010,
    isbn: '0393068942',
    description: 'A hilarious, deeply researched look at the bizarre and unglamorous biological realities of human spaceflight.',
  },
  {
    id: 'how-to-make-spaceship',
    title: 'How to Make a Spaceship',
    author: 'Julian Guthrie',
    year: 2016,
    isbn: '1594204896',
    description: 'The story of the iconoclasts and entrepreneurs who competed for the Ansari X Prize to democratize space.',
  },
  {
    id: 'ignition',
    title: 'Ignition!',
    author: 'John Drury Clark',
    year: 1972,
    isbn: '0813509513',
    description: 'A witty, insider history of liquid rocket propellants — cult reading for anyone serious about rocket chemistry.',
  },
  {
    id: 'rocket-men',
    title: 'Rocket Men',
    author: 'Robert Kurson',
    year: 2018,
    isbn: '0812988768',
    description: 'The incredible true story of Apollo 8, the first mission to carry humans around the Moon at the height of the Space Race.',
  },
];
