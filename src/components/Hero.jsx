import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-black min-h-[95vh] flex items-center">
      {/* Video Background - Workflow Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Workflow Background - Pure CSS */}
        <div className="absolute inset-0 opacity-20">
          {/* Flowing lines animation */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Animated flowing paths */}
            <g filter="url(#glow)">
              <path
                d="M 0,100 Q 250,50 500,100 T 1000,100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 0,200 Q 250,150 500,200 T 1000,200"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
              <path
                d="M 0,300 Q 250,250 500,300 T 1000,300"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '2s' }}
              />
            </g>

            {/* Flowing particles */}
            <circle cx="100" cy="100" r="4" fill="#3b82f6" className="animate-ping" />
            <circle cx="500" cy="200" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="900" cy="300" r="4" fill="#8b5cf6" className="animate-ping" style={{ animationDelay: '2s' }} />
          </svg>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black/50 to-black"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Extra floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border-2 border-blue-400/50 backdrop-blur-md shadow-2xl shadow-blue-500/30 overflow-hidden group">
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              animate={{
                rotate: [0, 14, -14, 0],
                scale: [1, 1.2, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-base relative z-10"
            >
              ⚡
            </motion.span>
            <span className="text-sm font-bold text-blue-300 uppercase tracking-wider relative z-10">
              Automação N8N
            </span>
            <span className="text-xs text-gray-400 relative z-10">·</span>
            <span className="text-sm font-bold text-cyan-300 relative z-10">Tradução IA</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-base relative z-10"
            >
              🚀
            </motion.span>
          </div>
        </motion.div>

        {/* Main heading - clean and simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-8">
            <motion.span
              className="block text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Internacionalização
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              com IA
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            Traduza vídeos para 50+ idiomas com sincronização labial perfeita.
            <br />
            <span className="text-blue-400 font-semibold">Automação N8N completa</span> ·
            <span className="text-cyan-400 font-semibold"> IA de ponta</span> ·
            <span className="text-purple-400 font-semibold"> Resultados profissionais</span>
          </motion.p>
        </motion.div>

        {/* Simple CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
        >
          <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/30">
            <span>Começar Agora</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-3.5 rounded-lg font-semibold border-2 border-blue-500/50 text-white hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-200">
            Obter ELEVATE
          </button>
        </motion.div>

        {/* Simple stats - 3 columns, with colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { label: 'Custo Médio por Tradução', value: '~$0.002', color: 'from-blue-400 to-cyan-400' },
            { label: 'Total de Vídeos Traduzidos', value: '434,785', color: 'from-cyan-400 to-blue-500' },
            { label: 'Nós Validadores', value: '3,200', color: 'from-blue-500 to-purple-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="group bg-gradient-to-br from-blue-950/30 to-black/30 border border-blue-500/20 hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 hover:scale-105"
            >
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-semibold">
                {stat.label}
              </div>
              <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

