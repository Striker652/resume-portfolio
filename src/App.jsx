import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar, Footer } from './components/Layout';
import GlobalBackground from './components/Background/GlobalBackground';
import HomePage from './components/Home/HomePage';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certification from './components/Certification/Certification';
import ChatbotContainer from './components/Chatbot/ChatbotContainer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <div className="min-h-screen flex flex-col relative">
      <GlobalBackground />
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]" />
      <div className="relative z-10 flex flex-col h-full">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-grow pt-16">
          <HomePage />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Certification />
        </main>
        <Footer />
      </div>
      <ChatbotContainer />
    </div>
  );
}

export default App;
