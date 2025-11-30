import { Project, SocialLink, TechItem } from './types';

export const HERO_DATA = {
  greeting: "Olá, eu sou Antonio Silva 👋",
  role: "Desenvolvedor Full Stack (Backend & Frontend)",
  slogan: "Construindo Soluções Web Robustas com Java e Spring Boot. Sempre em busca de novos desafios e código limpo.",
  location: "Brasil",
};

export const ABOUT_DATA = {
  text: "Com especialização em Java e o ecossistema Spring Boot, desenvolvo soluções de Backend escaláveis e de alta performance. Minha experiência também abrange o Frontend com HTML, CSS e JavaScript puro, garantindo a entrega de aplicações Web completas e com foco na experiência do usuário (UX/UI)."
};

export const TECH_STACK: TechItem[] = [
  { name: "Java", iconName: "Coffee", color: "#b07219" },
  { name: "Spring Boot", iconName: "Leaf", color: "#6db33f" },
  { name: "SQL / MySQL", iconName: "Database", color: "#00758f" },
  { name: "JavaScript", iconName: "FileJson", color: "#f1e05a" },
  { name: "HTML5", iconName: "Globe", color: "#e34c26" },
  { name: "CSS3", iconName: "Palette", color: "#563d7c" },
];

export const PROJECTS: Project[] = [
  {
    title: "CadastroDeNinjas",
    description: "Uma API RESTful completa para gerenciamento e cadastro de Ninjas, desenvolvida utilizando todo o poder do ecossistema Spring Boot.",
    language: "Java",
    languageColor: "#b07219",
    visibility: "Public",
    link: "https://github.com/antoniosilvaa/CadastroDeNinjas"
  },
  {
    title: "Projeto Java",
    description: "Repositório central da minha trajetória de aprendizado, contendo implementações de algoritmos, estruturas de dados e integrações com SQL.",
    language: "Java",
    languageColor: "#b07219",
    visibility: "Public",
    link: "https://github.com/antoniosilvaa/Projeto-Java"
  },
  {
    title: "Portfólio_Web",
    description: "Aplicação Full Stack contendo um portfólio interativo e um sistema CRUD funcional, demonstrando habilidades em PHP e MySQL.",
    language: "HTML",
    languageColor: "#e34c26",
    stars: 1,
    visibility: "Public",
    link: "https://github.com/antoniosilvaa/Portfolio_Web"
  },
  {
    title: "ProjetoIndicadorDeLivros",
    description: "Aplicação Frontend focada em UI/UX para recomendação de livros, desenvolvida com HTML semântico, CSS moderno e JavaScript.",
    language: "CSS",
    languageColor: "#563d7c",
    visibility: "Public",
    link: "https://github.com/antoniosilvaa/ProjetoIndicadorDeLivros"
  },
  {
    title: "Estudos_Java",
    description: "Coleção de estudos avançados e laboratórios de código focados na linguagem Java.",
    language: "Java",
    languageColor: "#b07219",
    visibility: "Public",
    link: "https://github.com/antoniosilvaa/Estudos_Java"
  },
  {
    title: "Aplicativo Eventos",
    description: "Sistema de gestão de eventos acadêmicos/corporativos.",
    language: "Java",
    languageColor: "#b07219",
    visibility: "Public",
    link: "https://github.com/antoniosilvaa/Aplicativo-Eventos"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    username: "antoniosilvaa",
    url: "https://github.com/antoniosilvaa",
    icon: "github"
  },
  {
    platform: "Instagram",
    username: "@Antonio7sz",
    url: "https://instagram.com/Antonio7sz",
    icon: "instagram"
  },
  {
    platform: "Gmail",
    username: "antoniogondim109@gmail.com",
    url: "mailto:antoniogondim109@gmail.com",
    icon: "mail"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Você é o assistente virtual do portfólio de Antonio Silva.
Sua tarefa é responder perguntas sobre Antonio de forma profissional, amigável e concisa.
Responda sempre em Português do Brasil.

Aqui estão os dados sobre Antonio:
- Nome: Antonio Silva
- Perfil: Desenvolvedor Full Stack (Backend & Frontend).
- Foco Técnico: Java, Spring Boot, Construção de APIs robustas e Soluções Web.
- Biografia Resumida: Especialista em Java/Spring Boot para backend escalável e HTML/CSS/JS para interfaces web. Sempre em busca de código limpo.
- Tech Stack: Java, Spring Boot, MySQL/SQL, HTML, CSS, JavaScript, PHP.
- Projetos Principais:
  - CadastroDeNinjas (API Spring Boot)
  - Portfólio Web (CRUD Full Stack com PHP/MySQL)
  - Projeto Java (Algoritmos e SQL)
- Contato: antoniogondim109@gmail.com, Instagram @Antonio7sz.

Se perguntarem sobre algo que não está nessa lista, diga que Antonio está sempre expandindo seus horizontes tecnológicos.
`;