import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import MouseMoveEffect from "@/components/MouseMoveEffect"
//import CustomCursor from "@/components/CustomCursor" //Removed import for CustomCursor
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAFIA CREATIVE",
  description: "UEFN Map Makers and Verse Developers based in France",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#020817] text-white overflow-x-hidden`}>
        {" "}
        {/*Removed cursor-none */}
        <MouseMoveEffect />
        {/* <CustomCursor /> */} {/*Removed CustomCursor */}
        {children}
      </body>
    </html>
  )
}

