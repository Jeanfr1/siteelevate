import React from 'react'
import { motion } from 'framer-motion'

const PartnersSection = () => {
  const partners = [
    'Google Cloud',
    'Tencent Cloud',
    'AWS',
    'AXELAR',
    'Ledger',
    'Opera'
  ]

  return (
    <section className="relative py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-8">
            Integrations and tools from leading companies around the globe
          </p>
        </motion.div>

        {/* Partners - simple flex layout */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

