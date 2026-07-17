import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypingAnimationOptions {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTypingAnimation = ({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const currentString = strings[stringIndex];

  const tick = useCallback(() => {
    if (isDeleting) {
      setDisplayText((prev) => prev.slice(0, -1));
    } else {
      setDisplayText((prev) => currentString.slice(0, prev.length + 1));
    }
  }, [isDeleting, currentString]);

  useEffect(() => {
    if (!isDeleting && displayText === currentString) {
      // Finished typing — pause then start deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      // Finished deleting — move to next string
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % strings.length);
    } else {
      // Continue typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeoutRef.current = setTimeout(tick, speed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentString, tick, typingSpeed, deletingSpeed, pauseDuration, strings.length]);

  return { displayText };
};
