import React from 'react'
import styles from './Button.module.css';
import { motion } from "framer-motion"
import { translater } from './Animation';

function Summary() {
    return (
        <div className='px-8 pt-24 mt-7 md:p-24 md:mt-0 lg:p-24 lg:mt-0 flex flex-col' id='projects'>
            <motion.h1
                variants={translater(-100)}
                initial="hidden"
                whileInView="visible"
                className={`${styles.heading} font-bold text-3xl`}>Summary</motion.h1>
            <motion.div
                variants={translater(100)}
                initial="hidden"
                whileInView="visible"
                className=' py-8 flex justify-evenly items-center flex-wrap md:mt-28 sm:mt-28 lg:mt-28 gap-5'>
                <div className={`flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-2 font-bold text-2xl text-white items-center italic ${styles.textShadow}`}>
                    <h1 className=' text-4xl'>+4</h1>
                    <h1>Completed Projects</h1>
                </div>
                <div className={`flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-2 font-bold text-2xl text-white items-center italic ${styles.textShadow}`}>
                    <h1 className=' text-4xl'>+10</h1>
                    <h1>Master Skills</h1>
                </div>
                <div className={`flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-2 font-bold text-2xl text-white items-center italic ${styles.textShadow}`}>
                    <h1 className=' text-4xl'>+4</h1>
                    <h1>Cooming Soon</h1>
                </div>
            </motion.div>
        </div>
    )
}

export default Summary