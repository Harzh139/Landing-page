'use client'

import React from 'react'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'How AI is Transforming Digital Marketing',
    summary: 'Discover the latest trends in AI-driven marketing and how leading brands are leveraging automation for growth.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    link: '#',
    tag: 'AI & Marketing'
  },
  {
    title: '10 Growth Hacks for SaaS Startups in 2025',
    summary: 'Explore actionable growth strategies and tools for SaaS founders to scale faster in the new digital era.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    link: '#',
    tag: 'Growth'
  },
  {
    title: 'The Ultimate Guide to Omnichannel Campaigns',
    summary: 'Learn how to create seamless customer journeys across channels with the latest AI-powered tools.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    link: '#',
    tag: 'Strategy'
  },
  {
    title: 'Why Data Privacy Matters in AI Marketing',
    summary: 'Understand the importance of data privacy and compliance when using AI for marketing automation.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    link: '#',
    tag: 'Privacy'
  }
]

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-8 animate-fade-in">
            <span className="text-purple-800 font-semibold">Resources & Insights</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Explore Our
            <span className="block gradient-text">Blog & Resources</span>
          </h2>
          <p className="text-subtitle max-w-4xl mx-auto">
            Stay ahead with the latest trends, tips, and strategies in AI-powered marketing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogPosts.map((post, i) => (
            <div
              key={post.title}
              className="group card-premium overflow-hidden flex flex-col h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full"
                >
                  <div className="relative h-48 w-full mb-6 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1">
                      {post.summary}
                    </p>
                    <span className="text-purple-600 font-semibold group-hover:underline flex items-center mt-auto">
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog 