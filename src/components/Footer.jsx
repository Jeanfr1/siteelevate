import React from 'react'
import { Globe, Mail, Twitter, Linkedin, Github, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Demonstração', href: '#demo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-purple-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer id="contato" className="relative border-t border-blue-500/10 bg-gradient-to-b from-black via-blue-950/5 to-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                S-Elevate
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Traduza seus vídeos para 50+ idiomas com IA e sincronização labial perfeita.
              Expanda sua marca globalmente.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-blue-950/30 rounded-lg border border-blue-500/20 ${social.color} transition-all duration-300 hover:scale-110 hover:border-blue-500/50`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6 text-lg">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4 text-lg">Fique por Dentro</h3>
            <p className="text-gray-400 text-sm mb-6">
              Receba dicas, novidades e ofertas exclusivas direto no seu email.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-blue-950/30 border border-blue-500/20 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <button className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                Inscrever-se
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">S-Elevate</span>.
              Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Termos de Uso
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Privacidade
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  )
}

export default Footer
