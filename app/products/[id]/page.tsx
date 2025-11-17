'use client'

import { useParams } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
    fullFeatures: [
      'Intelligent task automation powered by machine learning',
      'Seamless integration with 500+ apps and services',
      'Advanced scheduling and conditional logic',
      'Real-time analytics and reporting',
      'Custom workflow designer',
      'Team collaboration tools',
      'API access for custom integrations',
      '24/7 premium support',
    ],
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
    fullFeatures: [
      'Real-time bidirectional data synchronization',
      'Military-grade AES-256 encryption',
      'Multi-region data centers',
      ' 99.99% uptime SLA',
      'Advanced conflict resolution',
      'Comprehensive audit logs',
      'Custom data transformation',
      'Dedicated account management',
    ],
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
    fullFeatures: [
      'Zero-knowledge encryption architecture',
      'End-to-end encrypted communications',
      'Military-grade AES-256 security',
      'Cross-device synchronization',
      'Biometric authentication',
      'Advanced sharing permissions',
      'Secure file collaboration',
      'Automatic backup and recovery',
    ],
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
    fullFeatures: [
      'Advanced predictive analytics',
      'Custom dashboard creation',
      'Real-time alerts and notifications',
      'Natural language query interface',
      'Machine learning model training',
      'Data visualization library',
      'Export and reporting capabilities',
      'Integration with major BI tools',
    ],
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
    fullFeatures: [
      'Complete CI/CD pipeline management',
      'Docker and Kubernetes support',
      'Infrastructure as code capabilities',
      'Performance monitoring and alerts',
      'Automated testing integration',
      'Multi-environment support',
      'Git integration',
      'Team collaboration features',
    ],
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
    fullFeatures: [
      'HD video and audio conferencing',
      'Real-time messaging and chat',
      'File sharing and collaboration',
      'Project management tools',
      'Calendar integration',
      'Screen sharing capabilities',
      'Recording and transcription',
      'Advanced permission controls',
    ],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = PRODUCTS.find(p => p.id === productId)

  if (!product) {
    return (
      <main>
        <Navigation />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
          <Link href="/products" className="mt-4 inline-block text-primary hover:text-accent">
            Back to products
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-4">
              {product.category}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {product.longDescription}
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-muted border border-border"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Features</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.fullFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 size={24} className="text-accent mt-0.5" />
                </div>
                <div>
                  <p className="text-lg text-foreground font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-bold text-foreground mb-6">{product.pricing}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors font-medium"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
