import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Sun, Moon } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Navbar = ({ toggleTheme, theme }) => {
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Education'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-slate-800 dark:border-slate-700 dark:bg-slate-900/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-accent">HRN.</div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-textDim hover:text-accent transition-colors text-sm font-medium dark:text-slate-400 dark:hover:text-accent"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary dark:bg-slate-800 text-textLight dark:text-slate-200 hover:text-accent transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-slate-200 dark:bg-slate-900 dark:border-slate-800">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-textDim text-sm dark:text-slate-400">
        © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
      </div>
      <div className="flex space-x-6">
        <a href="mailto:hemanthreddy620@gmail.com" className="text-textDim hover:text-accent transition-colors dark:text-slate-400">
          <Mail size={20} />
        </a>
        <a href="#" className="text-textDim hover:text-accent transition-colors dark:text-slate-400">
          <Github size={20} />
        </a>
        <a href="#" className="text-textDim hover:text-accent transition-colors dark:text-slate-400">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export { Navbar, Footer };
