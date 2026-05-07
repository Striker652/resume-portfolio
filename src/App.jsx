import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import HomePage from './components/Home/HomePage';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="flex-grow pt-16">
        <HomePage />
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="education"><Education /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
