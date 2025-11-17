'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import FeaturedProducts from '@/components/featured-products'
import WhyLudaTech from '@/components/why-luda-tech'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <WhyLudaTech />
      <Testimonials />
      <Footer />
    </main>
  )
}
