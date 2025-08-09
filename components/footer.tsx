"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Youtube, Twitch, Linkedin, Mail } from 'lucide-react'
import { MailingListSignup } from './mailing-list-signup'

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/@owenpkent', icon: Youtube },
  { name: 'Twitch', href: 'https://twitch.tv/owenpkent', icon: Twitch },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/owenpkent', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@owenpkent.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">About Owen</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m Owen P Kent – filmmaker, engineer, entrepreneur, and advocate – building projects that prove disability does not equal disadvantage. Through ATDev, I create mobility solutions for true independence. With OKStudio, I tell stories that shift perspectives through film, livestreaming, and aerial cinematography. My YouTube and Twitch channels connect communities through art, technology, and authentic conversation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-2xl bg-background border border-border text-muted-foreground hover:text-foreground hover:border-palm transition-colors"
                      aria-label={item.name}
                    >
                      <item.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mailing List Signup */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Get updates on new projects, behind-the-scenes content, and advocacy work.
              </p>
              <MailingListSignup />
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Owen P Kent. All rights reserved.
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                href="/"
                className="text-sm font-heading font-semibold gradient-text hover:opacity-80 transition-opacity"
              >
                Owen P Kent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
