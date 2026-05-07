import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Layers, Server, Cpu } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const About = () => {
  const skillIcons = {
    "Programming Languages": Code,
    "Web Technologies": Server,
    "Web Frameworks": Layers,
    "Databases": Database,
    "Cloud Services": Cloud,
    "Technologies": Cpu
  };

  return (
    <section className="section-container bg-primary dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-textLight dark:text-slate-50">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-textLight dark:text-slate-50 mb-6">Professional Summary</h3>
            <p className="text-textDim dark:text-slate-400 leading-relaxed text-lg">
              {resumeData.summary}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-textLight dark:text-slate-50 mb-6">Technical Expertise</h3>
            <div className="space-y-4">
              {resumeData.skills.map((skillGroup, index) => {
                const IconComponent = skillIcons[skillGroup.category] || Code;
                return (
                  <div key={index} className="glass-card">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent size={20} className="text-accent" />
                      <h4 className="text-textLight dark:text-slate-50 font-semibold">{skillGroup.category}</h4>
                    </div>
                    <p className="text-textDim dark:text-slate-400 text-sm leading-relaxed">
                      {skillGroup.items.join(' • ')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
