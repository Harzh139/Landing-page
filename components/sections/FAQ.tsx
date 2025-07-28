'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does the AI-powered campaign creation work?',
      answer: 'Our AI analyzes your target audience, industry trends, and historical performance data to automatically generate optimized marketing campaigns. It suggests the best messaging, timing, and targeting strategies to maximize your ROI.'
    },
    {
      question: 'What kind of analytics and reporting do you provide?',
      answer: 'We provide comprehensive analytics including real-time performance tracking, conversion attribution, audience insights, and predictive modeling. You get detailed reports on campaign performance, ROI analysis, and actionable recommendations for optimization.'
    },
    {
      question: 'Can I integrate ADmyBRAND with my existing marketing tools?',
      answer: 'Yes! ADmyBRAND integrates seamlessly with popular marketing platforms like Google Ads, Facebook Ads, Mailchimp, HubSpot, and many more. We also provide API access for custom integrations.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most customers see measurable improvements within the first 2-4 weeks of using ADmyBRAND. The AI continuously learns and optimizes, so results typically improve over time. We provide detailed onboarding to help you get started quickly.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 customer support through live chat, email, and phone. Enterprise customers get dedicated account managers and priority support. We also provide comprehensive documentation, video tutorials, and regular training sessions.'
    },
    {
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Absolutely. We use bank-level encryption and follow SOC 2 Type II compliance standards. Your data is stored securely in the cloud with regular backups. We never share your data with third parties and provide full data portability.'
    },
    {
      question: 'Can I try ADmyBRAND before committing?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can also schedule a personalized demo with our team to see the platform in action.'
    },
    {
      question: 'What makes ADmyBRAND different from other marketing tools?',
      answer: 'ADmyBRAND combines advanced AI with intuitive design to create a truly intelligent marketing platform. Unlike traditional tools, our AI doesn\'t just analyze data—it actively optimizes campaigns in real-time, learns from results, and continuously improves performance.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We've Got
            <span className="block gradient-text">Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Contact Support
              </button>
              <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 