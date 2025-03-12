import React from 'react';
import styles from './Button.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion"
import { translater } from './Animation';

function Projects() {
    let projectArr = [
        { imgUrl: "/Images/weather.png", siteUrl: "https://sandilaweatherapp.vercel.app/" },
        { imgUrl: "/Images/sandilaDigix.png", siteUrl: "https://sandiladigix.netlify.app/" },
        { imgUrl: "/Images/futureProgrammers.png", siteUrl: "https://future-programmers.vercel.app/" },
        { imgUrl: "/Images/unitConverter.png", siteUrl: "https://units-converter-react.vercel.app/" },
    ];

    return (
        <div className='px-8 pt-24 mt-7 md:p-24 md:mt-0 lg:p-24 lg:mt-0 flex flex-col' id='projects'>
            <motion.h1
                variants={translater(-100)}
                initial="hidden"
                whileInView="visible"
                className={`${styles.heading} font-bold text-3xl`}>My Projects</motion.h1>
            <motion.span

                variants={translater(100)}
                initial="hidden"
                whileInView="visible"
                className=' pt-8 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0'
            >
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.swiperContainer}
                >
                    {projectArr.map((project, index) => (
                        <SwiperSlide key={index}>
                            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer"
                                className=' opacity-70 hover:opacity-30 transition-all duration-500 '
                            >
                                <img src={project.imgUrl} alt={`Project ${index + 1}`} className="w-full h-auto object-cover  transition-all duration-700 hover:scale-95" />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.span>
        </div>
    );
}

export default Projects;
