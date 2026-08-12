import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6 transition-colors">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t.about.title}</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1"></div>
      </div>
      
      <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-8 md:p-10 text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-6 shadow-sm dark:shadow-none transition-colors">
        <p dangerouslySetInnerHTML={{ __html: t.about.description }}></p>
        
        <p className="font-medium text-zinc-800 dark:text-zinc-200" dangerouslySetInnerHTML={{ __html: t.about.internship }}></p>
      </div>
    </section>
  );
}
