import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, title, id, className = "" }) => {
  return (
    <section id={id} className={`section-container bg-primary dark:bg-slate-950 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <h2 className="text-4xl font-bold text-center mb-16 text-textLight dark:text-slate-50">
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
