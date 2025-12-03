import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Globe2, TrendingUp } from 'lucide-react'

const GlobalMap = () => {
  const [activeConnections, setActiveConnections] = useState([])

  const locations = [
    { name: 'São Paulo', x: 30, y: 65, flag: '🇧🇷', translations: 1247 },
    { name: 'New York', x: 25, y: 35, flag: '🇺🇸', translations: 2891 },
    { name: 'London', x: 50, y: 28, flag: '🇬🇧', translations: 1653 },
    { name: 'Tokyo', x: 85, y: 35, flag: '🇯🇵', translations: 3214 },
    { name: 'Paris', x: 51, y: 30, flag: '🇫🇷', translations: 987 },
    { name: 'Berlin', x: 53, y: 27, flag: '🇩🇪', translations: 1432 },
    { name: 'Mumbai', x: 72, y: 50, flag: '🇮🇳', translations: 2156 },
    { name: 'Sydney', x: 87, y: 75, flag: '🇦🇺', translations: 743 },
  ]

  // Simulate real-time connections
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * locations.length)
      const randomIndex2 = Math.floor(Math.random() * locations.length)
      if (randomIndex !== randomIndex2) {
        setActiveConnections(prev => [
          ...prev.slice(-3),
          { from: randomIndex, to: randomIndex2, id: Date.now() }
        ])
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>

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
            <Globe2 className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Escala Global</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Traduções Acontecendo
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Agora Mesmo
            </span>
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-950/20 to-black/20 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm overflow-hidden"
        >
          {/* World map SVG representation */}
          <div className="relative aspect-[2/1] bg-gradient-to-br from-blue-950/10 to-purple-950/10 rounded-2xl overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Animated glow lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
              <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              <defs>
                <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {activeConnections.map((connection) => {
                const from = locations[connection.from]
                const to = locations[connection.to]
                return (
                  <motion.line
                    key={connection.id}
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="url(#connection-gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2 }}
                  />
                )
              })}
            </svg>

            {/* Location dots */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ left: `${location.x}%`, top: `${location.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                {/* Pulsing circle */}
                <div className="relative">
                  <div className="absolute inset-0 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                  <div className="relative w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center border-2 border-blue-400 shadow-xl shadow-blue-500/50 group-hover:scale-125 transition-transform">
                    <div className="text-xs">{location.flag}</div>
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-gradient-to-br from-blue-950 to-black border border-blue-500/50 rounded-xl px-4 py-3 shadow-2xl shadow-blue-500/30 whitespace-nowrap backdrop-blur-md">
                    <div className="text-sm font-bold text-white mb-1">{location.name}</div>
                    <div className="text-xs text-blue-400">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      {location.translations.toLocaleString()} traduções
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Live activity indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-green-400">LIVE</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: 'Traduções Hoje', value: '12,847', trend: '+24%' },
              { label: 'Países Ativos', value: '83', trend: '+5' },
              { label: 'Minutos Processados', value: '47,291', trend: '+18%' },
              { label: 'Uptime', value: '99.9%', trend: '✓' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-green-400 font-semibold">
                  {stat.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalMap






