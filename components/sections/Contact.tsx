'use client'

import React from 'react'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@admybrand.com',
      link: 'mailto:hello@admybrand.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our office location',
      value: '123 AI Street, Tech City, TC 12345',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'When we\'re available',
      value: 'Mon-Fri: 9AM-6PM EST',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-16 bg-gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Let's Start a
            <span className="block gradient-text">Conversation</span>
          </h2>
          <p className="text-subtitle max-w-4xl mx-auto">
            Ready to transform your marketing with AI? Get in touch with our team and let's discuss how ADmyBRAND AI Suite can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you succeed. Reach out to us through any of the channels below, or fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-premium group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                      {info.link !== '#' ? (
                        <a 
                          href={info.link}
                          className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-900 font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-card p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Live Chat Support</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Need immediate assistance? Our support team is available 24/7 through live chat.
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200">
                    Start Chat →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 