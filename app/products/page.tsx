'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import ProductCard from '@/components/product-card'
import { Filter } from 'lucide-react'

const PRODUCTS = [
  {
    id: 1,
    title: 'SmartFlow',
    description: 'Intelligent workflow automation platform that adapts to your team\'s unique processes.',
    longDescription: 'SmartFlow uses AI to learn your workflows and automate repetitive tasks. Integrate seamlessly with your favorite tools and watch productivity soar.',
    category: 'Automation',
    tags: ['Web', 'AI', 'Automation'],
    image: '/workflow-automation-dashboard.png',
    features: ['AI-powered automation', 'Multi-platform integration', 'Real-time analytics', 'Custom workflows'],
    pricing: 'Starting at $49/month',
  },
  {
    id: 2,
    title: 'DataSync Pro',
    description: 'Enterprise-grade data synchronization across all your systems in real-time.',
    longDescription: 'Keep your data perfectly synchronized across cloud, on-premise, and hybrid environments. Military-grade encryption ensures your information stays secure.',
    category: 'Enterprise',
    tags: ['B2B', 'Cloud', 'Enterprise'],
    image: '/data-synchronization-analytics.jpg',
    features: ['Real-time sync', 'Encryption', 'Multi-region support', 'API-first architecture'],
    pricing: 'Custom enterprise pricing',
  },
  {
    id: 3,
    title: 'SecureVault',
    description: 'Zero-knowledge encryption and secure storage for sensitive data.',
    longDescription: 'End-to-end encrypted storage with zero-knowledge architecture. Your data is yours alone—we can\'t access it even if we wanted to.',
    category: 'Security',
    tags: ['Security', 'Web', 'Mobile'],
    image: '/secure-data-vault-encryption.jpg',
    features: ['Zero-knowledge architecture', 'End-to-end encryption', 'Military-grade security', 'Cross-device sync'],
    pricing: 'Starting at $9.99/month',
  },
  {
    id: 4,
    title: 'InsightAI',
    description: 'Advanced analytics and predictive intelligence for your business data.',
    longDescription: 'Transform raw data into actionable insights with our machine learning-powered analytics engine. Make smarter decisions faster.',
    category: 'Analytics',
    tags: ['AI', 'Analytics', 'Enterprise'],
    image: '/business-analytics-dashboard-ai.jpg',
    features: ['Predictive analytics', 'Custom dashboards', 'Real-time alerts', 'Natural language queries'],
    pricing: 'Starting at $199/month',
  },
  {
    id: 5,
    title: 'DevOps Hub',
    description: 'Unified platform for CI/CD, deployment, and infrastructure management.',
    longDescription: 'Streamline your entire development lifecycle with our comprehensive DevOps platform. Deploy with confidence, scale effortlessly.',
    category: 'Developer',
    tags: ['DevOps', 'Web', 'B2B'],
    image: '/devops-deployment-pipeline.jpg',
    features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Performance monitoring'],
    pricing: 'Starting at $99/month',
  },
  {
    id: 6,
    title: 'TeamCollab',
    description: 'All-in-one collaboration suite for distributed teams.',
    longDescription: 'Connect your teams with video, chat, file sharing, and project management—all in one unified platform.',
    category: 'Collaboration',
    tags: ['Collaboration', 'Web', 'Mobile'],
    image: '/team-collaboration-platform.png',
    features: ['Video conferencing', 'Real-time chat', 'File sharing', 'Project management'],
    pricing: 'Starting at $12/user/month',
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))]
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory)

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
              Our Product Suite
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the complete range of LuDa Tech solutions designed to power your business.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted text-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
