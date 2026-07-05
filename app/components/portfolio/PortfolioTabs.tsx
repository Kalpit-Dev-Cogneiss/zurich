'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import type { ProjectData, ProjectCategory } from '@/app/lib/portfolioData'

interface PortfolioTabsProps {
  residential: ProjectData[]
  commercial: ProjectData[]
  farmhouse: ProjectData[]
}

export default function PortfolioTabs({
  residential,
  commercial,
  farmhouse,
}: PortfolioTabsProps) {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('residential')

  const tabs = [
    { id: 'residential' as ProjectCategory, label: 'Residential', projects: residential },
    { id: 'commercial' as ProjectCategory, label: 'Commercial', projects: commercial },
    { id: 'farmhouse' as ProjectCategory, label: 'Farmhouse', projects: farmhouse },
  ]

  const activeProjects = tabs.find((tab) => tab.id === activeTab)?.projects || []

  return (
    <div>
      {/* Tab Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '6rem',
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '1.5rem 4rem',
              fontSize: '1.8rem',
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
            <span style={{ marginLeft: '1rem', opacity: 0.7 }}>
              ({tab.projects.length})
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
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
