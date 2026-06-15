import { useState, useCallback } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

const WELCOME_MESSAGE = {
  role: 'bot',
  content: "Hi! I'm an AI assistant for this portfolio. Ask me anything about skills, projects, or experience!"
};

export function useChat() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessageStream = useCallback(async (text) => {
    if (!text.trim()) return;
    setError(null);
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    // Add an empty bot message that will be filled token by token
    setMessages(prev => [...prev, { role: 'bot', content: '' }]);

    try {
      const res = await fetch(`${API_BASE}/ask/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        // Parse SSE lines: "data: <token>\n\n"
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '));
        for (const line of lines) {
          const token = line.replace('data: ', '');
          if (token === '[DONE]') break;
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: 'bot',
              content: updated[updated.length - 1].content + token,
            };
            return updated;
          });
        }
      }
    } catch (err) {
      setError("Stream interrupted.");
      setMessages(prev => {
        const updated = [...prev];
        if (updated.length > 0 && updated[updated.length - 1].role === 'bot') {
          updated[updated.length - 1].content = "Sorry, the response was interrupted.";
        } else {
          updated.push({ role: 'bot', content: "Sorry, the response was interrupted." });
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { messages, isLoading, error, sendMessage: sendMessageStream };
}
