import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, TrendingDown, TrendingUp, Clock, DollarSign, Users, Globe2, Zap, AlertCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const FeaturesGrid = () => {
  const [activeTab, setActiveTab] = useState('sem')

  // Dados de comparação Antes vs Depois
  const comparison = {
    sem: {
      title: 'Sem Automação',
      subtitle: 'O custo real de ficar parado',
      color: 'from-red-500 to-orange-500',
      icon: TrendingDown,
      items: [
        { icon: X, label: 'Contratar equipe multilíngue', value: 'R$ 45.000/mês', pain: 'Alto custo fixo' },
        { icon: X, label: 'Tempo de produção manual', value: '15-30 dias', pain: 'Perda de oportunidades' },
        { icon: X, label: 'Alcance limitado', value: '2-3 idiomas', pain: 'Mercado restrito' },
        { icon: X, label: 'Qualidade inconsistente', value: 'Variável', pain: 'Risco de marca' },
        { icon: X, label: 'Escalabilidade', value: 'Impossível', pain: 'Crescimento travado' },
        { icon: X, label: 'Custo por vídeo', value: 'R$ 3.500+', pain: 'Margem comprometida' },
      ]
    },
    com: {
      title: 'Com ELEVATE',
      subtitle: 'O poder da automação inteligente',
      color: 'from-green-500 to-emerald-500',
      icon: TrendingUp,
      items: [
        { icon: Check, label: 'Workflow 100% automatizado', value: 'R$ 497/mês', pain: 'Investimento fixo baixo' },
        { icon: Check, label: 'Processamento em tempo real', value: '2-4 horas', pain: 'Velocidade 10x maior' },
        { icon: Check, label: 'Alcance global ilimitado', value: '50+ idiomas', pain: 'Mundo inteiro disponível' },
        { icon: Check, label: 'IA garante consistência', value: '99.2% precisão', pain: 'Marca protegida' },
        { icon: Check, label: 'Escala infinita', value: 'Automático', pain: 'Crescimento sem limite' },
        { icon: Check, label: 'Custo por vídeo', value: 'R$ 12-35', pain: 'Margem 100x maior' },
      ]
    }
  }

  const urgencyFeatures = [
    {
      icon: AlertCircle,
      title: 'Seus Concorrentes Já Estão Expandindo',
      description: 'Enquanto você hesita, empresas similares estão conquistando mercados internacionais com automação.',
      stat: '73%',
      statLabel: 'das empresas que automatizam crescem 3x mais rápido',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Cada Dia Sem Automação = R$ 2.847 Perdidos',
      description: 'Este é o custo médio de oportunidade de não alcançar audiências internacionais. Você pode se dar ao luxo de esperar?',
      stat: 'R$ 85k',
      statLabel: 'perdidos por mês em oportunidades não capturadas',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe2,
      title: 'Mercado Global Esperando Por Você',
      description: 'Há 7.9 bilhões de pessoas no mundo. Se seu conteúdo está em apenas 1 idioma, você está ignorando 93% do mercado.',
      stat: '93%',
      statLabel: 'do mercado global está inacessível sem tradução',
      color: 'from-blue-500 to-cyan-500'
    },
  ]

  const painPoints = [
    {
      pain: '😰 "Tenho medo de investir em algo que não funcione"',
      solution: '✅ Garantia de 30 dias + Setup gratuito incluso',
    },
    {
      pain: '😰 "Não tenho tempo para implementar ferramentas complexas"',
      solution: '✅ Instalação em 15 minutos + Suporte dedicado 24/7',
    },
    {
      pain: '😰 "E se a qualidade da tradução não for boa?"',
      solution: '✅ IA de ponta (GPT-4 + HeyGen) com 99.2% de precisão',
    },
    {
      pain: '😰 "Preciso de aprovação da diretoria"',
      solution: '✅ ROI de 2800% comprovado em 90 dias - números que vendem sozinhos',
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-blue-950/5 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header com urgência */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge de urgência */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500/50 rounded-full mb-8"
          >
            <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-sm font-bold text-red-300 uppercase tracking-wider">
              ⚠️ Você está perdendo R$ 2.847/dia sem automação
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Pare de Perder Dinheiro
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comece a Escalar Globalmente
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enquanto você traduz manualmente, seus concorrentes já conquistaram
            <span className="text-cyan-400 font-bold"> 50+ mercados</span> com automação.
            <br />
            <span className="text-red-400 font-semibold">Quanto tempo você pode esperar?</span>
          </p>
        </motion.div>

        {/* Comparação Antes vs Depois - TABS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          {/* Tab Headers */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(comparison).map((key) => {
              const tab = comparison[key]
              const Icon = tab.icon
              const isActive = activeTab === key

              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300
                    ${isActive
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl`
                      : 'bg-blue-950/20 text-gray-400 hover:bg-blue-950/40'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r rounded-2xl blur-xl opacity-50"
                      style={{ background: `linear-gradient(to right, ${key === 'sem' ? '#ef4444, #f97316' : '#22c55e, #10b981'})` }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    {tab.title}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'sem' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'sem' ? 50 : -50 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className={`
                relative p-12 rounded-3xl border-2
                ${activeTab === 'sem'
                  ? 'bg-gradient-to-br from-red-950/30 to-orange-950/30 border-red-500/30'
                  : 'bg-gradient-to-br from-green-950/30 to-emerald-950/30 border-green-500/30'
                }
              `}>
                <div className="text-center mb-10">
                  <h3 className={`text-3xl font-black mb-3 bg-gradient-to-r ${comparison[activeTab].color} bg-clip-text text-transparent`}>
                    {comparison[activeTab].title}
                  </h3>
                  <p className="text-gray-400 text-lg">{comparison[activeTab].subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {comparison[activeTab].items.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                          p-6 rounded-2xl border transition-all duration-300 hover:scale-105
                          ${activeTab === 'sem'
                            ? 'bg-red-950/20 border-red-500/20 hover:border-red-500/50'
                            : 'bg-green-950/20 border-green-500/20 hover:border-green-500/50'
                          }
                        `}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`
                            p-3 rounded-xl
                            ${activeTab === 'sem' ? 'bg-red-500/20' : 'bg-green-500/20'}
                          `}>
                            <Icon className={`w-6 h-6 ${activeTab === 'sem' ? 'text-red-400' : 'text-green-400'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-semibold mb-2">{item.label}</div>
                            <div className={`text-2xl font-black mb-1 ${activeTab === 'sem' ? 'text-red-400' : 'text-green-400'}`}>
                              {item.value}
                            </div>
                            <div className="text-sm text-gray-500">{item.pain}</div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* CTA dentro do comparison */}
                {activeTab === 'com' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-center"
                  >
                    <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105">
                      <span className="relative z-10 flex items-center gap-3">
                        <Sparkles className="w-6 h-6" />
                        Começar Automação Agora
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </button>
                    <p className="text-sm text-gray-400 mt-4">
                      ✅ Setup gratuito • ✅ Garantia 30 dias • ✅ Suporte 24/7
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Seção de Urgência - 3 cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              O Custo de <span className="text-red-400">Não Agir</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Dados reais que você precisa considerar antes de tomar sua decisão
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {urgencyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                  <div className="relative bg-gradient-to-br from-blue-950/40 to-black/40 border-2 border-blue-500/30 group-hover:border-blue-400/60 rounded-3xl p-8 transition-all duration-300">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h4>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10 border border-white/10`}>
                      <div className={`text-4xl font-black bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-1`}>
                        {feature.stat}
                      </div>
                      <div className="text-sm text-gray-300">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Objeções e Soluções */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              "Mas E Se..." <span className="text-cyan-400">Todas as Respostas</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Entendemos suas preocupações. Veja como eliminamos todos os riscos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-950/30 to-black/30 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="mb-4 text-yellow-400 text-lg font-semibold">
                  {item.pain}
                </div>
                <div className="text-green-400 text-lg font-bold flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>{item.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final Poderoso */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-12 overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ opacity: 0.3 }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Zap className="w-16 h-16 text-yellow-300" />
              </motion.div>

              <h3 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Transforme R$ 497/mês em
                <br />
                R$ 85.000+ de Oportunidades
              </h3>

              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Junte-se às <span className="font-bold text-yellow-300">427 empresas</span> que já expandiram para
                <span className="font-bold text-yellow-300"> 50+ países</span> com automação ELEVATE
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-10 py-5 bg-white text-blue-600 text-xl font-black rounded-2xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 hover:scale-110">
                  <span className="flex items-center gap-3">
                    🚀 Começar Agora - Setup Grátis
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>

                <div className="text-white text-sm">
                  <div className="font-semibold mb-1">✅ Sem cartão de crédito</div>
                  <div className="text-blue-100">✅ Garantia 30 dias</div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-300">30 dias</div>
                  <div className="text-sm text-blue-100">Garantia total</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-300">24/7</div>
                  <div className="text-sm text-blue-100">Suporte dedicado</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-300">15 min</div>
                  <div className="text-sm text-blue-100">Para começar</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default FeaturesGrid
