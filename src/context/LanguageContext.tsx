import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  nav: {
    about: string;
    stack: string;
    projects: string;
    certifications: string;
  };
  hero: {
    role: string;
    tagline: string;
    description: string;
    emailBtn: string;
    cvPtBtn: string;
    cvEnBtn: string;
  };
  about: {
    title: string;
    description: string;
    internship: string;
  };
  projects: {
    title: string;
    viewGithub: string;
    inDevelopment: string;
    items: {
      financeSyncDesc: string;
      taskFlowDesc: string;
      lifeSyncDesc: string;
      chessDesc: string;
      wsJpaDesc: string;
      wsMongoDesc: string;
    };
  };
  stack: {
    title: string;
    description: string;
  };
  certifications: {
    title: string;
    inProgress: string;
    javaDate: string;
    junitDate: string;
    dockerDate: string;
  };
  footer: {
    title: string;
    subtitle: string;
    emailBtn: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      stack: 'Stack',
      projects: 'Projetos',
      certifications: 'Certificações',
    },
    hero: {
      role: 'ENGENHEIRO DE SOFTWARE · BACKEND JAVA',
      tagline: '“Construindo APIs robustas e escaláveis com Java e Spring Boot.”',
      description: 'Estudante de Engenharia de Software focado no ecossistema Java. Construo aplicações backend escaláveis, seguras e eficientes, aplicando boas práticas de arquitetura e código limpo.',
      emailBtn: 'Enviar e-mail',
      cvPtBtn: 'Currículo · PT',
      cvEnBtn: 'Currículo · EN',
    },
    about: {
      title: 'Sobre mim',
      description: 'Sou estudante de <mark>Engenharia de Software</mark> na <mark>Estácio</mark> (2024-2028) com foco em desenvolvimento backend no ecossistema Java. Possuo sólida compreensão de Programação Orientada a Objetos, estruturas de dados e arquitetura de software. Tenho experiência prática na construção de APIs RESTful escaláveis com <mark>Spring Boot</mark>, <mark>Spring Security</mark> e <mark>JWT</mark>, além de modelagem e integração com bancos de dados relacionais (<mark>PostgreSQL</mark>) e NoSQL (<mark>MongoDB</mark>). Aplico ativamente boas práticas como princípios SOLID, Clean Architecture, e testes automatizados (JUnit 5, Mockito).',
      internship: 'Atualmente buscando minha primeira oportunidade como <mark>desenvolvedor backend Java júnior</mark>.',
    },
    projects: {
      title: 'Projetos',
      viewGithub: 'Ver no GitHub →',
      inDevelopment: 'Em desenvolvimento',
      items: {
        financeSyncDesc: 'API RESTful para controle financeiro pessoal. Implementada com Spring Boot e Spring Security (JWT). Modelagem avançada, integração com PostgreSQL e 101 testes automatizados (JUnit 5, Mockito). Containerizada com Docker.',
        taskFlowDesc: 'API REST para gerenciamento de tarefas com foco em segurança. Possui autenticação stateless via JWT, controle de acesso baseado em perfis (RBAC), tratamento global de exceções e persistência em PostgreSQL.',
        lifeSyncDesc: 'Sistema inteligente de organização pessoal com tarefas, hábitos e gamificação. Desenvolvido com padrões de Clean Architecture, isolamento de regras de negócio e mapeamento objeto-relacional otimizado.',
        chessDesc: 'Sistema de xadrez completo em Java puro aplicando conceitos avançados de POO: herança, polimorfismo, encapsulamento, tratamento de exceções customizadas e design patterns para estado do tabuleiro.',
        wsJpaDesc: 'API REST com arquitetura em camadas implementando CRUD completo. Utiliza mapeamento objeto-relacional (ORM) via Hibernate/JPA, relacionamentos complexos de entidades e persistência com PostgreSQL.',
        wsMongoDesc: 'API REST focada no ecossistema NoSQL com MongoDB. Aplica conceitos avançados de modelagem de documentos, relacionamentos entre coleções e consultas customizadas utilizando Spring Data.',
      }
    },
    stack: {
      title: 'Tecnologias',
      description: 'Ferramentas e tecnologias que utilizo no dia a dia',
    },
    certifications: {
      title: 'Certificações',
      inProgress: 'Em andamento',
      javaDate: 'Fevereiro/2026',
      junitDate: 'Abril/2026',
      dockerDate: 'Junho/2026',
    },
    footer: {
      title: 'Vamos conversar.',
      subtitle: 'Aberto a novas oportunidades de estágio, parcerias ou apenas uma boa conversa sobre tecnologia.',
      emailBtn: 'Enviar e-mail',
      copyright: '© 2026 Endriw Bento'
    }
  },
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      certifications: 'Certifications',
    },
    hero: {
      role: 'SOFTWARE ENGINEER · BACKEND JAVA',
      tagline: '“Building robust and scalable APIs with Java and Spring Boot.”',
      description: 'Software Engineering student focused on the Java ecosystem. I build scalable, secure, and efficient backend applications, applying architecture best practices and clean code.',
      emailBtn: 'Send e-mail',
      cvPtBtn: 'Resume · PT',
      cvEnBtn: 'Resume · EN',
    },
    about: {
      title: 'About me',
      description: '<mark>Software Engineering</mark> student at <mark>Estácio</mark> (2024-2028) focused on backend development using the Java ecosystem. I have a solid understanding of Object-Oriented Programming, data structures, and software architecture. I possess practical experience in building scalable RESTful APIs with <mark>Spring Boot</mark>, <mark>Spring Security</mark>, and <mark>JWT</mark>, alongside data modeling and integration with relational (<mark>PostgreSQL</mark>) and NoSQL (<mark>MongoDB</mark>) databases. I actively apply best practices such as SOLID principles, Clean Architecture, and automated testing (JUnit 5, Mockito).',
      internship: 'Currently seeking my first opportunity as a <mark>junior Java backend developer</mark>.',
    },
    projects: {
      title: 'Projects',
      viewGithub: 'View on GitHub →',
      inDevelopment: 'In Development',
      items: {
        financeSyncDesc: 'RESTful API for personal financial control. Implemented with Spring Boot and Spring Security (JWT). Advanced data modeling, PostgreSQL integration, and 101 automated tests (JUnit 5, Mockito). Containerized with Docker.',
        taskFlowDesc: 'REST API for task management focused on security. Features stateless authentication via JWT, role-based access control (RBAC), global exception handling, and persistence in PostgreSQL.',
        lifeSyncDesc: 'Smart personal organization system with tasks, habits, and gamification. Developed using Clean Architecture patterns, business rule isolation, and optimized object-relational mapping.',
        chessDesc: 'Complete chess system in pure Java applying advanced OOP concepts: inheritance, polymorphism, encapsulation, custom exception handling, and design patterns for board state.',
        wsJpaDesc: 'Layered architecture REST API implementing a complete CRUD. Utilizes object-relational mapping (ORM) via Hibernate/JPA, complex entity relationships, and PostgreSQL persistence.',
        wsMongoDesc: 'REST API focused on the NoSQL ecosystem using MongoDB. Applies advanced document modeling concepts, collection relationships, and custom queries using Spring Data.',
      }
    },
    stack: {
      title: 'Technologies',
      description: 'Tools and technologies I use on a daily basis',
    },
    certifications: {
      title: 'Certifications',
      inProgress: 'In progress',
      javaDate: 'February/2026',
      junitDate: 'April/2026',
      dockerDate: 'June/2026',
    },
    footer: {
      title: 'Let\'s talk.',
      subtitle: 'Open to new internship opportunities, partnerships, or just a good chat about technology.',
      emailBtn: 'Send e-mail',
      copyright: '© 2026 Endriw Bento'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
