"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  BookOpen,
  Zap,
  Lock,
  Lightbulb,
  Handshake,
  TrendingUp,
  Target,
  Award,
  Heart,
  Twitter,
  Github,
  Linkedin,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react"

// Particle component for animated background
const Particle = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <div
    className="absolute rounded-full bg-primary/20 animate-pulse"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  />
)

// Floating particles background
const ParticleBackground = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-sm bg-slate-900/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-orange-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-white font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Elastikchain
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-primary font-semibold transition-all duration-300 relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-orange-400"></span>
            </Link>
            {["Services", "Events", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <button className="bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group">
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block text-primary font-semibold" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              {["Services", "Events", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors pt-4 border-t border-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <ParticleBackground />

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/30 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-primary font-semibold">About Us</span>
            </div>

            {/* Enhanced Subtitle */}
            <div className="flex items-center justify-center space-x-3 mb-8 group">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-orange-400 group-hover:w-16 transition-all duration-300"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-semibold text-lg tracking-wide">
                About Elastikchain
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-orange-400 to-primary group-hover:w-16 transition-all duration-300"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              <span className="block text-white animate-fade-in-up">Bridging</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-400 animate-gradient-x animate-fade-in-up delay-300">
                Web2 to Web3
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              We're a Web3-focused company based in <span className="text-primary font-semibold">[City/Country]</span>,
              accelerating the adoption of blockchain through education, events, and dev services.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Whether you're a startup, developer, or enterprise, we help you understand, build, and grow in the
              decentralized world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/80 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Story</span>
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Founded with a vision to democratize Web3 education, Elastikchain emerged from the recognition that
                  the blockchain revolution needed more than just technology—it needed accessible education and
                  community building.
                </p>

                <p className="text-lg">
                  Our journey began when our founders, experienced in both traditional tech and emerging blockchain
                  technologies, saw the gap between Web2 professionals and the Web3 ecosystem. We set out to bridge this
                  divide through hands-on workshops, community events, and tailored technical services.
                </p>

                <p className="text-lg">
                  Today, we've trained over 500 students, delivered 50+ workshops, and partnered with 25+ enterprises to
                  help them navigate their Web3 transformation journey.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                    2023
                  </div>
                  <div className="text-gray-400 text-sm">Founded</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                    500+
                  </div>
                  <div className="text-gray-400 text-sm">Students</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                    25+
                  </div>
                  <div className="text-gray-400 text-sm">Partners</div>
                </div>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Elastikchain Team and Web3 Education"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-3xl relative z-10 shadow-2xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 -right-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-600 shadow-2xl animate-bounce delay-500">
                <Target className="w-8 h-8 text-primary" />
              </div>

              <div className="absolute bottom-10 -left-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-600 shadow-2xl animate-bounce delay-1000">
                <Award className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900/80 to-slate-800/50 relative">
        <ParticleBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make Web3 accessible, understandable, and actionable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Democratize access to Web3 education",
                description:
                  "Making blockchain knowledge accessible to everyone, regardless of their technical background or experience level.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Build community through interactive events",
                description:
                  "Fostering connections and collaboration in Web3 through workshops, hackathons, and networking events.",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Deliver scalable and secure blockchain products",
                description: "Building robust Web3 solutions that enterprises can trust and scale with confidence.",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/80 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach Web3 education and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lock className="w-10 h-10" />,
                emoji: "🔒",
                title: "Security by Design",
                description:
                  "We prioritize security in every solution we build, ensuring robust and trustworthy Web3 applications.",
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                emoji: "💡",
                title: "Education as Empowerment",
                description:
                  "Knowledge is the foundation of Web3 adoption. We believe in empowering through comprehensive education.",
              },
              {
                icon: <Handshake className="w-10 h-10" />,
                emoji: "🤝",
                title: "Collaboration Over Competition",
                description:
                  "The Web3 ecosystem thrives on collaboration. We work together to build a stronger decentralized future.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                emoji: "📈",
                title: "Long-Term Thinking",
                description:
                  "We focus on sustainable growth and long-term value creation in the rapidly evolving Web3 landscape.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-5xl mb-6">{value.emoji}</div>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900/80 to-slate-800/50 relative">
        <ParticleBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of Web3 experts, educators, and developers are passionate about building the
              decentralized future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Co-Founder & CEO",
                expertise: "Blockchain Architecture",
                description: "10+ years in distributed systems and blockchain development",
              },
              {
                name: "Sarah Johnson",
                role: "Co-Founder & CTO",
                expertise: "Smart Contract Development",
                description: "Former Ethereum Foundation developer with expertise in DeFi protocols",
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Education",
                expertise: "Web3 Training",
                description: "Educational technology specialist focused on blockchain curriculum",
              },
              {
                name: "Emily Zhang",
                role: "Lead Developer",
                expertise: "Full-Stack Web3",
                description: "Full-stack developer specializing in dApp development and UX",
              },
              {
                name: "David Kim",
                role: "Community Manager",
                expertise: "Developer Relations",
                description: "Building bridges between developers and the Web3 ecosystem",
              },
              {
                name: "Lisa Thompson",
                role: "Business Development",
                expertise: "Enterprise Solutions",
                description: "Helping enterprises navigate their Web3 transformation journey",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-4">{member.expertise}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900 relative">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-700 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Join Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to learn Web3, build blockchain solutions, or partner with us on events, we're here
              to help you succeed in the decentralized world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#contact"
                className="group relative bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/#services"
                className="group relative border-2 border-primary hover:border-orange-400 text-primary hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Explore Services</span>
                  <Zap className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary via-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-white font-bold text-xl">Elastikchain</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the Web3 generation through education, events, and technical services.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="block text-primary font-semibold text-sm">
                  About
                </Link>
                <Link href="/#services" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">More</h4>
              <div className="space-y-2">
                <Link href="/#events" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Events
                </Link>
                <Link href="/#portfolio" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
                <Link href="/#contact" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
              <span>© 2025 Elastikchain. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the decentralized future.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
