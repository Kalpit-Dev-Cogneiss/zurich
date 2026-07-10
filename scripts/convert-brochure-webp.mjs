import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const DIR = path.join(process.cwd(), 'public', 'Brochure-image')
const files = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.jpg'))

let converted = 0
for (const file of files) {
  const input = path.join(DIR, file)
  const output = path.join(DIR, file.replace(/\.jpg$/i, '.webp'))
  if (fs.existsSync(output)) {
    converted++
    continue
  }
  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output)
  converted++
  console.log(`Converted: ${file} -> ${path.basename(output)}`)
}

console.log(`Done. ${converted}/${files.length} WebP files ready.`)
