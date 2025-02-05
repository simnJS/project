"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav className="fixed w-full bg-[#020817]/95 backdrop-blur-lg z-40 px-8 py-6 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-400 tracking-tight">SAFIA</h1>
          <div className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection("work")} className="text-lg hover:text-blue-400 transition-colors">
              Work
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Expertise
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-lg hover:text-blue-400 transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              CONNECT WITH US
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-blue-400 w-8 h-8" /> : <Menu className="text-blue-400 w-8 h-8" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#020817]/98 backdrop-blur-xl z-30 pt-32 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-12 p-8">
            <button onClick={() => scrollToSection("work")} className="text-2xl hover:text-blue-400 transition-colors">
              Work
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              Expertise
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-2xl hover:text-blue-400 transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium cursor-pointer"
            >
              CONNECT WITH US
            </button>
          </div>
        </div>
      )}
    </>
  )
}

