import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Building2, Shield, Briefcase } from 'lucide-react'

const EcosystemSection = () => {
  const ecosystemCards = [
    {
      icon: <Building2 className="w-6 h-6" />,
      count: '123',
      label: 'Projetos',
      description: 'Uma nova dimensão de utilidade construída no S-Elevate',
      color: 'cyan'
    },
    {
      icon: <Users className="w-6 h-6" />,
      count: '96',
      label: 'Parceiros',
      description: 'Conectados com as principais plataformas e protocolos',
      color: 'blue'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      count: '75',
      label: 'Validadores',
      description: 'Protegendo a rede e ganhando recompensas',
      color: 'cyan'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      count: '31',
      label: 'Provedores de Serviço',
      description: 'Conecte seu negócio com a rede S-Elevate',
      color: 'blue'
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Descubra nosso ecossistema
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Explore projetos e parceiros de todo o mundo que escolheram construir usando a tecnologia S-Elevate
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ecosystemCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${card.color}-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-${card.color}-500/20 to-blue-500/20 text-${card.color}-400 mb-6`}>
                  {card.icon}
                </div>

                {/* Count */}
                <div className={`text-5xl font-black bg-gradient-to-r from-${card.color}-400 to-blue-400 bg-clip-text text-transparent mb-2`}>
                  {card.count}
                </div>

                {/* Label */}
                <div className="text-xl font-bold text-white mb-3">
                  {card.label}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-cyan-400 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center space-x-3">
            <span>Explorar o Ecossistema</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default EcosystemSection






