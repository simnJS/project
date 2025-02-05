"use client";  // <-- IMPORTANT
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto py-32 relative z-10">
        <div className="space-y-10 text-center max-w-4xl mx-auto">
          <motion.span
            className="inline-block bg-blue-500/20 text-blue-300 px-6 py-2 rounded-full text-lg font-medium border border-blue-400/20 glow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AVAILABLE FOR WORK
          </motion.span>
          <motion.h1
            className="text-7xl md:text-9xl font-bold text-blue-50 tracking-tighter"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SAFIA CREATIVE
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-blue-200/80 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            BASED IN FRANCE
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="bg-blue-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-500/20 text-blue-200 glass">
              UEFN MAP MAKERS
            </span>
            <span className="bg-blue-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-500/20 text-blue-200 glass">
              VERSE DEVELOPERS
            </span>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020817] to-transparent"></div>
      <Image src="/hero-bg.jpg" alt="Hero background" fill className="object-cover object-center opacity-20" priority />
    </section>
  )
}

