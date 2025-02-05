"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("Discord webhook URL is not set")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `New contact form submission:
Name: ${name}
Email: ${email}
Message: ${message}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-32 px-8 bg-gradient-to-b from-[#020817] to-blue-900/20">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-6xl font-bold mb-16 text-blue-50 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONTACT US
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-blue-900/30 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 glass"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-blue-900/30 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 glass"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-blue-900/30 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 glass"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {submitStatus === "success" && <p className="text-green-400 text-center">Message sent successfully!</p>}
          {submitStatus === "error" && <p className="text-red-400 text-center">An error occurred. Please try again.</p>}
        </motion.form>
      </div>
    </section>
  )
}

