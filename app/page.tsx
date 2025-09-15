"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Users,
  Calendar,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Calculator,
  BookOpen,
  Code,
  Layers,
  Cpu,
  Database,
  Lock,
  Lightbulb,
  Handshake,
  TrendingUp,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Github,
  Linkedin,
  ExternalLink,
  Heart,
  Menu,
  X,
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
  const particles = Array.from({ length: 30 }, (_, i) => ({
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

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mouse tracking for 3D perspective
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const transform3D = {
    transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
    transition: "transform 0.1s ease-out",
  }

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
            <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {["Services", "Events", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
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
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              {["Services", "Events", "Portfolio", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <ParticleBackground />

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/30 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
        </div>

        {/* Decorative Glow Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-ping delay-2000"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Enhanced Subtitle */}
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-orange-400 group-hover:w-16 transition-all duration-300"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-semibold text-lg tracking-wide">
                Workshops • Events • Web3 Solutions
              </span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Main Title */}
            <h1 className="text-5xl lg:text-8xl font-black leading-tight">
              <span className="block text-white animate-fade-in-up">Empowering the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-400 animate-gradient-x animate-fade-in-up delay-300">
                Web3 Generation
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              We help{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 font-medium">
                individuals, teams, and enterprises
              </span>{" "}
              unlock the power of blockchain through hands-on education and tailored technical services.
            </p>

            {/* Enhanced Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group relative bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <span>Book a Workshop</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button className="group relative border-2 border-primary hover:border-orange-400 text-primary hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button className="group relative bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-slate-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Join Our Community</span>
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div
              className={`flex items-center space-x-8 pt-8 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {[
                { number: "500+", label: "Students Trained" },
                { number: "50+", label: "Workshops Delivered" },
                { number: "25+", label: "Enterprise Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  {index < 2 && (
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Content - 3D Illustration */}
          <div
            className={`relative transform transition-all duration-1000 delay-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={transform3D}
          >
            <div className="relative">
              {/* Main 3D Crypto Illustration with enhanced effects */}
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <Image
                  src="/placeholder.svg?height=700&width=700"
                  alt="3D Crypto Blockchain Network Illustration"
                  width={700}
                  height={700}
                  className="w-full h-auto animate-float relative z-10 drop-shadow-2xl"
                />
              </div>

              {/* Enhanced Floating Tech Icons */}
              <div className="absolute top-1/4 -left-12 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-600 shadow-2xl animate-bounce delay-500 group hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-primary" />
              </div>

              <div className="absolute bottom-1/3 -right-12 bg-gradient-to-l from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-600 shadow-2xl animate-bounce delay-1000 group hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-blue-400" />
              </div>

              <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-600 shadow-2xl animate-bounce delay-1500 group hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-green-400" />
              </div>

              <div className="absolute top-3/4 right-0 bg-gradient-to-l from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-600 shadow-2xl animate-bounce delay-2000 group hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-4 bg-gradient-to-b from-primary to-orange-400 rounded-full mt-2 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/80 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Mission</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Democratize access to Web3 education",
                description: "Making blockchain knowledge accessible to everyone",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Build community through interactive events",
                description: "Fostering connections and collaboration in Web3",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Deliver scalable and secure blockchain products",
                description: "Building the infrastructure for tomorrow",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900/80 to-slate-800/50 relative">
        <ParticleBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lock className="w-10 h-10" />,
                emoji: "🔒",
                title: "Security by Design",
                description: "Building with security as the foundation",
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                emoji: "💡",
                title: "Education as Empowerment",
                description: "Knowledge is the key to Web3 adoption",
              },
              {
                icon: <Handshake className="w-10 h-10" />,
                emoji: "🤝",
                title: "Collaboration Over Competition",
                description: "Growing together in the Web3 ecosystem",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                emoji: "📈",
                title: "Long-Term Thinking",
                description: "Building for the future of decentralization",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/80 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                secondaryIcon: <Calculator className="w-6 h-6" />,
                title: "Web3 Workshops & Training",
                topics: ["Blockchain", "Smart Contracts", "dApps", "Tokenomics"],
                audience: "Developers, Product Teams, Founders",
                gradient: "from-primary to-orange-400",
              },
              {
                icon: <Code className="w-10 h-10" />,
                secondaryIcon: <Cpu className="w-6 h-6" />,
                title: "Technical Services",
                topics: ["dApp development", "Smart Contracts", "APIs", "DAOs"],
                audience: "Enterprises, Startups, Web3 Projects",
                gradient: "from-blue-400 to-purple-400",
              },
              {
                icon: <Calendar className="w-10 h-10" />,
                secondaryIcon: <Users className="w-6 h-6" />,
                title: "Event Support & Partnerships",
                topics: ["Hackathons", "Panels", "Meetups", "Speaking Engagements"],
                audience: "Communities, Organizations, Conferences",
                gradient: "from-green-400 to-teal-400",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon container */}
                <div
                  className={`relative mb-6 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{service.icon}</div>
                  <div className="absolute -top-2 -right-2 bg-slate-800 rounded-full p-1 border-2 border-slate-700">
                    <div className="text-gray-300">{service.secondaryIcon}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-primary font-semibold mb-2">Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-400 font-semibold mb-2">Audience:</p>
                  <p className="text-gray-300">{service.audience}</p>
                </div>

                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-orange-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Partners Section */}
      <section id="events" className="py-24 px-6 bg-gradient-to-b from-slate-900/80 to-slate-800/50 relative">
        <ParticleBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Events &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Partners
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "ETHGlobal / Devconnect",
                description: "Official partner for global hackathons",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "University Workshops",
                description: "Educational programs at leading institutions",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "DAO Collaborations",
                description: "Working with decentralized organizations",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Mode, Polygon Guild, Safe",
                description: "Strategic partnerships with Web3 leaders",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{partner.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                  {partner.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/80 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Event{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Gallery</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=400&query=Web3 workshop event photo ${i + 1}`}
                  alt={`Event ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">Workshop Event {i + 1}</p>
                    <p className="text-gray-300 text-xs">Web3 Education Session</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Twitter Feed Module */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Twitter className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Latest Updates</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Follow us on Twitter for the latest Web3 insights and event announcements
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
                <Twitter className="w-5 h-5" />
                <span>Follow @Elastikchain</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-slate-900/80 to-slate-800/50 relative">
        <ParticleBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Portfolio
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "DeFi Trading Platform", category: "Web3", tags: ["React", "Solidity", "Web3.js"] },
              { title: "NFT Marketplace", category: "Web3", tags: ["Next.js", "IPFS", "Smart Contracts"] },
              { title: "DAO Governance Tool", category: "Web3", tags: ["TypeScript", "Ethereum", "Governance"] },
              { title: "E-commerce Platform", category: "Web2", tags: ["React", "Node.js", "PostgreSQL"] },
              { title: "Mobile Banking App", category: "Web2", tags: ["React Native", "API", "Security"] },
              { title: "Analytics Dashboard", category: "Web2", tags: ["Vue.js", "D3.js", "Real-time"] },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === "Web3"
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Us</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">contact@elastikchain.xyz</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Remote or [City/Country]</p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center space-x-3 group">
                <Phone className="w-6 h-6" />
                <span>Book a Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
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
                <Link href="/about" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  About
                </Link>
                <a href="#services" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">More</h4>
              <div className="space-y-2">
                <a href="#events" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Events
                </a>
                <a href="#portfolio" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Portfolio
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
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
