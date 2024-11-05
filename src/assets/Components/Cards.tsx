import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CardProps = {
  title: string;
  para: string;
  content: string;
};

const Cards: React.FC<CardProps> = ({ title, para, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
    <motion.div
      className="flex justify-center items-center my-4 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="border-box  bg-gradient-to-r from-[#1B4242] to-[#092635] p-4 cursor-pointer shadow-md hover:shadow-lg w-full max-w-xs"
        style={{ borderRadius: "1rem", boxShadow: '0px 8px 20px rgba(0,0,0,0.15)' }}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.98 }}
      >
      
        <motion.h2
          layout="position"
          className="text-xl font-semibold text-white"
          whileHover={{ scale: 1.05, color: "#1e293b" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>

        {!isOpen && (
          <motion.p
            className="text-sm text-white mt-2"
            layout="position"
            transition={{ duration: 0.3 }}
          >
            {para}
          </motion.p>
        )}

        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="overflow-hidden"
            >
              <motion.p
                className="text-white text-sm mt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {content}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cards = [
    { title: 'WHAT?', para:'is our objective', content: 'Our goal is to ignite innovation and creativity in students and startups by offering a platform to showcase their talents and ideas.' },
    { title: 'HOW?', para:'we help Innovators?', content: 'By providing workshops, mentorship, and resources to support and guide innovative projects.            ' },
    { title: 'WHO?',para:'are we?',  content: 'Students, startups, and anyone with a passion for innovation and creativity.                                                   ' },
    { title: 'WHY?', para:'should you join us?', content: 'Our events and activities take place in various locations, both online and offline.' },

  ];

  return (
    <div className="bg-[#9EC8B9] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
      {cards.map((card, index) => (
        <Cards key={index} title={card.title} para={card.para} content={card.content} />
      ))}
    </div>
  );
};

export default CardGrid;
