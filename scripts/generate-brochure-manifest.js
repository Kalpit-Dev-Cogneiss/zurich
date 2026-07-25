const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public', 'portfolio-brochures')
const OUT = path.join(__dirname, '..', 'app', 'lib', 'brochureManifest.json')

function extractPageNumber(filename) {
  const match = filename.match(/(\d+)(?=\.\w+$)/)
  return match ? parseInt(match[1], 10) : 0
}

function run() {
  const manifest = {}
  const folders = fs.readdirSync(ROOT, { withFileTypes: true }).filter((e) => e.isDirectory())

  for (const folder of folders) {
    const dir = path.join(ROOT, folder.name)
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith('.webp'))
      .sort((a, b) => extractPageNumber(a) - extractPageNumber(b))
    manifest[folder.name] = files
  }

  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Wrote manifest for ${Object.keys(manifest).length} folders to ${OUT}`)
}

run()
