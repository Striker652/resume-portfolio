import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

const MessageBubble = ({ role, content }) => {
  const isBot = role === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, x: isBot ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} gap-2`}
    >
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-1">
          <Bot size={16} />
        </div>
      )}

      <div
        className={`max-w-[80%] p-3 rounded-2xl text-sm break-words shadow-sm ${
          isBot
            ? 'bg-primary/20 text-textLight dark:bg-slate-800 dark:text-slate-200 rounded-tl-none'
            : 'bg-accent text-white rounded-tr-none'
        }`}
      >
        {content}
      </div>

      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mt-1">
          <User size={16} />
        </div>
      )}
    </motion.div>
  );
};

export default MessageBubble;
