import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Star } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'finance-sync',
      title: 'FinanceSync API',
      descriptionKey: 'financeSyncDesc',
      stars: 101,
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Swagger', 'JUnit 5', 'Mockito', 'Docker'],
      link: 'https://github.com/EndriwEngSoft/financesync-api'
    },
    {
      id: 'taskflow',
      title: 'TaskFlow API',
      descriptionKey: 'taskFlowDesc',
      stars: null,
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
      link: 'https://github.com/EndriwEngSoft/taskflow-api'
    },
    {
      id: 'lifesync',
      title: 'LifeSync API',
      descriptionKey: 'lifeSyncDesc',
      stars: 'inDev',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Arquitetura Limpa'],
      link: 'https://github.com/EndriwEngSoft/lifesync-api'
    },
    {
      id: 'chess',
      title: 'Sistema de Xadrez',
      descriptionKey: 'chessDesc',
      stars: null,
      tags: ['Java', 'POO', 'Herança', 'Polimorfismo'],
      link: 'https://github.com/EndriwEngSoft/chess-system'
    },
    {
      id: 'ws-jpa',
      title: 'Workshop Spring Boot + JPA',
      descriptionKey: 'wsJpaDesc',
      stars: null,
      tags: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'PostgreSQL'],
      link: 'https://github.com/EndriwEngSoft/workshop-springboot4-jpa'
    },
    {
      id: 'ws-mongo',
      title: 'Workshop Spring Boot + MongoDB',
      descriptionKey: 'wsMongoDesc',
      stars: null,
      tags: ['Java', 'Spring Boot', 'MongoDB'],
      link: 'https://github.com/EndriwEngSoft/workshop-springboot4-mongodb'
    }
  ];

    const getTagColor = (tag: string) => {
      const colors: Record<string, string> = {
        'Java': 'bg-orange-500 text-white border-orange-600',
        'Spring Boot': 'bg-green-500 text-white border-green-600',
        'PostgreSQL': 'bg-blue-500 text-white border-blue-600',
        'MongoDB': 'bg-green-400 text-zinc-900 border-green-500',
        'Docker': 'bg-blue-400 text-white border-blue-500',
        'JWT': 'bg-fuchsia-500 text-white border-fuchsia-600',
        'Spring Security': 'bg-green-600 text-white border-green-700',
        'Swagger': 'bg-emerald-500 text-white border-emerald-600',
        'JUnit 5': 'bg-red-500 text-white border-red-600',
        'Mockito': 'bg-red-400 text-white border-red-500',
        'JPA': 'bg-amber-600 text-white border-amber-700',
        'Hibernate': 'bg-amber-500 text-white border-amber-600',
        'Arquitetura Limpa': 'bg-purple-500 text-white border-purple-600',
        'POO': 'bg-indigo-500 text-white border-indigo-600',
        'Herança': 'bg-indigo-400 text-white border-indigo-500',
        'Polimorfismo': 'bg-indigo-400 text-white border-indigo-500'
      };
      return colors[tag] || 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700/50';
    };

  return (
    <section id="projects" className="py-20 max-w-4xl mx-auto px-6 transition-colors">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t.projects.title}</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-zinc-900/50 transition-all duration-300 flex flex-col shadow-sm dark:shadow-none">
            <div className="h-40 bg-zinc-50 dark:bg-zinc-800/50 w-full flex items-center justify-center p-6 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
              <div className="w-full h-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700/30 p-4 font-mono text-xs text-zinc-400 dark:text-zinc-500 overflow-hidden relative transition-colors">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <p><span className="text-pink-600 dark:text-pink-400">@RestController</span></p>
                <p><span className="text-pink-600 dark:text-pink-400">public class</span> <span className="text-blue-600 dark:text-blue-300">ApiController</span> {'{'}</p>
                <p className="ml-4">...</p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/90 dark:to-zinc-900/90"></div>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                {project.stars !== null && (
                  <div className="flex items-center gap-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-700/50 transition-colors">
                    <Star className="w-3.5 h-3.5 fill-yellow-500/20" />
                    {project.stars === 'inDev' ? <span className="text-zinc-600 dark:text-zinc-300">{t.projects.inDevelopment}</span> : project.stars}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded border transition-colors ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-1">
                {t.projects.items[project.descriptionKey as keyof typeof t.projects.items]}
              </p>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Github className="w-4 h-4" />
                {t.projects.viewGithub}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
