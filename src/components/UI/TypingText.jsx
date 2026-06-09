import React, { useState, useEffect, useRef } from 'react';
import { resumeData } from '../../data/resumeData';

const TypingText = () => {
  const { typingPhrases } = resumeData.hero;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentPhrase = typingPhrases[index];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    };

    const delay = isDeleting ? 50 : 100;
    timeoutRef.current = setTimeout(handleTyping, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, index, typingPhrases]);

  return (
    <span className="text-accent font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
