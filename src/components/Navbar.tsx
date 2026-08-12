import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg cursor-pointer" onClick={() => scrollTo('top')}>
          endriw.dev
        </span>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            <li>
              <button onClick={() => scrollTo('about')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t.nav.about}
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('projects')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t.nav.projects}
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('certifications')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                {t.nav.certifications}
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle dark theme"
              title="Alternar tema claro/escuro"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-90" />
              )}
            </button>
            
            <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full p-1 shrink-0">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'pt' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm dark:shadow-none' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'en' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm dark:shadow-none' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
