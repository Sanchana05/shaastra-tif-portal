import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Send, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import img from "./logo.jpg";

const Footer: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <footer className="rounded-tl-4xl bg-gradient-to-r from-[#092635] to-[#1B4242] text-gray-100 py-8 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-3">
        <div className="container text-center text-md-start mt-4 sm:mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-3">
            <div className="flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-4"
              >
                <div className="pt-8 flex justify-center">
                  <a href="https://www.shaastra.org">
                    <img src={img} className="p-2 pt-6 sm:p-1" width="160" height="160" alt="Logo" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="pr-4 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-4"
              >
                <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-[#c9e1d8] mb-5 sm:mb-4">
                  Connect with us
                </p>
                <div className="p-2 pb-3 flex justify-center items-center space-x-3 sm:space-x-2">
                  <motion.a
                    href="https://www.instagram.com/shaastra_iitm/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#9EC8B9] p-1 sm:p-0.5"
                  >
                    <Instagram size={28} />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/Shaastra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#9EC8B9] p-1 sm:p-0.5"
                  >
                    <Facebook size={28} />
                  </motion.a>
                  <motion.a
                    href="https://x.com/shaastraiitm?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#9EC8B9] p-1 sm:p-0.5"
                  >
                    <Twitter size={28} />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@iitmshaastra"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#9EC8B9] p-1 sm:p-0.5"
                  >
                    <Youtube size={28} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/shaastra-iit-madras/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#9EC8B9] p-1 sm:p-0.5"
                  >
                    <Linkedin size={28} />
                  </motion.a>
                </div>

                <p className="text-sm sm:text-base md:text-lg font-thin mb-2 text-[#E0E0E0]">
                  +91 9876543210
                </p>
                <p className="text-sm sm:text-base md:text-lg font-thin mb-2 text-[#E0E0E0]">
                  shaastra@iitm.ac.in
                </p>
              </motion.div>
            </div>

            <div className="mb-4 sm:mb-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-[#c9e1d8] mb-5 sm:mb-4 text-left">
                  Address
                </h2>
                <div className="text-sm sm:text-base md:text-lg font-thin mb-3 text-[#E0E0E0]">
                  <p className="text-left">
                    IITM Students Activities Trust Shaastra,<br />
                    1st Floor, O/o Dean Of Students Office,<br />
                    IIT Madras, Guindy, Chennai,<br />
                    Tamil Nadu, India - 600036
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="pl-4 mb-4 sm:mb-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 sm:mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-[#c9e1d8] mb-5 sm:mb-4 text-left">
                  Send us your queries
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-2 flex flex-col items-center">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={150}
                    placeholder="Type your query here"
                    className="w-full p-3 shadow-md sm:p-2 text-[#092635] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C8374] transition-all duration-300"
                    rows={4}
                  />
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] text-[#092635] pl-6 pr-4 py-2 sm:px-4 rounded-full transition-all duration-300 ease-in-out flex items-center space-x-2"
                    whileHover={{
                      scale: 1.05, boxShadow: "0px 0px 8px rgb(255, 255, 255)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Send</span>
                    <Send size={22} />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-[#5C8374] w-3/4 mx-auto" />
      <div className="text-center p-4 bg-gradient-to-r from-[#1B4242] to-[#092635] text-[#9EC8B9]">
        © Developed by: Shaastra Webops
      </div>
    </footer>
  );
};

export default Footer;
