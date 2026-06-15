import React, { useRef, useEffect } from 'react';
import { Bot, X } from 'lucide-react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import GlassCard from '../UI/GlassCard';

const ChatWindow = ({ isOpen, onClose, messages = [], isLoading, sendMessage }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <GlassCard className="flex flex-col h-[500px] overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/20 text-accent">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Portfolio AI</h3>
            <p className="text-xs text-textDim dark:text-slate-400">Ask me about Hemanth</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          (msg.role === 'bot' && !msg.content) ? null : <MessageBubble key={idx} role={msg.role} content={msg.content} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <ChatInput
          onSend={sendMessage}
          isLoading={isLoading}
        />
      </div>
    </GlassCard>
  );
};

export default ChatWindow;
