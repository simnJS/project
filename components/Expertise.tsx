"use client";  // <-- IMPORTANT

import { Box, Layers, Code, Palette, Sparkles, Rocket } from "lucide-react"

const expertiseItems = [
  {
    icon: <Box className="w-12 h-12" />,
    title: "MAP BUILDING",
    description: "We create immersive environments that captivate players.",
  },
  {
    icon: <Layers className="w-12 h-12" />,
    title: "INTERACTIVE ELEMENTS",
    description: "We craft engaging interactive elements that add depth.",
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "CODING",
    description: "Our coding expertise brings functionality and fluidity.",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "PERFECT ASSETS",
    description: "We carefully select and integrate assets that fit perfectly.",
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: "VFX",
    description: "We use visual effects to amplify the atmosphere.",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "OPTIMIZATION",
    description: "We specialize in optimizing game performance.",
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-8 bg-blue-950/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-20 text-blue-50">OUR EXPERTISE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {expertiseItems.map((expertise, index) => (
            <div
              key={index}
              className="bg-blue-950/30 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              <div className="text-blue-400 mb-8">{expertise.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-blue-50">{expertise.title}</h3>
              <p className="text-lg text-blue-200/80 leading-relaxed">{expertise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

