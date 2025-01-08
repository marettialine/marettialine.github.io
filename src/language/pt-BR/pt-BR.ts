const ageCalculation = new Date().getFullYear() - 2002

export const ptBR = {
  Header: [
    `Início`,
    `Sobre Mim`,
    `Formação`,
    `Projetos`,
    `Tecnologias`,
    `Contato`,
    `Currículo`,
  ],
  Home: {
    title: `Hello! Sou a `,
    description: `Sou estudante de Engenharia de Computação, com forte interesse em tecnologia e inovação. Como desenvolvedora web full stack, combino habilidades em front-end e back-end para criar soluções completas e eficientes. Minha trajetória é caracterizada pela busca contínua por conhecimento e pela aplicação prática de conceitos teóricos, sempre focada na entrega de projetos de alta qualidade.`,
  },
  About: {
    title: [`Conheça mais `, `sobre mim`],
    description: [
      `Me chamo `,
      `Aline`,
      ` e tenho ${ageCalculation} anos! Eu nasci em Poços de Caldas mas fui morar na Itália com 3 anos, voltando ao Brasil com 11 anos. `,
      `Sou programadora`,
      ` desde os meus 14 anos de idade, `,
      `me apaixonei pela programação`,
      ` e venho desde então aprofundando cada vez mais os meus conhecimentos na área. Fiz ensino médio junto ao ensino técnico em informática e atualmente `,
      `sou aluna de Engenharia de Computação`,
      `, sendo os dois cursos feitos no IFSULDEMINAS - Campus Poços de Caldas.`,
    ],
    numbers: [
      `anos de estudo e experiência`,
      `tecnologias estudadas`,
      `certificados de cursos e eventos`,
    ],
  },
  Education: {
    title: [`Minha `, `Formação Acadêmica`],
    list: {
      english: [
        `Curso de Inglês e Conversação em Inglês`,
        `CEDET – Centro para o Desenvolvimento do Potencial e Talento`,
      ],
      technician: [
        `Técnico em Informática integrado ao ensino médio`,
        `Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços de Caldas`,
      ],
      engineering: [
        `Bacharelado em Engenharia de Computação`,
        `Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços de Caldas`,
      ],
      rocketseat: [
        `Formação na Trilha Especialista em ReactJS e na Trilha Especialista em NodeJS`,
        `Rocketseat`,
      ],
    },
  },
  Technologies: {
    title: [`Quais as `, `Tecnologias que uso`],
  },
  Contact: {
    title: [`Entre em `, `Contato`, ` comigo!`],
    form: {
      title: `Mande sua mensagem pra mim abaixo:`,
      name: `Nome Completo`,
      subject: `Assunto`,
      message: `Escreva sua mensagem aqui`,
    },
  },
  Footer: `Todos os direitos reservados.`,
}
