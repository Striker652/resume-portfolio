import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Globe, Database } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const Projects = () => {
  const projectIcons = [Cpu, Globe, Database];

  return (
    <section className="section-container bg-primary dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-textLight dark:text-slate-50">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <IconComponent size={24} className="text-accent" />
                    <h3 className="text-xl font-bold text-textLight dark:text-slate-50">{project.name}</h3>
                  </div>
                  <ExternalLink size={20} className="text-textDim dark:text-slate-400 hover:text-accent cursor-pointer" />
                </div>

                <div className="text-xs text-accent/80 font-medium mb-3">
                  {project.techStack}
                </div>

                <p className="text-textDim dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-textDim dark:text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
