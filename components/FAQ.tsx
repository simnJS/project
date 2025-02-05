"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ q, a, isOpen, onToggle }: FAQItemProps) {
  const contentRef = useState<HTMLDivElement | null>(null)

  return (
    <div className="relative bg-[#020817] rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors overflow-hidden">
      <button onClick={onToggle} className="flex justify-between items-center w-full p-6 text-left">
        <h3 className="text-2xl font-bold text-blue-50">{q}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: { duration: 0.25, delay: 0.15 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: { duration: 0.25 },
              },
            }}
          >
            <div className="px-6 pb-6">
              <motion.p
                className="text-lg text-blue-200/80 leading-relaxed"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
              >
                {a}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const faqItems = [
  {
    q: "What industries do you specialize in?",
    a: "We specialize in game development, particularly in creating immersive experiences using Unreal Engine and UEFN.",
  },
  {
    q: "What services do you offer?",
    a: "We offer map creation, interactive element design, coding solutions, asset integration, and VFX development.",
  },
  {
    q: "Can you provide examples of your work?",
    a: "Yes! Check out our featured work section above to see our latest projects including Card Shop Tycoon, Tiktoker Tycoon 3, and Santa Tycoon.",
  },
  {
    q: "How do you approach projects?",
    a: "We take a collaborative approach, working closely with clients to understand their vision and bring it to life through our expertise.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 px-8 bg-gradient-to-b from-blue-900/20 to-[#020817]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl font-bold mb-20 text-blue-50 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

