import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import TypingText from '../UI/TypingText';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 12, stiffness: 200 }
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.2, duration: 0.8, ease: "easeOut" }
  },
};

const HomePage = () => {
  const name = resumeData.personal.name;
  const letters = name.split("");

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 dot-grid pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            document.documentElement.classList.contains('dark')
            ? 'rgba(129, 140, 248, 0.15)'
            : 'rgba(79, 70, 229, 0.1)'
          } 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 section-container">
        <div className="flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4 text-sm tracking-widest"
          >
            HI, MY NAME IS
          </motion.p>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-textLight dark:text-slate-50 mb-4 tracking-tight flex flex-wrap"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-accent"
            >
              .
            </motion.span>
          </motion.h1>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-textDim dark:text-slate-400 mb-6">
              I build <TypingText />
            </h2>

            <p className="text-textDim dark:text-slate-400 text-lg max-w-2xl leading-relaxed mb-12">
              {resumeData.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                Check out my work
              </a>
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a
                href={`${import.meta.env.BASE_URL}${resumeData.hero.resumeFilename}`}
                download={resumeData.hero.resumeFilename}
                className="btn-primary flex items-center gap-2 bg-accent/5"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
