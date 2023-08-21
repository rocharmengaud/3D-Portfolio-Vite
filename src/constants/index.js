import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  NetflouixImg,
  TwitturWeb,
  WeatherAppImg,
  ShoppingAppImg,
  KasaWeb,
  balisePng,
  OCRLogo,
  SteliaLogo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'works',
    title: 'Works',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front End Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Next.js / Vite Enthusiast',
    icon: backend,
  },
  {
    title: 'Tailwind CSS daily user',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Freelancing & Personal Projects',
    company_name: 'Freelance',
    icon: balisePng,
    iconBg: '#E6DEDD',
    date: '2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies/frameworks.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Listening to the client needs and find solutions for them.',
    ],
  },
  {
    title: 'React.js Online Front End Course',
    company_name: 'OpenClassRooms',
    icon: OCRLogo,
    iconBg: '#383E56',
    date: '2022 - 2023',
    points: [
      'Learning web basics (HTML, CSS, JS)',
      'Worked on 14 different projects throughout the 1 year course.',
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'CAD draftsman',
    company_name: 'Stelia Aerospace',
    icon: SteliaLogo,
    iconBg: '#FFF',
    date: '2014 - 2015',
    points: [
      'Computer Aided Design 3D models conception for aeronautical industries',
      'Collaborating with cross-functional teams including engineers, calculators, and other draftsman to work on high-quality aeronautical engineering',
    ],
  },
];

const projects = [
  {
    name: 'Netflouix',
    description: 'Clone of the popular social media website with some back end functionnalities.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: NetflouixImg,
    source_code_link: 'https://github.com/rocharmengaud/netflix-clone',
    live_code_link: 'https://netflouix-rocharmengaud.vercel.app/',
  },
  {
    name: 'Twittur',
    description: 'Clone of the popular social media website with some back end functionnalities.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: TwitturWeb,
    source_code_link: 'https://github.com/rocharmengaud/twitter-clone',
    live_code_link: 'https://twittur-rocharmengaud.vercel.app/',
  },
  {
    name: 'Weather App',
    description: 'Simple weather application, with a search function using API calls from OpenWeatherMap.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: WeatherAppImg,
    source_code_link: 'https://github.com/rocharmengaud/Weather-app',
    live_code_link: 'https://weather-app-rocharmengaud.vercel.app/',
  },
  {
    name: 'Shopping app',
    description: 'Front end of a showcase shopping website, with cart functionnalities. No back end.',
    tags: [
      {
        name: 'Vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: ShoppingAppImg,
    source_code_link: 'https://github.com/rocharmengaud/Shopping-app',
    live_code_link: 'https://shopping-app-rocharmengaud.vercel.app/',
  },
  {
    name: 'Kasa',
    description: 'Clone of the popular vacation rentals website. OpenClassRooms original project.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JSON Data',
        color: 'pink-text-gradient',
      },
    ],
    image: KasaWeb,
    source_code_link: 'https://github.com/rocharmengaud/Kasa',
    live_code_link: 'https://kasa-rocharmengaud.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
