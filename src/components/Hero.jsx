import React, { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import styles from "./Button.module.css";
import { motion } from "framer-motion";
import { translater, translaterUpDown } from "./Animation";

function Hero() {
  const typedRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Front-end Developer!",
        "Backed-end Developer!",
        "Full Stack Developer!",
      ],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "cv.pdf";
    a.download = "cv.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center sm:justify-between sm:flex-row md:justify-between md:flex-row md:ml-0 lg:justify-between lg:ml-0 lg:flex-row w-full h-max md:px-24 lg:px-24 py-4 mt-7 md:mt-0 lg:mt-0"
        id="home"
      >
        <motion.div
          variants={translater(-100)}
          initial="hidden"
          whileInView="visible"
          className="w-full ml-9 flex gap-6 flex-col sm:w-1/2 sm:ml-0 md:ml-0 lg:ml-0  md:w-1/2 lg:w-1/2"
        >
          <motion.div
            variants={translaterUpDown(0.5, -100, 0.4)}
            initial="hidden"
            whileInView="visible"
          >
            <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-4xl">
              Hi, I'm Muhammad Sheraz
            </h1>
            <h1 className="font-bold text-xl sm:text-3xl md:text-3xl lg:text-3xl">
              And I am{" "}
              <span className=" text-[#00a3e7] font-bold" ref={typedRef}></span>
            </h1>
          </motion.div>
          <motion.div
            variants={translaterUpDown(0.4, -100, 0.3)}
            initial="hidden"
            whileInView="visible"
            className=" text-gray-400 md:text-xl lg:text-xl"
          >
            <p>I am full-stack developer and freelancer</p>
            <p>passionate about web development and technology!</p>
          </motion.div>
          <motion.div
            variants={translaterUpDown(0.3, -300, 0.2)}
            initial="hidden"
            whileInView="visible"
            className=" flex gap-6 items-center font-bold flex-wrap"
          >
            <a
              href="https://www.fiverr.com/muhammasdsheraz/"
              target="blank"
              className={`px-3 py-2 w-32 text-center cursor-pointer rounded outline-none bg-[#00a3e7] text-black hover:bg-transparent hover:text-[#00a3e7] hover:border-[1px] hover:border-[#00a3e7] transition-all duration-300 relative`}
            >
              Hire me
            </a>
            <a
              href="https://wa.me/+923260468787"
              target="blank"
              className={`px-3 py-2 w-32 text-center cursor-pointer rounded outline-none bg-transparent text-[#00a3e7] relative ${styles.button1} z-10`}
            >
              Let's Talk
            </a>

            <a
              className={`px-3 py-2 w-32 text-center cursor-pointer rounded outline-none bg-[#00a3e7] text-black hover:bg-transparent hover:text-[#00a3e7] hover:border-[1px] hover:border-[#00a3e7] transition-all duration-300 relative`}
              onClick={downloadCV}
            >
              Download CV
            </a>
          </motion.div>
          <motion.div
            variants={translaterUpDown(0.2, -400, 0.1)}
            initial="hidden"
            whileInView="visible"
            className=" flex items-start gap-5 mt-5"
          >
            <a
              href="https://github.com/muhammadsherazsandila"
              target="blank"
              className=" text-[#00a3e7] text-4xl shadow-[0px_0px_10px_1px_#00a3e7] hover:shadow-[0px_0px_10px_3px_#00a3e7] hover:scale-105 transition-all duration-500  rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sheraz-800948347/"
              target="blank"
              className=" text-[#00a3e7] text-4xl shadow-[0px_0px_10px_1px_#00a3e7] hover:shadow-[0px_0px_10px_3px_#00a3e7] hover:scale-105 transition-all duration-500 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/muhammadsheraz046"
              target="blank"
              className=" text-[#00a3e7] text-4xl shadow-[0px_0px_10px_1px_#00a3e7] hover:shadow-[0px_0px_10px_3px_#00a3e7] hover:scale-105 transition-all duration-500 rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/+923260468787"
              target="blank"
              className=" text-[#00a3e7] text-4xl shadow-[0px_0px_10px_1px_#00a3e7] hover:shadow-[0px_0px_10px_3px_#00a3e7] hover:scale-105 transition-all duration-500 rounded-full"
            >
              <FaWhatsapp />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={translater(100)}
          initial="hidden"
          whileInView="visible"
          className="w-full md:w-1/2 sm:w-1/2 lg:w-1/2 "
        >
          <img
            className=" bg-transparent w-full opacity-50 rounded-full drop-shadow-[0px_0px_12px_#00a3e7]"
            src="/Images/admin.png"
            alt="Admin"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
