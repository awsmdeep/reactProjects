import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNodejs } from "react-icons/tb";
import { PiFileCppFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    intial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    }

})
const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-thin tracking-tight'>Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}


                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"

                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNodejs className='text-7xl text-[#7CB702]' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-7xl text-[#E8D44D]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-white-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <PiFileCppFill className='text-7xl text-[#6295CB]' />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies