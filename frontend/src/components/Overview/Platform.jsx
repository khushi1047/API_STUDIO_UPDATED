import React from "react";
import { motion } from "framer-motion";
import Box from "./Box";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { CgDebug } from "react-icons/cg";
import { IoBook } from "react-icons/io5";
import { PiPaperPlaneFill } from "react-icons/pi";

const Platform = () => {
  const boxes = [
    {
      icon: <MdOutlineDoubleArrow />,
      title: "Increases Productivity",
      desc: "Stop switching multiple tools. With everything in one place, you can focus on writing code and solving problems, not managing windows.",
    },
    {
      icon: <FaEye />,
      title: "Real-time Monitoring",
      desc: "Instantly see how your API performs with real-time response times, error rates, and server health metrics right next to your code.",
    },
    {
      icon: <CgDebug />,
      title: "Faster Debugging",
      desc: "Identify and fix issues quickly by seeing your code, API requests, and server logs side by side in a unified environment.",
    },
    {
      icon: <IoBook />,
      title: "Built-in Learning",
      desc: "Access educational content about APIs and best practices directly within your development environment when you need it.",
    },
    {
      icon: <PiPaperPlaneFill />,
      title: "Accelerated Development",
      desc: "Go from idea to implementation faster with integrated tools that work together seamlessly in your development workflows.",
    },
  ];
  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="px-4 py-10">
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="text-white text-4xl font-bold">Why use a Unified Platform?</p>
        <p className="text-gray-300 mt-2 text-center max-w-2xl">
          Eliminate context switching and streamline your development workflow
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={boxVariants}
            transition={{ delay: index * 0.2 }}
          >
            <Box p={box.icon} p1={box.title} p2={box.desc} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
