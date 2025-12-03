import React, { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Demonstração', href: '#demo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // 80px para compensar a navbar fixa
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - with gradient */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <Globe className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              S-Elevate
            </span>
          </div>

          {/* Desktop Navigation - clean */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-500/30">
              Começar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - clean */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/5">
          <div className="px-6 pt-6 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-2 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

