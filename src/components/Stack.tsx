import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Stack() {
  const { t } = useLanguage();

  const technologies = [
    { name: 'Java', color: 'bg-orange-500' },
    { name: 'Spring Boot', color: 'bg-green-500' },
    { name: 'Spring Security', color: 'bg-green-600' },
    { name: 'JPA/Hibernate', color: 'bg-amber-600' },
    { name: 'PostgreSQL', color: 'bg-blue-500' },
    { name: 'MongoDB', color: 'bg-green-400' },
    { name: 'JWT', color: 'bg-fuchsia-500' },
    { name: 'REST APIs', color: 'bg-blue-300' },
    { name: 'Bean Validation', color: 'bg-red-400' },
    { name: 'Swagger/OpenAPI', color: 'bg-green-500' },
    { name: 'Maven', color: 'bg-red-600' },
    { name: 'Docker', color: 'bg-blue-400' },
    { name: 'Git/GitHub', color: 'bg-zinc-800 dark:bg-zinc-100' },
    { name: 'JUnit 5', color: 'bg-red-500' },
    { name: 'Mockito', color: 'bg-green-300' },
    { name: 'Lombok', color: 'bg-red-400' },
    { name: 'Testes Automatizados', color: 'bg-indigo-500' },
    { name: 'Clean Architecture', color: 'bg-purple-500' },
    { name: 'Feature Packages', color: 'bg-sky-500' },
  ];

  return (
    <section id="stack" className="py-20 max-w-4xl mx-auto px-6 transition-colors">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t.stack.title}</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
      </div>
      
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
        {t.stack.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-zinc-900/50 transition-all duration-300 shadow-sm dark:shadow-none cursor-default">
            <div className={`w-2.5 h-2.5 rounded-full ${tech.color}`}></div>
            <span className="font-medium text-sm text-zinc-800 dark:text-zinc-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
