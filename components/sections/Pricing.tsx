'use client'

import React, { useState } from 'react'
import { Check, Star, Sparkles, Zap } from 'lucide-react'
import PricingCalculator from './PricingCalculator'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? 29 : 39,
      description: 'Perfect for small businesses and startups',
      features: [
        'AI-powered campaign creation',
        'Basic analytics dashboard',
        'Up to 5 campaigns',
        'Email support',
        'Standard templates',
        'Basic targeting options'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'premium-gradient'
    },
    {
      name: 'Professional',
      price: isAnnual ? 99 : 129,
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        'Everything in Starter',
        'Advanced AI optimization',
        'Unlimited campaigns',
        'Priority support',
        'Custom templates',
        'Advanced targeting',
        'A/B testing',
        'Performance analytics'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      gradient: 'premium-gradient-2'
    },
    {
      name: 'Enterprise',
      price: isAnnual ? 299 : 399,
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'White-label solutions',
        'Dedicated account manager',
        'API access',
        'Advanced integrations',
        'Custom reporting',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500',
      gradient: 'premium-gradient-3'
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-gradient-bg relative overflow-hidden">
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
            <span className="text-purple-800 font-semibold">Simple Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Simple, Transparent
            <span className="block gradient-text">Pricing</span>
          </h2>
          <p className="text-subtitle max-w-4xl mx-auto mb-12">
            Choose the perfect plan for your business. All plans include a 14-day free trial with full access to all features.
          </p>

          {/* Premium Billing Toggle */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <span className={`text-lg font-medium transition-colors duration-300 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-500 ${
                isAnnual ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-premium' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-all duration-500 shadow-lg ${
                  isAnnual ? 'translate-x-3 translate-y-0.5' : 'translate-x-1 translate-y-0.5'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors duration-300 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 text-purple-600 font-bold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Premium Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card-premium group overflow-hidden ${
                plan.popular ? 'scale-105 shadow-premium-hover' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center shadow-premium">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="p-8 relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                  
                  {/* Premium Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 text-lg">/month</span>
                  </div>

                  {/* Premium CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-500 ${
                    plan.popular
                      ? 'button-premium group'
                      : 'bg-white/80 backdrop-blur-md border border-gray-200 text-gray-900 hover:bg-white hover:scale-105 hover:shadow-premium'
                  }`}>
                    <span className="flex items-center justify-center">
                      Start Free Trial
                      <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Premium Features */}
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 mb-6 text-lg">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start group">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <PricingCalculator isAnnual={isAnnual} />

        {/* Premium Additional Info */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg">
              Need a custom plan? Contact our sales team for enterprise solutions.
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-bold text-lg transition-colors duration-300 group">
              Contact Sales 
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 