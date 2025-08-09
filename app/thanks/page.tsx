"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Home } from 'lucide-react'

export default function ThanksPage() {
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
            <CheckCircle className="h-20 w-20 text-palm mx-auto" />
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="gradient-text">Thank You!</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your message has been received. I&apos;ll get back to you within 24-48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <Link href="/projects" className="btn-secondary inline-flex items-center">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 p-6 bg-gradient-to-br from-palm/5 to-wave/5 dark:from-palm/10 dark:to-wave/10 rounded-2xl"
          >
            <p className="text-sm text-muted-foreground">
              In the meantime, feel free to check out my latest content on 
              <Link href="https://youtube.com/@owenpkent" target="_blank" rel="noopener noreferrer" className="text-palm hover:underline mx-1">
                YouTube
              </Link>
              or catch me live on
              <Link href="https://twitch.tv/owenpkent" target="_blank" rel="noopener noreferrer" className="text-palm hover:underline mx-1">
                Twitch
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
