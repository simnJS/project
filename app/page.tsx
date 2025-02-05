import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import FeaturedWork from "@/components/FeaturedWork"
import Expertise from "@/components/Expertise"
import SocialMedia from "@/components/SocialMedia"
import FAQ from "@/components/FAQ"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Expertise />
      <SocialMedia />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  )
}

