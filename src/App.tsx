import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { ScrollProgress } from './components/ScrollProgress';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Statistics } from './components/Statistics';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <Navbar isDark={isDark} toggleDarkMode={() => setIsDark(!isDark)} />

      {/* Main Content */}
      <main>
        <Hero />
   
      </main>

 
    </div>
  );
}

export default App;