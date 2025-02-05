"use client"
import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  { icon: "https://cdn.simnjs.fr/u/J6Q07k.svg", name: "X", username: "@SafiaCreativefn", href: "https://x.com/SafiaCreativefn" },
  { icon: "https://cdn.simnjs.fr/u/LwLYp0.svg", name: "Discord", username: "discord.gg/safia", href: "https://discord.gg/safia" },
]

export default function SocialMedia() {
  return (
    <section id="connect" className="py-32 px-8 bg-[#020817]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-20 text-blue-50 text-center">CONNECT WITH US</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="flex items-center gap-6 bg-blue-950/30 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              <div className="text-blue-400">
                <Image src={social.icon || "/placeholder.svg"} alt={social.name} width={32} height={32} />
              </div>
              <div>
                <p className="text-sm text-blue-200/60">{social.name}</p>
                <p className="text-lg text-blue-50 font-medium">{social.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

