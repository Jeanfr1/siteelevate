import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, Maximize } from 'lucide-react'

const Demo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt')
  const [isPlaying, setIsPlaying] = useState(false)

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ]

  const features = [
    {
      title: 'Sincronia Labial Perfeita',
      description: 'IA avançada que ajusta os movimentos labiais para cada idioma',
    },
    {
      title: 'Clonagem de Voz Natural',
      description: 'Mantém o tom, timbre e emoção da voz original',
    },
    {
      title: 'Processamento Rápido',
      description: 'Resultados em minutos, não em dias ou semanas',
    },
    {
      title: 'Qualidade 4K',
      description: 'Mantém a qualidade original do vídeo sem degradação',
    },
  ]

  return (
    <section id="demo" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Veja em Ação</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Demonstração interativa do nosso workflow de tradução de avatares
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-4 hover:shadow-2xl transition-shadow duration-300">
              {/* Video Container */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video mb-4">
                {/* Placeholder for video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" onClick={() => setIsPlaying(false)} />
                      ) : (
                        <Play className="w-10 h-10 text-white ml-1" onClick={() => setIsPlaying(true)} />
                      )}
                    </div>
                    <p className="text-gray-400">Demonstração de Avatar em {languages.find(l => l.code === selectedLanguage)?.name}</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <button className="text-white hover:text-teal-400 transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <div className="flex-1 mx-4 h-1 bg-gray-700 rounded-full">
                      <div className="h-full w-1/3 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full"></div>
                    </div>
                    <button className="text-white hover:text-teal-400 transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Language Selector */}
              <div>
                <p className="text-gray-400 mb-3 font-medium">Selecione o idioma:</p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`p-3 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                        selectedLanguage === lang.code
                          ? 'bg-gradient-to-r from-teal-500 to-purple-600 text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Tecnologia de Ponta
            </h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <button className="w-full bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">
                Começar Agora
              </button>
              <p className="text-center text-gray-400 mt-4 text-sm">
                Sem necessidade de cartão de crédito para testar
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Demo






