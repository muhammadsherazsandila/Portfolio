import React from 'react'
import styles from './Button.module.css'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { translater } from './Animation';
function About() {
    return (
        <div className='px-8 pt-24 mt-7 md:p-24 md:mt-0 lg:p-24 lg:mt-0 flex flex-col gap-5' id='about'>
            <motion.h1
                variants={translater(-100)}
                initial="hidden"
                whileInView="visible"
                className={`${styles.heading} font-bold text-3xl`}>About Me</motion.h1>
            <motion.span
                variants={translater(100)}
                initial="hidden"
                whileInView="visible"
            >{<FaQuoteLeft size={20} color='#00a3e7' />}</motion.span>
            <motion.p
                variants={translater(100)}
                initial="hidden"
                whileInView="visible"
                className=' text-gray-400 tracking-wider relative'>  Hi, I'm Muhammad Sheraz, a BSIT student at Quaid-i-Azam University, Islamabad. I have hands-on experience in full-stack development, specializing in React.js, MongoDB, and Express.js. I have worked on projects like e-commerce websites and hospital management systems. My focus is on creating efficient, user-friendly, and scalable web applications. I enjoy problem-solving and continuously improving my coding skills. I'm also exploring freelancing to gain more industry experience. My goal is to develop impactful projects and grow as a skilled developer. </motion.p>
            <motion.span
                variants={translater(100)}
                initial="hidden"
                whileInView="visible"
            >{< FaQuoteRight size={20} color='#00a3e7' />}</motion.span>
        </div>
    )
}

export default About