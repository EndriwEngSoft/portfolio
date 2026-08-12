import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pt-32 pb-12 mt-12 bg-zinc-100/50 dark:bg-zinc-950/50 transition-colors">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
          {t.footer.title}
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mb-12 leading-relaxed">
          {t.footer.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full">
          <a
            href="mailto:endriwbento@gmail.com"
            className="bg-[#ea580c] text-white hover:bg-[#d04e0a] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-orange-500/20 w-full sm:w-auto"
          >
            {t.footer.emailBtn}
          </a>
          <a
            href="https://www.linkedin.com/in/endriw-bento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-8 py-3 rounded-full font-medium transition-colors border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 w-full sm:w-auto"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EndriwEngSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-8 py-3 rounded-full font-medium transition-colors border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 w-full sm:w-auto"
          >
            GitHub
          </a>
        </div>
        
        <p className="text-zinc-500 text-xs tracking-widest uppercase font-medium">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
