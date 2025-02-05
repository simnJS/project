"use client";  // <-- IMPORTANT
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "CARD SHOP TYCOON",
    tags: ["Mapping", "Coding"],
    year: "2025",
    href: "https://fortnite.gg/island?code=7871-7951-1081",
    image: "http://cdn.simnjs.fr/u/4WmnQm.jpeg",
  },
  {
    title: "TIKTOKER TYCOON 3",
    tags: ["Mapping", "Coding"],
    year: "2024",
    href: "https://fortnite.gg/island?code=5352-4561-8315",
    image: "http://cdn.simnjs.fr/u/OwAjd4.jpeg",
  },
  {
    title: "SANTA TYCOON",
    tags: ["Mapping", "Coding"],
    year: "2024",
    href: "https://fortnite.gg/island?code=8022-0973-2717",
    image: "http://cdn.simnjs.fr/u/ea6Lhq.jpeg",
  },
  {
    title: "SOON",
    tags: ["Mapping", "Coding"],
    year: "2025",
    href: "",
    image: "/coming-soon.jpg",
  },
]

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-8 bg-gradient-to-b from-[#020817] via-blue-950/20 to-[#020817]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold mb-16 text-blue-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FEATURED WORK
        </motion.h2>
        <motion.p
          className="text-xl text-blue-200/80 mb-20 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our creative spirit comes alive in the digital realm. Together, our nimble fingers fly across the keyboard,
          bringing immersive experiences to life with Unreal Engine 5 and Unreal Editor for Fortnite (UEFN).
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={project.href} target="_blank" rel="noreferrer" className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-sm bg-blue-600/50 px-3 py-1 rounded-full text-blue-100">
                            {tag}
                          </span>
                        ))}
                        <span className="text-sm bg-blue-900/50 px-3 py-1 rounded-full text-blue-200">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

