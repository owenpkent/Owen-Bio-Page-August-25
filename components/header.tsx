"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Youtube, Twitch, Linkedin, Mail } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/@owenpkent', icon: Youtube },
  { name: 'Twitch', href: 'https://twitch.tv/owenpkent', icon: Twitch },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/owenpkent', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@owenpkent.com', icon: Mail },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-max section-padding">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-heading font-bold gradient-text"
              >
                Owen P Kent
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Header Tagline (Desktop) */}
          <div className="hidden lg:block text-sm text-muted-foreground max-w-xs text-center">
            Filmmaker. Engineer. Advocate. Building proof that disability does not equal disadvantage.
          </div>

          {/* Social Links & Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Filmmaker. Engineer. Advocate. Building proof that disability does not equal disadvantage.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={item.name}
                    >
                      <item.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
