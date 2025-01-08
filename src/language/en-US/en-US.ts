const ageCalculation = new Date().getFullYear() - 2002

export const enUS = {
  Header: [
    `Home`,
    `About Me`,
    `Education`,
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
      ` and I'm ${ageCalculation} years old! I was born in Poços de Caldas but I went to live in Italy when I was 3 years old, returning to Brazil when I was 11 years old. `,
      `I'm a programmer`,
      ` since I was 14 years old, `,
      `I fell in love with programming`,
      ` and since then I have been increasingly deepening my knowledge in the area. I went to high school along with technical education in IT and currently `,
      `I'm a Computer Engineering student`,
      `, both courses being taken at IFSULDEMINAS - Campus Poços de Caldas.`,
    ],
    numbers: [
      `years of study and experience`,
      `studied technologies`,
      `course and event certificates`,
    ],
  },
  Education: {
    title: ['My ', 'Education'],
    list: {
      english: [
        'English Course and English Conversation',
        'CEDET – Center for the Development of Potential and Talent',
      ],
      technician: [
        'Technical Computing Course Integrated with High School',
        'Federal Institute of Education, Science, and Technology – Poços de Caldas Campus',
      ],
      engineering: [
        'Bachelor’s Degree in Computer Engineering',
        'Federal Institute of Education, Science, and Technology – Poços de Caldas Campus',
      ],
      rocketseat: [
        'Training in the ReactJS Specialist Track and the NodeJS Specialist Track',
        'Rocketseat',
      ],
    },
  },
  Technologies: {
    title: [`What are the `, `Technologies I use`],
  },
  Contact: {
    title: [`Get in `, `Touch`, ` with me!`],
    form: {
      title: `Send your message to me below:`,
      name: `Full Name`,
      subject: `Subject`,
      message: `Write your message here`,
    },
  },
  Footer: `All rights reserved.`,
}
