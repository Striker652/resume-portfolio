import React from 'react';                                                                                                                                                                    
  import { motion } from 'framer-motion';                                                                                                                                                       
  import { Download } from 'lucide-react';                                                                                                                                                      
  import { resumeData } from '../../data/resumeData';                                                                                                                                           
                                                                                   
  const HomePage = () => {
    return (
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary dark:bg-slate-950">
        {/* Background Glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-medium mb-4 text-sm tracking-widest">HI, MY NAME IS</p>

            <h1 className="text-5xl md:text-7xl font-bold text-textLight dark:text-slate-50 mb-4 tracking-tight">
              {resumeData.personal.name}<span className="text-accent">.</span>
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-textDim dark:text-slate-400 mb-6">
              I build things for the web.
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
                href="/resume.pdf"
                download="Hemanth_Reddy_Nomula_Resume.pdf"
                className="btn-primary flex items-center gap-2 bg-accent/5"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default HomePage;