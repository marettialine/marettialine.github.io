import { Icons } from '../components/Icons'

import project1 from '../assets/project_1.png'
import project2 from '../assets/project_2.png'
import project3 from '../assets/project_3.png'
import project4 from '../assets/project_4.png'
import project5 from '../assets/project_5.png'
import project6 from '../assets/project_6.png'
import project7 from '../assets/project_7.png'

const ageCalculation = new Date().getFullYear() - 2002

export const enUS = {
  Header: [
    `Home`,
    `About Me`,
    `Qualifications`,
    `Projects`,
    `Technologies`,
    `Contact`,
    `Curriculum`,
  ],
  Home: {
    title: `Hello! I am `,
    description: `I am a Computer Engineering student, with a strong interest in technology and innovation. As a full stack web developer, I combine front-end and back-end skills to create complete and efficient solutions. My trajectory is characterized by the continuous search for knowledge and the practical application of theoretical concepts, always focused on delivering high-quality projects.`,
  },
  About: {
    title: [`Find out more `, `about me`],
    description: [
      `My name is `,
      `Aline`,
      ` and I’m ${ageCalculation} years old! I was born in Poços de Caldas but I went to live in Italy when I was 3 years old, returning to Brazil when I was 11 years old. `,
      `I’m a programmer`,
      ` since I was 14 years old, `,
      `I fell in love with programming`,
      ` and since then I have been increasingly deepening my knowledge in the area. I went to high school along with technical education in IT and currently `,
      `I’m a Computer Engineering student`,
      `, both courses being taken at IFSULDEMINAS - Campus Poços de Caldas.`,
    ],
    numbers: [
      `years of study and experience`,
      `studied technologies`,
      `course and event certificates`,
    ],
  },
  Qualifications: {
    title: [`My `, `Qualifications`],
    subtitle: [`Academic Background`, `Professional Experience`],
    education: {
      english: [
        `English Course and English Conversation`,
        `CEDET – Center for the Development of Potential and Talent`,
        `2015 to 2018`,
      ],
      technician: [
        `Technical Computing Course Integrated with High School`,
        `Federal Institute of Education, Science, and Technology – Poços de Caldas Campus`,
        `2017 to 2019`,
      ],
      engineering: [
        `Bachelor’s Degree in Computer Engineering`,
        `Federal Institute of Education, Science, and Technology – Poços de Caldas Campus`,
        `2020 to 2025`,
      ],
      rocketseat: [
        `Training in the ReactJS Specialist Track and the NodeJS Specialist Track`,
        `Rocketseat`,
        `2023 to 2024`,
      ],
    },
    works: {
      ciadi: [
        `Internship as a Computer Maintenance Technician and IT Instructor`,
        `CIADI - Integrated Daycare Center for the Elderly`,
        `Oct 2018 – Dec 2018 (2 months)`,
      ],
      excelenciaTrainee: [
        `Internship as a Full Stack Developer`,
        `Excelência Consultoria e Educação`,
        `Feb 2019 – May 2019 (3 months)`,
      ],
      excelencia: [
        `Full Stack Developer (Freelancer)`,
        `Excelência Consultoria e Educação`,
        `Jun 2019 – Present (6 years)`,
      ],
      arteDeCaderno: [
        `Scholarship for the Arte de Caderno Extension Project`,
        `Federal Institute of Education, Science and Technology - Poços de Caldas Campus`,
        `Sep 2024 - Jan 2025 (6 months)`,
      ],
    },
  },
  Projects: {
    title: [`See the `, `Projects I created`],
    list: [
      {
        title: `Consultoria Excelência`,
        description: `Development of the main website of the company Consultoria Excelência, highlighting crucial information about its services such as areas of activity, success stories, etc.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
          <Icons.Node key="Node" />,
        ],
        link: `https://consultoriaexcelencia.com.br/`,
        img: project1,
        type: 'desktop',
      },
      {
        title: `Power Portal`,
        description: `Creation of a website with a collection of Power BI projects and job openings in the area, submitted directly by users. The website also includes tools for styling dashboard themes and displaying them on TVs, allowing the definition of timing and transition effects for the panels.`,
        technologies: [
          <Icons.HTML key="HTML" />,
          <Icons.JavaScript key="JavaScript" />,
          <Icons.PHP key="PHP" />,
        ],
        link: `https://powerportal.com.br/`,
        img: project2,
        type: 'desktop',
      },
      {
        title: `Consultoria Excelência - Blog`,
        description: `Creation of a blog for Consultoria Excelência, allowing the regular publication of articles, news and company updates. Implementation of a robust administration area, where administrators can easily create, edit and manage posts.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
          <Icons.Node key="Node" />,
        ],
        link: `https://consultoriaexcelencia.com.br/blog`,
        img: project3,
        type: 'desktop',
      },
      {
        title: `Ignite Feed`,
        description: `Development of a project that simulates a social media feed, allowing you to add and delete comments and evaluate publications. This project was developed based on Rocketseat classes.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
        ],
        link: `https://marettialine.github.io/ignite-feed/`,
        img: project4,
        type: 'desktop',
      },
      {
        title: `Ignite To Do List`,
        description: `Creation of a project to manage a task list with information stored in the browser's Local Storage. This way, it is possible to save, view and delete completed and pending tasks. This project was created as a challenge for Rocketseat classes.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
        ],
        link: `https://marettialine.github.io/ignite-to-do-list/`,
        img: project5,
        type: 'desktop',
      },
      {
        title: `Ignite Timer`,
        description: `Development of a timer project to facilitate the use of the Pomodoro Technique. The created timers are stored and displayed in a table format, allowing the identification of completed, ongoing and canceled timers. This project was developed based on Rocketseat classes.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
        ],
        link: `https://marettialine-ignite-timer.vercel.app`,
        img: project6,
        type: 'desktop',
      },
      {
        title: `PoupApp`,
        description: `The PoupApp finance app, developed in Power Apps, allows you to control your income and expenses in a simple and practical way. Using an Excel spreadsheet as the database, it is possible to view the total balance, add new transactions, edit or delete existing records, ensuring efficient financial management that is updated in real time.`,
        technologies: [<Icons.PowerApps key="PowerApps" />],
        link: `https://marettialine.github.io/poupapp`,
        img: project7,
        type: 'mobile',
      },
    ],
    visit: 'Visit Page',
  },
  Technologies: {
    title: [`What are the `, `Technologies I use`],
  },
  Contact: {
    title: [``, `Get in Touch`, ` with me!`],
    form: {
      title: `Send your message to me below:`,
      name: `Full Name`,
      subject: `Subject`,
      message: `Write your message here`,
    },
  },
  Footer: `All rights reserved.`,
}
