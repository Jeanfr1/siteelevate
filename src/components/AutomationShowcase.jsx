import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Zap, Database, Cpu, CheckCircle2, ArrowRight } from 'lucide-react'

const AutomationShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [codeLines, setCodeLines] = useState([])

  const steps = [
    {
      id: 1,
      title: 'Receber Vídeo',
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      code: [
        '// Webhook recebe upload',
        'const video = await receiveVideo()',
        'console.log("Vídeo recebido:", video.id)',
      ],
      status: 'processing'
    },
    {
      id: 2,
      title: 'Extrair Áudio',
      icon: Cpu,
      color: 'from-cyan-500 to-cyan-600',
      code: [
        '// FFmpeg extrai áudio',
        'const audio = await extractAudio(video)',
        'console.log("Áudio extraído:", audio.duration)',
      ],
      status: 'processing'
    },
    {
      id: 3,
      title: 'Transcrever',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      code: [
        '// Whisper API transcribe',
        'const transcript = await whisper.transcribe(audio)',
        'console.log("Transcrição:", transcript.text)',
      ],
      status: 'processing'
    },
    {
      id: 4,
      title: 'Traduzir',
      icon: Zap,
      color: 'from-pink-500 to-pink-600',
      code: [
        '// GPT-4 traduz para múltiplos idiomas',
        'const translations = await translateToMany(transcript)',
        'console.log("Idiomas:", translations.length)',
      ],
      status: 'processing'
    },
    {
      id: 5,
      title: 'Sincronizar',
      icon: CheckCircle2,
      color: 'from-green-500 to-green-600',
      code: [
        '// Sync labial com IA',
        'const synced = await lipSync(video, translations)',
        'console.log("✓ Concluído!")',
      ],
      status: 'complete'
    },
  ]

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Type code effect
  useEffect(() => {
    setCodeLines([])
    const currentCode = steps[currentStep].code
    let lineIndex = 0

    const typeInterval = setInterval(() => {
      if (lineIndex < currentCode.length) {
        setCodeLines(prev => [...prev, currentCode[lineIndex]])
        lineIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 400)

    return () => clearInterval(typeInterval)
  }, [currentStep])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

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
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Automação N8N</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Por Baixo dos Panos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja como a automação processa seu vídeo em tempo real
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps Flow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.4,
                  x: 0,
                  scale: currentStep === index ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
                className={`
                  relative p-6 rounded-2xl border transition-all duration-500
                  ${currentStep === index
                    ? 'bg-gradient-to-r ' + step.color + '/20 border-2 border-blue-400 shadow-xl shadow-blue-500/30'
                    : 'bg-blue-950/10 border-blue-500/20'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`
                    relative p-4 rounded-xl transition-all duration-500
                    ${currentStep === index
                      ? 'bg-gradient-to-br ' + step.color + ' shadow-2xl'
                      : 'bg-blue-950/30'
                    }
                  `}>
                    {currentStep === index && (
                      <div className="absolute inset-0 bg-white rounded-xl blur-xl opacity-50 animate-pulse"></div>
                    )}
                    <step.icon className={`w-6 h-6 relative z-10 ${currentStep === index ? 'text-white' : 'text-gray-500'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-bold ${currentStep === index ? 'text-white' : 'text-gray-500'}`}>
                        {step.title}
                      </h3>
                      {currentStep > index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Progress bar */}
                    {currentStep === index && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3 }}
                        className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                      />
                    )}
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className={`w-5 h-5 ${currentStep === index ? 'text-blue-400' : 'text-gray-700'}`} />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              {/* Terminal header */}
              <div className="bg-gray-800/50 px-6 py-4 flex items-center justify-between border-b border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">automation.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-semibold">RUNNING</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm min-h-[400px] bg-black/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step header */}
                    <div className="mb-4">
                      <span className="text-gray-500"># Step {currentStep + 1}/{steps.length}</span>
                      <div className={`text-lg font-bold bg-gradient-to-r ${steps[currentStep].color} bg-clip-text text-transparent`}>
                        {steps[currentStep].title}
                      </div>
                    </div>

                    {/* Code lines with typing effect */}
                    <div className="space-y-3">
                      {codeLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-gray-600 select-none">{index + 1}</span>
                          <span className={
                            line?.startsWith('//')
                              ? 'text-gray-500 italic'
                              : line?.includes('console.log')
                              ? 'text-purple-400'
                              : line?.includes('await')
                              ? 'text-blue-400'
                              : line?.includes('const')
                              ? 'text-cyan-400'
                              : 'text-green-400'
                          }>
                            {line}
                          </span>
                        </motion.div>
                      ))}

                      {/* Cursor */}
                      {codeLines.length > 0 && (
                        <motion.div
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block w-2 h-5 bg-cyan-400 ml-8"
                        />
                      )}
                    </div>

                    {/* Output */}
                    {codeLines.length === steps[currentStep].code.length && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 p-4 bg-blue-950/30 border-l-4 border-cyan-400 rounded"
                      >
                        <div className="text-gray-400 text-xs mb-2">OUTPUT:</div>
                        <div className="text-cyan-400">
                          ✓ {steps[currentStep].title} executado com sucesso
                        </div>
                        <div className="text-gray-500 text-xs mt-1">
                          Duration: {(Math.random() * 2 + 0.5).toFixed(2)}s
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating particles around terminal */}
            <div className="absolute -z-10 inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Steps Automatizados', value: '12+', icon: '⚡' },
            { label: 'APIs Integradas', value: '8', icon: '🔌' },
            { label: 'Tempo Economizado', value: '95%', icon: '⏱️' },
            { label: 'Precisão', value: '99.2%', icon: '🎯' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-950/30 to-black/30 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AutomationShowcase

