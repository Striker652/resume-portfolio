import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, index = 0, delayStep = 0.1, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * delayStep }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
