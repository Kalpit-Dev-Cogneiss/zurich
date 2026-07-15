/**
 * Per-case-study image layout overrides, keyed by slug. Anything not
 * mentioned here just renders as a single full-width image in its normal
 * numeric order — these entries only carve out the exceptions: an image
 * that needs a heading above it, or images that share a row.
 */

interface LabeledSpec {
  type: 'labeled'
  /** heading rendered next to the image, e.g. "Logo Design" */
  label: string
  /** optional paragraph under the heading (fills the side layout's left column) */
  body?: string
  /** the image's number, from its filename (e.g. "L2.jpg" → 2) */
  num: number
  /** 'top' (default): heading above the image. 'side': text on the left, image on the right. */
  layout?: 'top' | 'side'
}

interface ActualSpec {
  type: 'actual'
  /** the image's number, from its filename (e.g. "L6.jpg" → 6) */
  num: number
}

interface IntroSpec {
  type: 'intro'
  /** big centered title, e.g. "Greenleaf Heritage" */
  label: string
  /** centered description paragraph under the title */
  body?: string
  /** bolder line under the description, e.g. "Location : Vadodara, Gujarat" */
  location?: string
  /** the image shown below the text, from its filename number */
  num: number
}

interface RowImageSpec {
  /** the image's number, from its filename (e.g. "L4.jpg" → 4) */
  num: number
  /** manual flex-grow weight (e.g. 30 / 70 for a 30:70 split). Omit to size
   * this image by its own natural aspect ratio instead (the default). */
  width?: number
}

interface RowSpec {
  type: 'row'
  /** images that share one row, all at the same height — see CaseStudyImageRow */
  images: RowImageSpec[]
  /** show every image uncropped at its natural size instead of the justified full-bleed row */
  actualSize?: boolean
  /** add breathing room (6rem) below the row */
  spaceBelow?: boolean
}

export type CaseStudySectionSpec = LabeledSpec | RowSpec | ActualSpec | IntroSpec

/** studies that skip the PortfolioInfo block (their intro section covers the same ground) */
export const HIDE_INFO_SLUGS = new Set(['greenleaf-heritage'])

export const CASE_STUDY_LAYOUTS: Record<string, CaseStudySectionSpec[]> = {
  'greenleaf-heritage': [
    // TODO: swap the placeholder description for the real copy
    {
      type: 'intro',
      label: 'Greenleaf Heritage',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      location: 'Location : Vadodara, Gujarat',
      num: 2,
    },
  ],
  'lush-meadows': [
    { type: 'labeled', label: 'Logo Design', num: 2 },
    { type: 'row', images: [{ num: 4, width: 40 }, { num: 5, width: 60 }] },
    { type: 'actual', num: 6 },
    { type: 'actual', num: 7 },
    { type: 'labeled', label: 'Logo Icon', num: 9, layout: 'side' },
    { type: 'row', images: [{ num: 10 }, { num: 11 }, { num: 12 }], actualSize: true },
    { type: 'row', images: [{ num: 14 }, { num: 15 }], spaceBelow: true },
    { type: 'labeled', label: 'Stall Panel Design', num: 17 },
  ],
}
