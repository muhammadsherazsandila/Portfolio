import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { motion } from "framer-motion";
import styles from './Button.module.css'
import { translater, translaterUpDown } from "./Animation";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, delay: 0.1, shadow: "shadow-[0px_0px_10px_1px_orange]" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, delay: 0.2, shadow: "shadow-[0px_0px_10px_1px_blue]" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, delay: 0.3, shadow: "shadow-[0px_0px_10px_1px_yellow]" },
    { name: "React.js", icon: <FaReact className="text-blue-400" />, delay: 0.4, shadow: "shadow-[0px_0px_10px_1px_blue]" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, delay: 0.5, shadow: "shadow-[0px_0px_10px_1px_green]" },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" />, delay: 0.6, shadow: "shadow-[0px_0px_10px_1px_gray]" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, delay: 0.7, shadow: "shadow-[0px_0px_10px_1px_green]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, delay: 0.8, shadow: "shadow-[0px_0px_10px_1px_teal]" },
    { name: "Database Management", icon: <FaDatabase className="text-gray-600" />, delay: 0.9, shadow: "shadow-[0px_0px_10px_1px_gray]" },
    { name: "Figma", icon: <FaFigma className="text-purple-500" />, delay: 1, shadow: "shadow-[0px_0px_10px_1px_purple]" },
];

const Skills = () => {
    return (
        <div id="skills" className="px-8 pt-24 mt-7 md:p-24 md:mt-0 lg:p-24 lg:mt-0 flex flex-col gap-5 bg-gray-900 text-white">
            <motion.h1
                variants={translater(-100)}
                initial="hidden"
                whileInView="visible"
                className={`${styles.heading} font-bold text-3xl`}>My Skills</motion.h1>
            <motion.div
                variants={translater(100)}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={translaterUpDown(skill.delay, 100, 0.4)}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        className={`flex flex-col items-center p-4 bg-gray-800 rounded-xl transition-all ${skill.shadow}`}
                    >
                        <div className="text-5xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
