import React, { useState, useEffect, useRef } from 'react';
import { resumeData } from '../../data/resumeData';

const TypingText = () => {
  const { typingPhrases } = resumeData.hero;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = typingPhrases[index];

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

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    // Note: Using a fixed value for the outer timer,
    // but I'll move the dynamic speed inside handleTyping by
    // scheduling the NEXT call at the end of the function.

    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, index]);

  return (
    <span className="text-accent font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
