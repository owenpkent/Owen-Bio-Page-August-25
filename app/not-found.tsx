"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen py-20 flex items-center justify-center">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="text-8xl font-heading font-bold gradient-text">404</div>
          </motion.div>

          <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <Link href="/projects" className="btn-secondary inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
