import { motion } from "framer-motion";
import { containerVariant } from "../variants";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomeIndex = () => {
    useEffect(() => {
        document.title = "Welcome - Vivek Joshi";
    }, []);
    return (
        <motion.div className = "w-screen h-screen" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
            <div className = "float-left w-full h-full flex justify-center items-center">
                <div className = "md:w-5/12 w-1/2">
                    <div className = "font-bold font-mono silkscreen text-white mb-5">Hey, I'm <span className = "color5">Vivek Joshi</span> (π±πΎππππ₯πππ½πΎ).</div>
                    <h2 className = "lg:text-5xl md:text-3xl text-3xl font-black text-white mb-5">
                        <div className = "mb-1">My passion is</div>
                        bringing ideas to Life.
                    </h2>
                    <p className = "mb-6 text-sm w-3/4 text-white md:text-xs">
                        Currently I'm a student at IIIT Allahabad. My passion is working on unique ideas to make complex looking problems simpler.
                    </p>
                    <Link to = { process.env.PUBLIC_URL + "/aboutMe" } className = "justify-center py-3 px-5 bg-orange-500 text-white rounded-full hover:bg-orange-600 duration-300 cursor-pointer inline-block">
                        Let's Jump To Coding.
                    </Link>
                </div>
                <img className = "inline float-left lg:w-64	md:w-52 relative right-12 lg:right-16 hidden md:block right-5" src = { process.env.PUBLIC_URL + "/img/profile.png"} alt = "profile_not_found" />
            </div>
        </motion.div>
    );
}

export default HomeIndex;