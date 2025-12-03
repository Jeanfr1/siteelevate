import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Globe, Mic, Video, Languages } from 'lucide-react'

const VisualDemo = () => {
  const [activeLanguage, setActiveLanguage] = useState('pt')

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷', color: 'from-green-400 to-yellow-400' },
    { code: 'en', name: 'English', flag: '🇺🇸', color: 'from-blue-400 to-red-400' },
    { code: 'es', name: 'Español', flag: '🇪🇸', color: 'from-red-400 to-yellow-400' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', color: 'from-blue-400 to-white' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', color: 'from-yellow-400 to-red-400' },
    { code: 'zh', name: '中文', flag: '🇨🇳', color: 'from-red-500 to-yellow-500' },
  ]

  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      {/* Animated connections between cards */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="30%" x2="50%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="50%" y1="50%" x2="90%" y2="30%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30 mb-8">
            <Video className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Demonstração Ao Vivo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Veja a IA em Ação
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traduza avatares para múltiplos idiomas com sincronização labial perfeita
          </p>
        </motion.div>

        {/* Main Video Demo Area */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main video container */}
            <div className="relative bg-gradient-to-br from-blue-950/40 to-black/40 rounded-3xl overflow-hidden border border-blue-500/30 backdrop-blur-sm">
              {/* Video placeholder with animated gradient */}
              <div className="relative aspect-video flex items-center justify-center">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>

                {/* Animated waves */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.3),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* N8N Workflow Visualization */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                  {/* Workflow Nodes */}
                  <div className="relative w-full max-w-4xl">
                    {/* Node 1: Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2"
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl border-2 border-blue-400 shadow-2xl">
                          <Video className="w-8 h-8 text-white mb-2" />
                          <div className="text-xs font-bold text-white">INPUT</div>
                          <div className="text-[10px] text-blue-200">Vídeo Original</div>
                          {/* Progress bar */}
                          <motion.div
                            className="mt-2 h-1 bg-blue-900 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          >
                            <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting Line 1 */}
                    <motion.svg
                      className="absolute left-[150px] top-1/2 -translate-y-1/2 w-[180px] h-2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3.5 }}
                    >
                      <defs>
                        <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <motion.line
                        x1="0" y1="4" x2="180" y2="4"
                        stroke="url(#line1)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Flowing dot */}
                      <motion.circle
                        cx="0"
                        cy="4"
                        r="4"
                        fill="#06b6d4"
                        initial={{ cx: 0 }}
                        animate={{ cx: 180 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3.5 }}
                      />
                    </motion.svg>

                    {/* Node 2: AI Processing */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatDelay: 4 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 rounded-2xl border-2 border-cyan-400 shadow-2xl">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Globe className="w-12 h-12 text-white mb-3 mx-auto" />
                          </motion.div>
                          <div className="text-sm font-bold text-white text-center">AI ENGINE</div>
                          <div className="text-xs text-cyan-200 text-center">Tradução + Sync</div>
                          {/* Animated code lines */}
                          <div className="mt-3 space-y-1">
                            {[60, 80, 45].map((width, i) => (
                              <motion.div
                                key={i}
                                className="h-1 bg-cyan-400/30 rounded"
                                initial={{ width: 0 }}
                                animate={{ width: `${width}%` }}
                                transition={{
                                  duration: 0.8,
                                  delay: 1.5 + i * 0.2,
                                  repeat: Infinity,
                                  repeatDelay: 3.5
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting Line 2 */}
                    <motion.svg
                      className="absolute right-[150px] top-1/2 -translate-y-1/2 w-[180px] h-2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 3.5 }}
                    >
                      <motion.line
                        x1="0" y1="4" x2="180" y2="4"
                        stroke="url(#line1)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Flowing dot */}
                      <motion.circle
                        cx="0"
                        cy="4"
                        r="4"
                        fill="#8b5cf6"
                        initial={{ cx: 0 }}
                        animate={{ cx: 180 }}
                        transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 3.5 }}
                      />
                    </motion.svg>

                    {/* Node 3: Output */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatDelay: 4 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl border-2 border-purple-400 shadow-2xl">
                          <Languages className="w-8 h-8 text-white mb-2" />
                          <div className="text-xs font-bold text-white">OUTPUT</div>
                          <div className="text-[10px] text-purple-200">Multi-idioma</div>
                          {/* Success indicator */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 3.5, repeat: Infinity, repeatDelay: 4 }}
                            className="mt-2 flex items-center justify-center"
                          >
                            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="absolute left-1/2 top-[15%] -translate-x-1/2 text-center"
                    >
                      <div className="bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-500/50">
                        <div className="text-xs font-bold text-cyan-400 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          AUTOMAÇÃO EM EXECUÇÃO
                        </div>
                      </div>
                    </motion.div>

                    {/* Processing indicators at bottom */}
                    <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-6">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-center"
                      >
                        <Mic className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                        <div className="text-[10px] text-blue-300">Áudio</div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        className="text-center"
                      >
                        <Languages className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                        <div className="text-[10px] text-cyan-300">Tradução</div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, delay: 1, repeat: Infinity }}
                        className="text-center"
                      >
                        <Video className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                        <div className="text-[10px] text-purple-300">Sync</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom control bar */}
              <div className="bg-black/50 backdrop-blur-md px-6 py-4 border-t border-blue-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </button>
                    <div className="text-sm text-gray-400">
                      <span className="text-blue-400 font-semibold">00:15</span> / 01:30
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Original: 🇧🇷 Português → {languages.find(l => l.code === activeLanguage)?.flag} {languages.find(l => l.code === activeLanguage)?.name}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Language selector grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">
            Escolha o idioma de destino
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveLanguage(lang.code)}
                className={`
                  relative group p-6 rounded-2xl transition-all duration-300
                  ${activeLanguage === lang.code
                    ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-2 border-blue-500 scale-105 shadow-xl shadow-blue-500/30'
                    : 'bg-gradient-to-br from-blue-950/20 to-black/20 border border-blue-500/20 hover:border-blue-500/50 hover:scale-105'
                  }
                `}
              >
                {/* Glow effect */}
                {activeLanguage === lang.code && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                )}

                <div className="relative">
                  <div className="text-5xl mb-3">{lang.flag}</div>
                  <div className="text-sm font-bold text-white mb-1">{lang.name}</div>
                  <div className="text-xs text-gray-400">{lang.code.toUpperCase()}</div>

                  {/* Active indicator */}
                  {activeLanguage === lang.code && (
                    <motion.div
                      layoutId="active-lang"
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-950/30 via-black/30 to-purple-950/30 rounded-2xl p-8 border border-blue-500/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98.5%', label: 'Precisão de Tradução', icon: '🎯' },
              { value: '<5min', label: 'Tempo de Processamento', icon: '⚡' },
              { value: '50+', label: 'Idiomas Disponíveis', icon: '🌍' },
              { value: '4K', label: 'Qualidade de Vídeo', icon: '📹' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisualDemo

