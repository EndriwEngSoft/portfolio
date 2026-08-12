import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Calendar, ArrowUpRight } from 'lucide-react';

export function Certifications() {
  const { t } = useLanguage();

  const certs = [
    {
      id: 1,
      title: 'Formação Completa em Java',
      issuer: 'Udemy / Nélio Alves',
      dateKey: 'javaDate',
      status: 'completed',
      url: 'https://ude.my/UC-8553c0b3-a718-4212-b176-baf5ac058f09'
    },
    {
      id: 2,
      title: 'Testes com JUnit 5, Mockito e Spring Boot',
      issuer: 'Udemy',
      dateKey: 'junitDate',
      status: 'completed',
      url: 'https://www.udemy.com/certificate/UC-3b4fcf85-efef-44fe-bca5-daa8a0ee3885/'
    },
    {
      id: 3,
      title: 'Docker para Desenvolvedores',
      issuer: 'Matheus Battisti',
      dateKey: 'dockerDate',
      status: 'completed',
      url: 'https://www.udemy.com/certificate/UC-e16c2fb7-9e22-40bb-8dde-3350ae539252/'
    }
  ];

  return (
    <section id="certifications" className="py-20 max-w-4xl mx-auto px-6 transition-colors">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t.certifications.title}</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert) => (
          <a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-600 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-all duration-300 cursor-pointer relative shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl flex items-center justify-center text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-[#ea580c] dark:group-hover:text-[#ea580c] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight group-hover:text-[#ea580c] dark:group-hover:text-white transition-colors">{cert.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">{cert.issuer}</p>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-950 px-3 py-2 rounded-lg w-max border border-zinc-200 dark:border-zinc-800/80 transition-colors">
              <Calendar className="w-3.5 h-3.5" />
              {cert.status === 'progress' ? t.certifications.inProgress : t.certifications[cert.dateKey as keyof typeof t.certifications]}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
