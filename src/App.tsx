import { useEffect, useState, useRef } from 'react';
import {
  Menu,
  X,
  ChevronUp,
  ChevronDown,
  Code,
  Palette,
  Box,
  Sparkles,
  Layers,
  Rocket,
  Linkedin,
  Github,
} from 'lucide-react';

interface FAQItemProps {
  q: string;
  a: string;
}

function FAQItem({ q, a }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-blue-950/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-bold text-blue-50">{q}</h3>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        className="overflow-hidden transition-all duration-300 ease-out mt-4"
      >
        <p className="text-lg text-blue-200/80 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-x-hidden cursor-auto">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#020817]/95 backdrop-blur-lg z-40 px-8 py-6 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-400 tracking-tight">SAFIA</h1>
          <div className="hidden md:flex items-center gap-12">
            <a href="#work" className="text-lg hover:text-blue-400 transition-colors">
              Work
            </a>
            <a href="#expertise" className="text-lg hover:text-blue-400 transition-colors">
              Expertise
            </a>
            <a href="#faq" className="text-lg hover:text-blue-400 transition-colors">
              FAQ
            </a>
            <a href="#connect" className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium">
              CONNECT WITH US
            </a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-blue-400 w-8 h-8" /> : <Menu className="text-blue-400 w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#020817]/98 backdrop-blur-xl z-30 pt-32 transition-opacity duration-300">
          <div className="flex flex-col items-center gap-12 p-8">
            <a
              href="#work"
              className="text-2xl hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#expertise"
              className="text-2xl hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </a>
            <a
              href="#faq"
              className="text-2xl hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a href="#connect" onClick={() => {
                const element = document.querySelector('#connect');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium cursor-pointer">
              CONNECT WITH US
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto py-32 relative z-10">
          <div className="space-y-10 text-center max-w-4xl mx-auto">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-6 py-2 rounded-full text-lg font-medium border border-blue-400/20">
              AVAILABLE FOR WORK
            </span>
            <h1 className="text-7xl md:text-9xl font-bold text-blue-50">SAFIA CREATIVE</h1>
            <p className="text-2xl md:text-3xl text-blue-200/80 font-light tracking-wide">BASED IN FRANCE</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg pt-6">
              <span className="bg-blue-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-500/20 text-blue-200">
                UEFN MAP MAKERS
              </span>
              <span className="bg-blue-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-500/20 text-blue-200">
                VERSE DEVELOPPERS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 px-8 bg-gradient-to-b from-[#020817] via-blue-950/20 to-[#020817]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-blue-50">FEATURED WORK</h2>
          <p className="text-xl text-blue-200/80 mb-20 max-w-3xl leading-relaxed">
            Our creative spirit comes alive in the digital realm. Together, our nimble fingers fly across the keyboard,
            bringing immersive experiences to life with Unreal Engine 5 and Unreal Editor for Fortnite (UEFN).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'CARD SHOP TYCOON', tags: ['Mapping', 'Coding'], year: '2025', href: 'https://fortnite.gg/island?code=7871-7951-1081' },
              { title: 'TIKTOKER TYCOON 3', tags: ['Mapping', 'Coding'], year: '2024' , href: 'https://fortnite.gg/island?code=5352-4561-8315'},
              { title: 'SANTA TYCOON', tags: ['Mapping', 'Coding'], year: '2024', href: 'https://fortnite.gg/island?code=8022-0973-2717' },
              { title: 'SOON', tags: ['Mapping', 'Coding'], year: '2025', href: '' },
            ].map((project, index) => (
              <a href={project.href} key={index} target="_blank" rel="noreferrer" className="group">
                <div className="group relative bg-blue-950/30 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/20 hover:border-blue-500/40 transition-colors transform hover:scale-105 duration-300">
                  <h3 className="text-3xl font-bold text-blue-50 mb-6">{project.title}</h3>
                  <div className="flex gap-3 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm bg-blue-600/20 px-4 py-2 rounded-full text-blue-200">
                        {tag}
                      </span>
                    ))}
                    <span className="text-sm bg-blue-900/40 px-4 py-2 rounded-full text-blue-300">
                      {project.year}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-8 bg-blue-950/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-20 text-blue-50">OUR EXPERTISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Box className="w-12 h-12" />,
                title: 'MAP BUILDING',
                description: 'We create immersive environments that captivate players.',
              },
              {
                icon: <Layers className="w-12 h-12" />,
                title: 'INTERACTIVE ELEMENTS',
                description: 'We craft engaging interactive elements that add depth.',
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: 'CODING',
                description: 'Our coding expertise brings functionality and fluidity.',
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: 'PERFECT ASSETS',
                description: 'We carefully select and integrate assets that fit perfectly.',
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'VFX',
                description: 'We use visual effects to amplify the atmosphere.',
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'OPTIMIZATION',
                description: 'We specialize in optimizing game performance.',
              },
            ].map((expertise, index) => (
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

      {/* Social Media Section */}
      <section id='connect' className="py-32 px-8 bg-[#020817]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-20 text-blue-50 text-center">CONNECT WITH US</h2>
          <div className="flex justify-center gap-8 flex-wrap">
        {[
          { icon: <img src="http://cdn.simnjs.fr/u/J6Q07k.svg" alt="X" className='w-8 h-8'/>, name: 'X', username: '@SafiaCreativefn', href: 'https://x.com/SafiaCreativefn' },
          { icon: <img src="http://cdn.simnjs.fr/u/LwLYp0.svg" alt="Discord" className="w-8 h-8" />, name: 'Discord', username: 'discord.gg/safia', href: 'https://discord.gg/safia' },
        ].map((social, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-blue-950/30 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
          >
            <div className="text-blue-400">{social.icon}</div>
            <div>
          <p className="text-sm text-blue-200/60">{social.name}</p>
          <p className="text-lg text-blue-50 font-medium">{social.username}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-20 text-blue-50">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-4xl">
            {[
              {
                q: 'What industries do you specialize in?',
                a: 'We specialize in game development, particularly in creating immersive experiences using Unreal Engine and UEFN.',
              },
              {
                q: 'What services do you offer?',
                a: 'We offer map creation, interactive element design, coding solutions, asset integration, and VFX development.',
              },
              {
                q: 'Can you provide examples of your work?',
                a: 'Yes! Check out our featured work section above to see our latest projects including Resort Tycoon and Trader Tycoon.',
              },
              {
                q: 'How do you approach projects?',
                a: 'We take a collaborative approach, working closely with clients to understand their vision and bring it to life through our expertise.',
              },
            ].map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020817] border-t border-blue-900/30 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-blue-50 mb-4">SAFIA</h2>
              <p className="text-xl text-blue-200/60">©2025 SAFIA CREATIVE</p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg group"
            >
              <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              GO BACK TO TOP
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
