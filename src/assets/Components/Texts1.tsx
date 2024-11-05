import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
const Texts1: React.FC = () => {
    const sentences = ["where Potential", "where Idea", "where Creativity"];
    const [currentSentence, setCurrentSentence] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      let index = 0;
      setIsTyping(true);
      const typingInterval = setInterval(() => {
        setDisplayedText(sentences[currentSentence].slice(0, index + 1));
        index++;
        if (index === sentences[currentSentence].length) {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentSentence((prev) => (prev + 1) % sentences.length);
          }, 2000); 
        }
      }, 100);
  
      return () => clearInterval(typingInterval);
    }, [currentSentence]);
return(
    <div className="flex justify-center items-center p-3 bg-[#9EC8B9] ">
    <motion.div
      key={currentSentence}
      className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-[#092635]  via-[#425e53] to-[#092635] bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
      {displayedText}
    </motion.div>
  </div>
    )

}

export default Texts1;