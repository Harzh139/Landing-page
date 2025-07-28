'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, Zap, TrendingUp, Users, Target, Sparkles } from 'lucide-react'
import Modal from '@/components/ui/Modal'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: '500%', label: 'Growth Rate', color: 'from-purple-500 to-pink-500' },
    { icon: Target, value: '99.9%', label: 'Uptime', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg" style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-1"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-2"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-purple-600 mr-3" />
            <span className="text-purple-800 font-semibold">AI-Powered Marketing Suite</span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-hero mb-8 animate-slide-up">
            Transform Your
            <span className="block gradient-text">Marketing with AI</span>
          </h1>

          {/* Premium Subtitle */}
          <p className="text-subtitle mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Create stunning campaigns, analyze performance, and grow your brand with our comprehensive AI-powered marketing suite. 
            Experience the future of digital marketing.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="button-premium group">
              <span className="flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="button-premium-secondary group" onClick={() => setShowDemo(true)}>
              <span className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="card-premium group">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-float-delay-1"></div>
      <AnimatePresence>
        {showDemo && (
          <Modal isOpen={showDemo} onClose={() => setShowDemo(false)} size="xl" title="ADmyBRAND AI Suite Demo" showCloseButton={true}>
            <div className="w-full aspect-video max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                              <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="ADmyBRAND AI Suite Demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="rounded-xl w-full h-72 md:h-96"
                />
              </motion.div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero 