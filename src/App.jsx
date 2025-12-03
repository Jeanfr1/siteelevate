import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnersSection from './components/PartnersSection'
import VisualDemo from './components/VisualDemo'
import AutomationShowcase from './components/AutomationShowcase'
import GlobalMap from './components/GlobalMap'
import FeaturesGrid from './components/FeaturesGrid'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PartnersSection />
      <VisualDemo />
      <AutomationShowcase />
      <GlobalMap />
      <FeaturesGrid />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

