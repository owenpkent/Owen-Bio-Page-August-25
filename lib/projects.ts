export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  links: {
    name: string
    url: string
    type: 'website' | 'youtube' | 'twitch' | 'github' | 'external'
  }[]
  featured: boolean
  gallery?: string[]
}

export const projects: Project[] = [
  {
    id: 'atdev',
    title: 'ATDev',
    slug: 'atdev',
    description: 'Developing an ecosystem of mobility devices to enable low-cost independence for people of all abilities. Our flagship product, Reflex, brings advanced rehab technology into the home.',
    longDescription: 'ATDev is revolutionizing assistive technology by creating an ecosystem of mobility devices that enable true independence for people of all abilities. Our flagship product, Reflex, represents a breakthrough in bringing advanced rehabilitation technology directly into the home environment. By focusing on affordability and accessibility, we\'re breaking down the barriers that have traditionally limited access to life-changing mobility solutions. Our approach combines cutting-edge engineering with user-centered design, ensuring that every product we develop truly serves the needs of the disability community.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    tags: ['Assistive Technology', 'Engineering', 'Healthcare', 'Innovation'],
    links: [
      { name: 'Learn More', url: 'https://atdev.com', type: 'website' },
      { name: 'GitHub', url: 'https://github.com/atdev', type: 'github' }
    ],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'okstudio',
    title: 'OKStudio',
    slug: 'okstudio',
    description: 'Creative production and aerial cinematography studio for films, livestreams, and multimedia storytelling that challenges perceptions and inspires change.',
    longDescription: 'OKStudio is a creative production powerhouse specializing in aerial cinematography and multimedia storytelling. As an FAA Part 107 licensed drone pilot, I bring unique perspectives to film and video production, literally and figuratively. The studio focuses on creating content that challenges perceptions and inspires change, whether through commercial work, documentary projects, or artistic endeavors. From sweeping aerial shots that capture the beauty of our world to intimate storytelling that reveals human truth, OKStudio is where technical expertise meets creative vision.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    tags: ['Film Production', 'Aerial Cinematography', 'Creative Direction', 'Storytelling'],
    links: [
      { name: 'Portfolio', url: 'https://okstudio.com', type: 'website' },
      { name: 'YouTube', url: 'https://youtube.com/@okstudio', type: 'youtube' }
    ],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'angels-of-mercy',
    title: 'Angels of Mercy',
    slug: 'angels-of-mercy',
    description: 'A psychological thriller currently in development, authentically representing disability on screen while exploring themes of morality, justice, and human connection.',
    longDescription: 'Angels of Mercy is an ambitious feature film project that represents a new frontier in authentic disability representation in cinema. This psychological thriller weaves together themes of morality, justice, and human connection while centering disabled characters as complex, fully-realized protagonists rather than inspirational objects or tragic figures. Currently in development, the project aims to challenge Hollywood\'s traditional narratives about disability and create a thriller that\'s both entertaining and groundbreaking in its representation. The film explores how society\'s perceptions of disability can be both a weapon and a shield, and how true justice sometimes requires unconventional methods.',
    image: 'https://images.unsplash.com/photo-1489599735734-79b4fc8a2eda?w=800&h=600&fit=crop',
    tags: ['Film', 'Disability Representation', 'Thriller', 'Advocacy'],
    links: [
      { name: 'Production Updates', url: 'https://angelsofmercy.film', type: 'website' }
    ],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1489599735734-79b4fc8a2eda?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'youtube-channel',
    title: 'YouTube Channel',
    slug: 'youtube-channel',
    description: 'A mix of docu-vlogs, engineering builds, assistive tech deep-dives, and advocacy content designed to inform, inspire, and connect.',
    longDescription: 'My YouTube channel serves as a bridge between the technical and personal aspects of my work, offering viewers an inside look at the intersection of disability, technology, and creativity. Content ranges from detailed engineering builds and assistive technology deep-dives to personal docu-vlogs that share the real experiences of living with a disability while pursuing ambitious projects. The channel aims to inform, inspire, and connect communities by showing that disability can be a source of innovation and strength rather than limitation. Each video is crafted to be both educational and entertaining, breaking down complex topics while maintaining authentic storytelling.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['Content Creation', 'Education', 'Advocacy', 'Engineering'],
    links: [
      { name: 'Watch Now', url: 'https://youtube.com/@owenpkent', type: 'youtube' }
    ],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 'twitch-streaming',
    title: 'Twitch Streaming',
    slug: 'twitch-streaming',
    description: 'Live gaming, creative streams, and real-time discussions that combine fun, accessibility awareness, and community building.',
    longDescription: 'My Twitch channel creates a unique space where gaming, creativity, and disability awareness intersect in real-time. Through live gaming sessions, creative streams, and interactive discussions, I build a community that celebrates diversity and challenges assumptions about what disabled creators can achieve. The streams blend entertainment with education, showing viewers that accessibility in gaming and content creation isn\'t just possible—it\'s essential. Whether we\'re tackling the latest game releases, working on creative projects live, or having deep conversations about representation and advocacy, every stream is an opportunity to connect, learn, and have fun together.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    tags: ['Live Streaming', 'Gaming', 'Community', 'Accessibility'],
    links: [
      { name: 'Watch Live', url: 'https://twitch.tv/owenpkent', type: 'twitch' }
    ],
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop'
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}
