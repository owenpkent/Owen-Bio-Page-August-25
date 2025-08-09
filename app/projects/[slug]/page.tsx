"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Youtube, Twitch as TwitchIcon } from 'lucide-react'
import { getProjectBySlug, projects } from '@/lib/projects'

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

const getIconForLinkType = (type: string) => {
  switch (type) {
    case 'github':
      return Github
    case 'youtube':
      return Youtube
    case 'twitch':
      return TwitchIcon
    default:
      return ExternalLink
  }
}

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container-max section-padding">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white">
                {project.title}
              </h1>
            </div>
          </motion.div>

          {/* Project Links */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
            {project.links.map((link) => {
              const Icon = getIconForLinkType(link.type)
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {link.name}
                </Link>
              )
            })}
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp} className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </motion.div>
        </motion.div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 4)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold mb-2 group-hover:text-palm transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
