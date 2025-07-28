'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Users, Zap } from 'lucide-react'

interface PricingCalculatorProps {
  isAnnual: boolean
}

const plans = [
  { name: 'Starter', monthlyBase: 39, annualBase: 29, monthlyPerUser: 39, annualPerUser: 29 },
  { name: 'Professional', monthlyBase: 129, annualBase: 99, monthlyPerUser: 129, annualPerUser: 99 },
  { name: 'Enterprise', monthlyBase: 399, annualBase: 299, monthlyPerUser: 399, annualPerUser: 299 },
]

const PricingCalculator = ({ isAnnual }: PricingCalculatorProps) => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0])
  const [users, setUsers] = useState(1)

  const basePrice = isAnnual ? selectedPlan.annualBase : selectedPlan.monthlyBase
  const perUserPrice = isAnnual ? selectedPlan.annualPerUser : selectedPlan.monthlyPerUser
  const total = basePrice + (users - 1) * perUserPrice

  return (
    <div className="glass-card max-w-xl mx-auto mt-16 p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <Calculator className="w-7 h-7 text-purple-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Interactive Pricing Calculator</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Plan Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Plan</label>
            <div className="flex space-x-2">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    selectedPlan.name === plan.name
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-600 shadow-lg'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>
          {/* User Selector */}
          <div className="mt-6 md:mt-0 md:ml-20">
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Users</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setUsers((u) => Math.max(1, u - 1))}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Decrease users"
              >
                -
              </button>
              <span className="text-xl font-bold min-w-[2.5rem] text-center select-none bg-white border border-gray-200 rounded-lg px-4 py-2">
                {users}
              </span>
              <button
                type="button"
                onClick={() => setUsers((u) => u + 1)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Increase users"
              >
                +
              </button>
              <Users className="w-5 h-5 text-purple-400 ml-2" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 shadow-premium">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <div className="text-lg text-gray-700 mb-1">Total {isAnnual ? 'Annual' : 'Monthly'} Price</div>
              <div className="text-3xl font-black text-purple-700">${total}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="button-premium flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </button>
          </motion.div>
        </div>
        <div className="text-xs text-gray-500 mt-4 text-center">
          * Each additional user: ${perUserPrice}/{isAnnual ? 'year' : 'month'}. All prices in USD.
        </div>
      </motion.div>
    </div>
  )
}

export default PricingCalculator 