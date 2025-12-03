'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }: { product: any }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
        {/* Image */}
        <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            height={80}
            width={80}
            className="w-auto h-auto group-hover:scale-105 transition-transform duration-300 object-contain mx-auto mt-10"
          />
        </div>

        {/* Category Tag */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 grow">{product.description}</p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {product.features.slice(0, 2).map((feature: string) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing and CTA */}
        <div className="border-t border-border pt-4 mt-auto">
          <p className="text-sm font-medium text-accent mb-4">{product.pricing}</p>
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group/link"
          >
            Learn More
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
