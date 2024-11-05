import React from 'react';
import { motion } from 'framer-motion';
import PS from './PS.png';
import CS from './Comm.png';
import ES from './ES.png';
import Control from './Control.png'
import BMD from './BMD.png'
import ST from './ST.png'
import ATT from './ATT.png'
import infra from './Infra.png'
import agri from './Agri.png'


const categories = [
  { name: "Communication Systems", image: CS },
  { name: "Embedded Systems", image: ES },
  { name: "Power Systems", image: PS },
  { name: "Control Systems", image: Control },
  { name: "Biomedical Devices", image: BMD },
  { name: "Sustainable Technology", image: ST },
  { name: "Automotive and Transportation Technology", image: ATT },
  { name: "Infrastructure", image: infra },
  { name: "Agriculture Technology", image: agri }
];


const scrollAnimation = {
  animate: {
    x: [0, -2000], 
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const Categories: React.FC = () => {

  const infiniteCategories = [...categories, ...categories]; 
  return (
    <div className="p-0 bg-[#1B4242] min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-full overflow-hidden border-2 border-[#092635] rounded-lg p-4 m-4">
        <h2 className='text-3xl font-bold p-4 text-white'>CATEGORIES</h2>
        <motion.div {...scrollAnimation} className="flex space-x-6">
          {infiniteCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#9EC8B9] border-2 border-[#092635] rounded-lg p-4 flex flex-col items-center shadow-md min-w-[200px]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="mb-4 w-24 h-24 object-contain"
              />
              <h2 className="text-xl font-bold text-black">{category.name}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
