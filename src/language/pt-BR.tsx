import { Icons } from '../components/Icons'

import project1 from '../assets/project_1.png'
import project2 from '../assets/project_2.png'
import project3 from '../assets/project_3.png'
import project4 from '../assets/project_4.png'
import project5 from '../assets/project_5.png'
import project6 from '../assets/project_6.png'

const ageCalculation = new Date().getFullYear() - 2002

export const ptBR = {
  Header: [
    `Início`,
    `Sobre Mim`,
    `Qualificações`,
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
  Qualifications: {
    title: [`Minhas `, `Qualificações`],
    subtitle: [`Formação Acadêmica`, `Experiências Profissionais`],
    education: {
      english: [
        `Curso de Inglês e Conversação em Inglês`,
        `CEDET – Centro para o Desenvolvimento do Potencial e Talento`,
        `2015 a 2018`,
      ],
      technician: [
        `Técnico em Informática integrado ao ensino médio`,
        `Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços de Caldas`,
        `2017 a 2019`,
      ],
      engineering: [
        `Bacharelado em Engenharia de Computação`,
        `Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços de Caldas`,
        `2020 a 2025`,
      ],
      rocketseat: [
        `Formação na Trilha Especialista em ReactJS e na Trilha Especialista em NodeJS`,
        `Rocketseat`,
        `2023 a 2024`,
      ],
    },
    works: {
      ciadi: [
        `Estágio como técnico em manutenção de computadores e professora de informática`,
        `CIADI - Centro Integrado de Atendimento Diurno ao Idoso`,
        `Out 2018 - Dez 2018 (2 meses)`,
      ],
      excelenciaTrainee: [
        `Estágio como desenvolvedora full stack`,
        `Excelência Consultoria e Educação`,
        `Fev 2019 - Maio 2019 (3 meses)`,
      ],
      excelencia: [
        `Desenvolvedora full stack (freelancer)`,
        `Excelência Consultoria e Educação`,
        `Jun 2019 - Atual (6 anos)`,
      ],
      arteDeCaderno: [
        `Bolsa do projeto de extensão Arte de Caderno`,
        `Instituto Federal de Educação, Ciência e Tecnologia – Campus Poços de Caldas`,
        `Set 2024 - Jan 2025 (6 meses)`,
      ],
    },
  },
  Projects: {
    title: [`Veja os `, `Projetos que criei`],
    list: [
      {
        title: `Consultoria Excelência`,
        description: `Desenvolvimento do site principal da empresa Consultoria Excelência, destacando informações cruciais sobre seus serviços como áreas de atuação, casos de sucesso, etc.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
          <Icons.Node key="Node" />,
        ],
        link: `https://consultoriaexcelencia.com.br/`,
        img: project1,
      },
      {
        title: `Power Portal`,
        description: `Criação de um site com uma coletânea de projetos em Power BI e vagas de emprego na área, enviadas diretamente pelos usuários. O site também inclui ferramentas para estilização de temas dos dashboards e apresentação em TVs, permitindo a definição de tempo e efeitos de transição dos painéis.`,
        technologies: [
          <Icons.HTML key="HTML" />,
          <Icons.JavaScript key="JavaScript" />,
          <Icons.PHP key="PHP" />,
        ],
        link: `https://powerportal.com.br/`,
        img: project2,
      },
      {
        title: `Consultoria Excelência - Blog`,
        description: `Elaboração de um blog para a Consultoria Excelência, permitindo a publicação regular de artigos, notícias e atualizações da empresa. Implementação de uma área de administração robusta, onde os administradores podem criar, editar e gerenciar postagens facilmente.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
          <Icons.Node key="Node" />,
        ],
        link: `https://consultoriaexcelencia.com.br/blog`,
        img: project3,
      },
      {
        title: `Ignite Feed`,
        description: `Desenvolvimento de um projeto que simula um feed de redes sociais sendo possível adicionar e excluir comentários e avaliar as publicações. Este projeto foi desenvolvido com base nas aulas da Rocketseat.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
        ],
        link: `https://marettialine.github.io/ignite-feed/`,
        img: project4,
      },
      {
        title: `Ignite To Do List`,
        description: `Criação de um projeto para gerenciamento de uma lista de tarefas com armazenamento de informações no Local Storage do navegador. Assim, é possível salvar, visualizar e excluir tarefas concluídas e pendentes. Este projeto foi criado como um desafio das aulas da Rocketseat.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
        ],
        link: `https://marettialine.github.io/ignite-to-do-list/`,
        img: project5,
      },
      {
        title: `Ignite Timer`,
        description: `Elaboração de um projeto de timer para facilitar o uso da Técnica Pomodoro. Os timers criados são armazenados e exibidos em formato de tabela, permitindo a identificação de timers concluídos, em andamento e cancelados. Este projeto foi desenvolvido com base nas aulas da Rocketseat.`,
        technologies: [
          <Icons.React key="React" />,
          <Icons.StyledComponents key="StyledComponents" />,
          <Icons.TypeScript key="TypeScript" />,
        ],
        link: `https://marettialine.github.io/ignite-timer/`,
        img: project6,
      },
    ],
    visit: 'Visitar Página',
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
