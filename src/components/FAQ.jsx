import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Como funciona a tradução automática com sincronização labial?',
      answer: 'Nosso workflow N8N utiliza IA de ponta (GPT-4 para tradução e HeyGen para sincronização labial) para processar seu vídeo em múltiplos idiomas mantendo a naturalidade e emoção do conteúdo original. O processo leva de 2 a 4 horas por vídeo.'
    },
    {
      question: 'Quantos idiomas são suportados?',
      answer: 'Atualmente suportamos mais de 50 idiomas, incluindo Português, Inglês, Espanhol, Francês, Alemão, Mandarim, Japonês, Coreano, Árabe, Hindi, e muitos outros. A lista completa está disponível na documentação.'
    },
    {
      question: 'Qual é o custo por vídeo traduzido?',
      answer: 'O custo varia entre R$ 12 e R$ 35 por vídeo, dependendo da duração e complexidade. Isso é 100x mais barato que contratar equipes multilíngues tradicionais que cobram R$ 3.500+ por vídeo.'
    },
    {
      question: 'Preciso de conhecimento técnico para usar?',
      answer: 'Não! Nossa solução é plug-and-play. A instalação leva apenas 15 minutos e oferecemos setup gratuito + suporte dedicado 24/7. Você não precisa saber programar ou entender de IA.'
    },
    {
      question: 'Qual é a garantia?',
      answer: 'Oferecemos garantia incondicional de 30 dias. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento, sem perguntas.'
    },
    {
      question: 'Como posso começar?',
      answer: 'É simples! Clique no botão "Começar Agora", preencha o formulário rápido e nossa equipe entrará em contato em até 2 horas para fazer o setup gratuito. Você estará traduzindo vídeos no mesmo dia.'
    },
    {
      question: 'A qualidade da tradução é confiável?',
      answer: 'Sim! Utilizamos GPT-4, a IA mais avançada do mundo para tradução, com 99.2% de precisão. Além disso, você pode revisar e ajustar as traduções antes de publicar.'
    },
    {
      question: 'Posso escalar sem limites?',
      answer: 'Absolutamente! Nossa automação N8N processa quantos vídeos você precisar, simultaneamente. Não há limite de volume. Quanto mais você traduz, menor fica seu custo unitário.'
    }
  ]

  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-blue-950/5 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-full mb-8">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Perguntas Frequentes</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Dúvidas? <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Respondidas</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre nossa solução de tradução automatizada
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  relative rounded-2xl border-2 transition-all duration-300
                  ${isOpen
                    ? 'bg-gradient-to-br from-blue-950/40 to-black/40 border-blue-500/50'
                    : 'bg-blue-950/20 border-blue-500/20 hover:border-blue-500/40'
                  }
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                >
                  <span className={`
                    text-lg font-bold transition-colors
                    ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                  `}>
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      flex-shrink-0 p-2 rounded-lg transition-colors
                      ${isOpen ? 'bg-blue-500/20' : 'bg-blue-950/30 group-hover:bg-blue-500/20'}
                    `}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
            Falar com Especialista
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
