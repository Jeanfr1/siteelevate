import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO, TechGlobal',
      image: '👩‍💼',
      content: 'Conseguimos expandir para 12 novos mercados em apenas 3 meses. A qualidade da tradução e sincronização labial é impressionante!',
      rating: 5,
    },
    {
      name: 'João Santos',
      role: 'Diretor de Marketing, EduPlus',
      image: '👨‍💼',
      content: 'Nossos cursos online agora estão disponíveis em 15 idiomas. O ROI foi imediato e nossos alunos adoraram a experiência personalizada.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Fundadora, ContentPro',
      image: '👩‍🎨',
      content: 'A automação do workflow N8N economizou 80% do nosso tempo de produção. Simplesmente revolucionário para criadores de conteúdo.',
      rating: 5,
    },
  ]

  const companies = [
    { name: 'TechGlobal', logo: '🏢' },
    { name: 'EduPlus', logo: '🎓' },
    { name: 'ContentPro', logo: '🎬' },
    { name: 'StartupX', logo: '🚀' },
    { name: 'MediaCorp', logo: '📺' },
    { name: 'BrandVoice', logo: '🎤' },
  ]

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 mb-8 text-lg">Confiado por empresas líderes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-2 glass-effect px-6 py-3 rounded-lg hover:scale-110 transition-transform"
              >
                <span className="text-3xl">{company.logo}</span>
                <span className="text-gray-300 font-semibold">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">O que dizem nossos clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubra como empresas estão transformando seu alcance global
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 glass-effect rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
              <div className="text-gray-400">Vídeos Traduzidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">200+</div>
              <div className="text-gray-400">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-gray-400">Avaliação Média</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof






