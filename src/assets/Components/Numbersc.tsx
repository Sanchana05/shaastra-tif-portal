import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface HeroSectionProps {
  targetNumber: number;
  startNumber: number;
  title: string;
}

const Numbersc: React.FC<HeroSectionProps> = ({ targetNumber, startNumber, title }) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(true);
      setTimeout(() => {
        setCurrentNumber((prev) => {
          if (prev < targetNumber) {
            return prev + 1;
          }
          return prev;
        });
        setIsFlipped(false);
      }, 2000);
    }, 30);

    return () => clearInterval(flipInterval);
  }, [targetNumber]);

  return (
    <>
      <div className="flex justify-center items-center h-64 bg-[#9EC8B9] text-[#070202]"> 
        <div className="relative inline-flex flex-col items-center shadow-xl shadow-[rgba(0, 0, 0, .2)] rounded-md p-4"> 
          <div className="text-xl mb-2 font-normal flex justify-center text-center ">{title}</div> 
          <motion.div
            className="relative w-[80px] h-[100px] bg-[#1B4242] flex justify-center items-center rounded-md" 
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="w-full h-[80px] absolute bg-[#1B4242] rounded-t-md flex justify-center items-center text-4xl font-bold shadow-lg" 
              initial={false}
              animate={{ rotateX: isFlipped ? 180 : 0 }}
              transition={{ duration: 1 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              {currentNumber}
            </motion.div>
            <motion.div
              className="w-full h-full absolute bg-[#1B4242] rounded-b-md flex justify-center items-center text-4xl font-bold shadow-lg" 
              initial={false}
              animate={{ rotateX: isFlipped ? 0 : 180 }}
              transition={{ duration: 1 }}
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              {currentNumber + 1 <= targetNumber ? currentNumber + 1 : currentNumber}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Numbersc;
