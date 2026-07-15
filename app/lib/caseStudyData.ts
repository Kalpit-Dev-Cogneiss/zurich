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

// same placeholder-copy convention as app/lib/portfolioData.ts — swap in the
// real copy per case study once it's ready
const desc = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  "It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
]

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

  const title = toTitle(folderName)

  return {
    slug: toSlug(folderName),
    title,
    location: '@mumbai',
    projectType: 'CASE STUDY',
    client: `${title.toUpperCase()} GROUP`,
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
