import React, { memo } from 'react';
import { motion } from 'framer-motion';

const SkillBadge = memo(({ skill, index, delayStep = 0.03 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * delayStep,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium hover:bg-accent/20 transition-colors cursor-default"
    >
      {skill}
    </motion.span>
  );
});

SkillBadge.displayName = 'SkillBadge';

export default SkillBadge;
