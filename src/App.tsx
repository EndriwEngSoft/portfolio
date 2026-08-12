/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#111827] dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-[#111827] dark:selection:text-zinc-100 transition-colors duration-300">
          <Navbar />
          <main>
            <FadeInSection>
              <Hero />
            </FadeInSection>
            <FadeInSection>
              <About />
            </FadeInSection>
            <FadeInSection>
              <Stack />
            </FadeInSection>
            <FadeInSection>
              <Projects />
            </FadeInSection>
            <FadeInSection>
              <Certifications />
            </FadeInSection>
          </main>
          <FadeInSection>
            <Footer />
          </FadeInSection>
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
