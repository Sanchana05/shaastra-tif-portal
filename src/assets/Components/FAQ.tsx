import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FrequentlyAskedQues() {
  const details = [
    {
      question: "What steps should I follow to participate, and how do I get involved?",
      answer:
        "Participants must upload a detailed description of their product, accompanied by images showcasing its use and application. Those who are shortlisted will advance to the next phase.",
    },
    {
      question: "Who is eligible to register for the event?",
      answer:
        "The competition is open to all currently enrolled college students, including undergraduates from various programs, postgraduates, and Ph.D. research scholars.",
    },
    {
      question: "Am I allowed to register a software prototype?",
      answer:
        "Teams must register with a hardware prototype to participate in the event. App-based startups and services are not eligible to apply.",
    },
    {
      question: "What kinds of prototypes are permitted in the fair?",
      answer:
        "Prototypes from any industry, including robotics, healthcare, biotechnology, agriculture, and the Internet of Things, are welcome in this fair.",
    },
    {
      question: "What are the selection criteria?",
      answer:
        "The selection criteria for the competition are based on the idea, feasibility, innovation, and real-life application of the prototypes.",
    },
    {
      question: "What are the advantages of participating in the event?",
      answer:
        "The winning team will receive a pre-incubation opportunity at the IIT Madras Incubation Cell, allowing them to turn their innovative project into a startup with dedicated mentorship from experts. Participants will also have the chance to connect with venture capitalists, angel investors, and industry professionals.",
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <section id="faq">
<motion.div
  className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4 md:px-8"
  style={{
    background: "linear-gradient(135deg, #1B4242, #9EC8B9)",
    color: "#092635", 
  }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <motion.p
            className="text-4xl md:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:text-6xl font-bold text-[#9ec8b9]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, ease: "easeInOut" }}
          >
            Frequently Asked Questions
          </motion.p>
        </motion.div>

        <div className="flex flex-col justify-center items-center">
          <div
            className="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl overflow-auto rounded-lg shadow-lg"
            style={{ maxHeight: "1050px" }}
          >
            {details.map((item, i) => (
              <motion.div
                key={i}
                className="item border bg-[#092635] border-[#1b4242] rounded-lg mb-4 overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
              >
                <motion.div
                  className="bg-[] flex justify-between items-center cursor-pointer p-4 md:p-6"
                  onClick={() => toggle(i)}
                  whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <h2 className="text-md md:text-lg lg:text-xl font-semibold text-[#ffffff]">
                    {item.question}
                  </h2>
                  <span className="text-2xl md:text-3xl text-[#ffffff]">
                    {selected === i ? "-" : "+"}
                  </span>
                </motion.div>
                <AnimatePresence>
                  {selected === i && (
                    <motion.div
                      className="p-4 md:p-6  text-[#ebeaea]"
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 500 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FrequentlyAskedQues;
