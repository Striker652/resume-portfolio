import React, { memo } from 'react';
import { motion } from 'framer-motion';

const GlassCard = memo(({ children, className = "", whileHover = {} }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 250, damping: 25 }
      }}
      className={`glass-card hover:border-accent/50 transition-colors duration-500 group transform-gpu will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;
