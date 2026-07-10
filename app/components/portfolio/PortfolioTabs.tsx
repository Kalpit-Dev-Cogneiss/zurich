'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import type { ProjectCategory, ProjectData } from '@/app/lib/portfolioData'

interface PortfolioTabsProps {
  projectsByCategory: Record<ProjectCategory, ProjectData[]>
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  'duplex-villa': 'Duplex / Villa',
  mall: 'Mall',
  farmhouse: 'Farmhouse',
  'open-plot': 'Open Plot',
  'industrial-park': 'Industrial',
  'corporate-brochure': 'Corporate',
}

const CATEGORY_ORDER: ProjectCategory[] = [
  'residential',
  'commercial',
  'duplex-villa',
  'mall',
  'farmhouse',
  'open-plot',
  'industrial-park',
  'corporate-brochure',
]

function isProjectCategory(value: string | null): value is ProjectCategory {
  return value !== null && value in CATEGORY_LABELS
}

export default function PortfolioTabs({ projectsByCategory }: PortfolioTabsProps) {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const initialTab = isProjectCategory(categoryParam) ? categoryParam : 'residential'
  const [activeTab, setActiveTab] = useState<ProjectCategory>(initialTab)

  useEffect(() => {
    if (isProjectCategory(categoryParam)) {
      setActiveTab(categoryParam)
    }
  }, [categoryParam])

  const tabs = CATEGORY_ORDER.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    projects: projectsByCategory[id],
  })).filter((tab) => tab.projects.length > 0)

  const activeProjects = tabs.find((tab) => tab.id === activeTab)?.projects
    ?? tabs[0]?.projects
    ?? []

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.2rem',
          marginBottom: '6rem',
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '1.2rem 2.4rem',
              fontSize: '1.4rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: activeTab === tab.id ? '#ffffff' : 'transparent',
              color: activeTab === tab.id ? '#000000' : '#ffffff',
              border: '2px solid #ffffff',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {tab.label}
            <span style={{ marginLeft: '0.8rem', opacity: 0.7 }}>
              ({tab.projects.length})
            </span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '4rem',
        }}
        className="portfolio-grid"
      >
        {activeProjects.map((project, index) => (
          <PortfolioCard
            key={project.slug}
            title={project.title}
            slug={project.slug}
            imageSrc={project.images.hero}
            projectType={project.projectType.replace('\n', ' ')}
            location={project.location}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}
