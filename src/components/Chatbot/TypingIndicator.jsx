import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  const dots = [0, 1, 2];

  return (
    <div className="flex justify-start gap-2">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-1">
        <Bot size={16} />
      </div>
      <div className="max-w-[80%] p-3 rounded-2xl rounded-tl-none bg-primary/20 dark:bg-slate-800 flex items-center gap-1 px-4">
        {dots.map((i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.15,
            }}
            className="w-1.5 h-1.5 bg-textDim dark:bg-slate-400 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default TypingIndicator;
