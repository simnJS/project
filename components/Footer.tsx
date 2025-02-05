"use client"
import { ChevronUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-blue-900/30 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-50 mb-4">SAFIA</h2>
            <p className="text-xl text-blue-200/60">©2025 SAFIA CREATIVE</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg group"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            GO BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  )
}

