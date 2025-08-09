"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-palm/20 border-t-palm rounded-full mx-auto mb-4"
        />
        <p className="text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  )
}
