"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, ExternalLink } from 'lucide-react'
import { getFeaturedProjects } from '@/lib/projects'
import { MailingListSignup } from '@/components/mailing-list-signup'
import { VantaCellsBackground } from '@/components/vanta-cells-background'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <VantaCellsBackground className="relative py-20 lg:py-32 overflow-hidden">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/20 z-[1]" />
        
        <div className="container-max section-padding relative z-[2]">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6"
            >
              <span className="text-white drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                Disability does not equal disadvantage
              </span>
              <br />
              <span className="text-white/95 drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                – I build, film, and fly to prove it.
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-xl [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]"
            >
              Technology, storytelling, and creativity that break barriers.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects" className="btn-primary inline-flex items-center shadow-2xl hover:shadow-3xl transition-shadow">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="https://twitch.tv/owenpkent" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-palm font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 inline-flex items-center shadow-2xl hover:shadow-3xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </VantaCellsBackground>

      {/* About Teaser Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Meet Owen P Kent
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I&apos;m a filmmaker, engineer, entrepreneur, and advocate building projects that prove disability does not equal disadvantage. Through innovation, storytelling, and community building, I create tools and content that shift perspectives and break barriers.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Owen P Kent"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-8">
              One mission. Many projects. A single goal.
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Everything I do — from designing mobility solutions at ATDev, to crafting cinematic stories through OKStudio, to sharing my work on YouTube and Twitch — comes back to a simple belief: disability does not equal disadvantage. By combining engineering, filmmaking, and community building, I create tools and stories that break barriers, shift perspectives, and connect people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the ventures that bring my mission to life across technology, storytelling, and community.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-palm/10 text-palm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-palm transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Embedded YouTube Video */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                Latest from YouTube
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch my latest video exploring the intersection of technology and accessibility.
              </p>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Latest YouTube Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="https://youtube.com/@owenpkent"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                View All Videos
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-20 bg-gradient-to-br from-palm/5 to-wave/5 dark:from-palm/10 dark:to-wave/10">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get updates on new projects, behind-the-scenes content, and advocacy work. No spam, just meaningful updates.
            </p>
            <MailingListSignup />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
