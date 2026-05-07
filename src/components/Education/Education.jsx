import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const Education = () => {
  return (
    <section className="section-container bg-primary dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-textLight dark:text-slate-50">
          Education <span className="text-accent">& Qualifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card text-center"
            >
              <GraduationCap size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-textLight dark:text-slate-50 mb-2">
                {edu.degree}
              </h3>
              <p className="text-textDim dark:text-slate-400 mb-1">{edu.university}</p>
              <p className="text-accent font-medium text-sm">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
