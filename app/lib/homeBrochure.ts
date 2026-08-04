import { getBrochureImages } from './portfolioBrochure'

// Home page shows the same brochure as the Festival Vibes portfolio project.
const HOME_BROCHURE_FOLDER = 'festival vibes'

export function getHomeBrochureImages(): string[] {
  return getBrochureImages(HOME_BROCHURE_FOLDER)
}
