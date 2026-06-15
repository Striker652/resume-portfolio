import React, { useState, useRef } from 'react';
import { SendHorizontal } from 'lucide-react';

const ChatInput = ({ onSend, isLoading }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!text.trim() || isLoading) return;
    onSend(text);
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div className="flex items-end gap-2">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        rows={1}
        disabled={isLoading}
        className="flex-grow resize-none rounded-xl p-3 text-sm bg-slate-100 dark:bg-slate-800 text-textLight dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all max-h-32"
      />
      <button
        onClick={handleSend}
        disabled={!text.trim() || isLoading}
        className="p-3 rounded-xl bg-accent text-white disabled:opacity-50 disabled:grayscale transition-all hover:bg-accent/80"
      >
        <SendHorizontal size={18} />
      </button>
    </div>
  );
};

export default ChatInput;
