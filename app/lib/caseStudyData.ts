import fs from 'fs'
import path from 'path'

export interface CaseStudyImage {
  src: string
  /** the number parsed from the filename (e.g. "L4.jpg" → 4), used to pick
   * specific images out for custom layout instead of guessing array position */
  num: number
}

export interface CaseStudy {
  slug: string
  title: string
  location: string
  projectType: string
  client: string
  description: string[]
  /** first image (lowest number in the filename) — used as the hero */
  hero: string
  /** every image in ascending filename-number order, hero included */
  images: CaseStudyImage[]
}

const CASE_STUDY_DIR = path.join(process.cwd(), 'public', 'case-study')
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i

// fallback copy for a case study folder that hasn't been given real content
// yet — override it via CASE_STUDY_INFO_BLOCKS or an 'intro' layout entry
const desc = [
  'Case study copy coming soon.',
]

// per-study override for the auto-generated title (toTitle() capitalizes
// each word but can't know acronyms or intentional misspellings)
const TITLE_OVERRIDES: Record<string, string> = {
  'tsl': 'TSL',
  'rk-landmark': 'RK Landmark',
}

// per-study override for the location tag shown in PortfolioInfo
const LOCATION_OVERRIDES: Record<string, string> = {
  'festive-vibes': 'Ahmedabad',
  'greenleaf-heritage': 'Vadodara',
  'happy-mall': 'Vadodara',
  'lush-meadows': 'Kantharpura',
  'reva-allizza': 'Bharuch',
  'rk-landmark': 'Rajkot',
  'satyam-surya-manhattan': 'Mumbai',
  'tsl': 'Surat',
}

function toSlug(folderName: string) {
  return folderName.trim().toLowerCase().replace(/\s+/g, '-')
}

function toTitle(folderName: string) {
  return folderName
    .trim()
    .split(/[\s_-]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// filenames are like "L1.jpg", "L2.5.jpg", "L10.png" — the number after the
// leading letters is the intended display order
function fileOrder(filename: string): number {
  const match = filename.match(/([\d.]+)/)
  return match ? parseFloat(match[1]) : Infinity
}

function readCaseStudy(folderName: string): CaseStudy | null {
  const dir = path.join(CASE_STUDY_DIR, folderName)
  if (!fs.statSync(dir).isDirectory()) return null

  const images: CaseStudyImage[] = fs
    .readdirSync(dir)
    .filter(f => IMAGE_EXT.test(f))
    .map(f => ({ src: `/case-study/${folderName}/${f}`, num: fileOrder(f) }))
    .sort((a, b) => a.num - b.num)

  if (images.length === 0) return null

  const slug = toSlug(folderName)
  const title = TITLE_OVERRIDES[slug] ?? toTitle(folderName)

  return {
    slug,
    title,
    location: LOCATION_OVERRIDES[slug] ?? 'Mumbai',
    projectType: 'Case study',
    client: `${title} Group`,
    description: desc,
    hero: images[0].src,
    images,
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(CASE_STUDY_DIR)) return []
  return fs
    .readdirSync(CASE_STUDY_DIR)
    .map(readCaseStudy)
    .filter((c): c is CaseStudy => c !== null)
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return getAllCaseStudies().find(c => c.slug === slug) ?? null
}

export function getAllCaseStudySlugs(): string[] {
  return getAllCaseStudies().map(c => c.slug)
}
