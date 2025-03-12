import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import styles from './Button.module.css';
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { translater, translaterNav, translaterUpDown } from './Animation';

function Navbar() {
    const [activeLink, setActiveLink] = useState(0);
    const [show, setShow] = useState(true)
    const handleClick = (index) => {
        setActiveLink(index);
        setShow(true)
        document.body.style.overflow = "auto"
    };

    let navElementsArr = [
        { name: "Home", delay: 0.1, tranlateLength: 10, tranlateLengthNegative: -10 },
        { name: "About", delay: 0.2, tranlateLength: 20, tranlateLengthNegative: -20 },
        { name: "Skills", delay: 0.3, tranlateLength: 30, tranlateLengthNegative: -30 },
        { name: "Projects", delay: 0.4, tranlateLength: 40, tranlateLengthNegative: -40 },
    ]

    return (
        <>
            <nav className=' relative flex justify-between px-6 md:px-12 lg:px-24 items-center w-full py-4 md:py-6 bg-transparent' id='nav'>
                <motion.h1
                    variants={translater(-100)}
                    initial="hidden"
                    whileInView="visible"
                    className='font-bold text-xl md:text-2xl'><span className=' text-[#00a3e7]'>MS </span> Developer</motion.h1>
                <ul className='hidden md:flex gap-4 md:gap-6 items-center lg:flex'>
                    {navElementsArr.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={translaterUpDown(item.delay, item.tranlateLengthNegative, 0.6)}
                            initial="hidden"
                            whileInView="visible"
                            className='font-bold cursor-pointer'>
                            <Link
                                onClick={() => handleClick(index)}
                                className={`${activeLink === index ? styles.selected : ""} ${styles.navlink}`}
                                to={(item.name).toLowerCase()}
                                duration={700}
                                smooth={true}>
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
                <motion.button
                    variants={translater(50)}
                    initial="hidden"
                    animate="visible"
                    className={`text-2xl text-white mr-1 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden ${show ? "scale-100" : "scale-0"} transition-all duration-500`}
                    onClick={() => { setShow(false); document.body.style.overflow = "hidden" }}
                >
                    < GiHamburgerMenu />
                </motion.button>

                <ul className={`${show ? "-right-28" : "-right-0"} sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden absolute px-4 py-7 top-0 flex gap-4 flex-col items-center bottom-0 h-lvh bg-gray-900 z-30 shadow-[0px_0px_5px_1px_#00a3e7] transition-all duration-500 `}>
                    <span
                        onClick={() => { setShow(true); document.body.style.overflow = "auto" }}
                    >< ImCross /></span>
                    {navElementsArr.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={translaterNav(item.delay, item.tranlateLength, 0.6)}
                            initial="hidden"
                            whileInView="visible"
                            className='font-bold cursor-pointer'>
                            <Link
                                onClick={() => handleClick(index)}
                                className={`${activeLink === index ? styles.selected : ""} ${styles.navlink}`}
                                to={(item.name).toLowerCase()}
                                duration={700}
                                smooth={true}>
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <span>
                <Link
                    onClick={() => setActiveLink(0)}
                    to='nav'
                    duration={700}
                    smooth={true}
                    className="text-2xl md:text-3xl p-2 md:p-3 bg-[#00a3e7] text-black fixed right-6 md:right-10 bottom-6 md:bottom-10 rounded-full cursor-pointer shadow-[0px_0px_10px_2px_#00a3e7] hover:shadow-[0px_0px_10px_3px_#00a3e7] hover:scale-110 transition-all duration-500 animate-bounce z-50">
                    <FaArrowUp />
                </Link></span>
        </>
    );
}

export default Navbar;
