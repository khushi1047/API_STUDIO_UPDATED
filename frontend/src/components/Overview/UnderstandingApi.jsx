import React from "react";
import { motion } from "framer-motion";
import { CiLocationArrow1, CiDatabase } from "react-icons/ci";
import { FaDigitalOcean } from "react-icons/fa";
import { IoArrowUndoSharp } from "react-icons/io5";

const UnderstandingApi = () => {

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-black text-white p-8 md:p-12 overflow-x-hidden">
   
      <motion.div
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Understanding APIs</h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl">
          Learn how APIs work and why they're essential for modern application development
        </p>
      </motion.div>


      <div className="relative flex flex-wrap justify-center items-start gap-12 w-full">
      
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white"></div>

        {[
          {
            icon: <CiLocationArrow1 className="text-green-400 text-5xl mb-4 bg-black rounded-full p-2" />,
            title: "API Request",
            desc: "Client sends a request to a specific endpoint with parameters",
          },
          {
            icon: <FaDigitalOcean className="text-green-400 text-5xl mb-4 bg-black rounded-full p-2" />,
            title: "Server Processing",
            desc: "Server validates the request and processes the data",
          },
          {
            icon: <IoArrowUndoSharp className="text-green-400 text-5xl mb-4 bg-black rounded-full p-2" />,
            title: "API Response",
            desc: "Server sends back data in a structured format (JSON/XML)",
          },
          {
            icon: <CiDatabase className="text-green-400 text-5xl mb-4 bg-black rounded-full p-2" />,
            title: "Client Handling",
            desc: "Client processes the response and updates the UI",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center flex-1 min-w-[200px] max-w-[250px] z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stepVariants}
            transition={{ delay: index * 0.2 }}
          >
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UnderstandingApi;
