import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  sentences: string[];
  typingSpeed?: number; // Optional typing speed
  pauseDuration?: number; // Optional pause duration after a sentence
  className?: string; // Optional className for styling
}

const TypingText: React.FC<TypingTextProps> = ({
  sentences,
  typingSpeed = 100,
  pauseDuration = 2000,
  className,
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (index < sentences[currentSentenceIndex].length) {
        setDisplayedText((prev) => prev + sentences[currentSentenceIndex][index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentSentenceIndex, sentences, typingSpeed, pauseDuration]);

  return (
    <motion.div key={currentSentenceIndex} className={className}>
      {displayedText}
    </motion.div>
  );
};

export default TypingText;
