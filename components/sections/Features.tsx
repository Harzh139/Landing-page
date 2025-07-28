'use client'

import React from 'react'
import { Brain, BarChart3, Target, Zap, Users, Shield, TrendingUp, Sparkles } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Campaigns',
      description: 'Create compelling marketing campaigns with our advanced AI that understands your audience and optimizes for maximum engagement.',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'premium-gradient'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your marketing performance with real-time analytics and predictive modeling.',
      color: 'from-purple-500 to-pink-500',
      gradient: 'premium-gradient-2'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Reach the right audience at the right time with our intelligent targeting algorithms.',
      color: 'from-green-500 to-emerald-500',
      gradient: 'premium-gradient-3'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Let AI optimize your campaigns in real-time for better performance and ROI.',
      color: 'from-orange-500 to-red-500',
      gradient: 'premium-gradient'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Understand your audience better with detailed demographic and behavioral analysis.',
      color: 'from-indigo-500 to-purple-500',
      gradient: 'premium-gradient-2'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security ensures your data and campaigns are always protected.',
      color: 'from-gray-500 to-slate-500',
      gradient: 'premium-gradient-3'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track your marketing ROI with comprehensive reporting and attribution modeling.',
      color: 'from-teal-500 to-cyan-500',
      gradient: 'premium-gradient'
    },
    {
      icon: Sparkles,
      title: 'Creative AI',
      description: 'Generate stunning visuals, copy, and content with our creative AI assistant.',
      color: 'from-pink-500 to-rose-500',
      gradient: 'premium-gradient-2'
    }
  ]

  return (
    <section id="features" className="py-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-purple-600 mr-3" />
            <span className="text-purple-800 font-semibold">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ lineHeight: '1.3', paddingBottom: '0.1em' }}>
            Everything You Need to
            <span className="block gradient-text">Succeed in Marketing</span>
          </h2>
          <p className="text-subtitle max-w-4xl mx-auto">
            Our AI-powered suite provides all the tools you need to create, optimize, and scale your marketing campaigns with unprecedented precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-premium`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Join thousands of marketers who are already using ADmyBRAND AI Suite to grow their businesses with unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="button-premium group">
                <span className="flex items-center">
                  Start Free Trial
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <button className="button-premium-secondary group">
                <span className="flex items-center">
                  Schedule Demo
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 