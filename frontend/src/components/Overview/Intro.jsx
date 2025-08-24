import React from "react";
import { motion } from "framer-motion";
import sample from "../../assets/sample.png";
import { useNavigate } from "react-router-dom";


const Intro = () => {
  
const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start pt-[150px] px-6 lg:px-20 gap-10">
      <motion.div
        className="flex flex-col gap-6 lg:w-1/2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Unified{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Developer Platform
          </span>{" "}
          for API Workflow
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Seamlessly test APIs, write code, and monitor performance in one integrated environment.
          No more context switching, just pure development flow.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-green-400 to-cyan-400 text-black rounded px-6 py-2 w-fit transition-transform hover:cursor-pointer"
        onClick={()=>navigate('/editor')}>
          Start building
        </motion.button>
      </motion.div>
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={sample} alt="Sample" className="w-full max-w-[600px] h-auto object-contain" />
      </motion.div>

    </div>
  );
};

export default Intro;
