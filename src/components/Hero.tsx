import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, ArrowUpRight } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-36 pb-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
      <h2 className="text-[#ea580c] text-xs font-bold tracking-[0.2em] uppercase mb-4">
        {t.hero.role}
      </h2>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight max-w-4xl leading-[1.15] transition-colors">
        {t.hero.tagline}
      </h1>
      
      <div className="w-10 h-1 bg-[#ea580c] rounded-full mb-8"></div>
      
      <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg mb-12 leading-relaxed transition-colors">
        {t.hero.description}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <a
          href="mailto:endriwbento@gmail.com"
          className="bg-[#ea580c] text-white hover:bg-[#d04e0a] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-orange-500/20"
        >
          {t.hero.emailBtn}
        </a>
        <a href="/cv-en.pdf" download="Endriw_Bento_CV_EN.pdf" className="flex items-center gap-2 bg-transparent text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500">
          <Download className="w-4 h-4" />
          {t.hero.cvEnBtn}
        </a>
        <a href="/cv-pt.pdf" download="Endriw_Bento_CV_PT.pdf" className="flex items-center gap-2 bg-transparent text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500">
          <Download className="w-4 h-4" />
          {t.hero.cvPtBtn}
        </a>
      </div>
      
      <div className="flex items-center justify-center gap-8 text-sm font-semibold">
        <a
          href="https://github.com/EndriwEngSoft"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white pb-0.5 border-b border-zinc-300 dark:border-zinc-700 hover:border-[#ea580c] dark:hover:border-[#ea580c] transition-all"
        >
          GitHub <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/endriw-bento"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white pb-0.5 border-b border-zinc-300 dark:border-zinc-700 hover:border-[#ea580c] dark:hover:border-[#ea580c] transition-all"
        >
          LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
