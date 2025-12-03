import React from 'react'
import { motion } from 'framer-motion'
import { Upload, Mic, Languages, Video, CheckCircle, Sparkles } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Upload Seu Vídeo',
      description: 'Faça upload do seu vídeo original em qualquer formato. Nossa plataforma aceita MP4, MOV, AVI e mais.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      number: '02',
      icon: Mic,
      title: 'Processamento de Áudio',
      description: 'IA extrai e analisa o áudio, identificando fala, emoções e pausas naturais para tradução perfeita.',
      color: 'from-cyan-500 to-blue-500',
      delay: 0.2
    },
    {
      number: '03',
      icon: Languages,
      title: 'Tradução Inteligente',
      description: 'GPT-4 traduz seu conteúdo para até 50 idiomas mantendo contexto, tom e intenção original.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      number: '04',
      icon: Video,
      title: 'Sincronização Labial',
      description: 'IA avançada sincroniza os lábios com a nova narração, criando resultado natural e profissional.',
      color: 'from-pink-500 to-red-500',
      delay: 0.4
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Revisão & Publicação',
      description: 'Revise, ajuste se necessário e publique. Vídeos prontos para conquistar audiências globais!',
      color: 'from-green-500 to-emerald-500',
      delay: 0.5
    }
  ]

  return (
    <section id="como-funciona" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-blue-950/10 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-2 border-blue-500/30 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Processo Simples</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Como Funciona a
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mágica da Tradução
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            De um vídeo em português para 50+ idiomas em apenas 5 passos.
            <br />
            <span className="text-cyan-400 font-semibold">Automação completa, resultado profissional.</span>
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 transform -translate-x-1/2 opacity-20"></div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                      <div className="relative bg-gradient-to-br from-blue-950/40 to-black/40 border-2 border-blue-500/30 group-hover:border-blue-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-105">
                        {/* Step number */}
                        <div className={`absolute -top-6 ${isEven ? 'left-8' : 'right-8'} text-8xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-10`}>
                          {step.number}
                        </div>

                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${step.color}`}>
                            <Icon className="w-8 h-8 text-white relative z-10" />
                            <div className="absolute inset-0 bg-white rounded-2xl blur opacity-50"></div>
                          </div>

                          {/* Text content */}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center circle indicator (desktop only) */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: step.delay + 0.2 }}
                      className="relative"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl`}>
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color}`}></div>
                        </div>
                      </div>
                      {/* Pulse effect */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-50`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-2 border-blue-500/30 rounded-3xl backdrop-blur-sm">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-3">
                2-4 Horas
              </div>
              <div className="text-lg text-gray-400">
                Tempo médio de processamento completo
              </div>
            </div>

            <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Começar Agora Gratuitamente
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>

            <div className="text-sm text-gray-500">
              ✅ Sem cartão • ✅ Setup grátis • ✅ Suporte 24/7
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
