'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedProducts() {
  const products = [
    {
      icon: Sparkles,
      title: 'SmartFlow',
      description: 'Intelligent workflow automation for modern teams. Streamline operations with AI-powered insights.',
      tags: ['Web', 'AI', 'Automation'],
      color: 'from-primary/20 to-accent/20',
    },
    {
      icon: Zap,
      title: 'DataSync Pro',
      description: 'Real-time data synchronization across enterprise systems. Enterprise-grade security and reliability.',
      tags: ['B2B', 'Cloud', 'Enterprise'],
      color: 'from-accent/20 to-primary/20',
    },
    {
      icon: Shield,
      title: 'SecureVault',
      description: 'Zero-knowledge encryption and secure storage. Military-grade protection for your sensitive data.',
      tags: ['Security', 'Web', 'Mobile'],
      color: 'from-primary/20 via-accent/20 to-primary/20',
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our suite of innovative solutions designed to empower businesses and consumers alike.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${product.color} border border-border hover:border-accent/50 transition-all duration-300 h-full`}>
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-background/50 text-foreground border border-border/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/products"
                      className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
