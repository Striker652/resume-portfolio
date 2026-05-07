import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const Experience = () => {
  return (
    <section className="section-container bg-primary dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-textLight dark:text-slate-50">
          Work <span className="text-accent">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary dark:to-slate-950"></div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent border-4 border-primary dark:border-slate-950"></div>

                <div className="glass-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-textLight dark:text-slate-50 flex items-center gap-3">
                        <Briefcase size={24} className="text-accent" />
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium mt-1 flex items-center gap-2">
                        <Building2 size={16} /> {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-textDim dark:text-slate-400 text-sm">
                      <MapPin size={16} /> {exp.location} • {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-textDim dark:text-slate-400 leading-relaxed flex items-start gap-3">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
