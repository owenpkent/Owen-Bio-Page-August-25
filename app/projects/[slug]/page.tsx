import React from 'react'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/projects'
import { ProjectDetailClient } from '@/components/project-detail-client'

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

  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 4)

  return (
    <ProjectDetailClient 
      project={project} 
      relatedProjects={relatedProjects} 
    />
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
