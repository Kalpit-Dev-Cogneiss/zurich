const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public', 'portfolio-brochures')
const QUALITY = 85
const CONCURRENCY = 8

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else if (/\.jpe?g$/i.test(entry.name)) out.push(full)
  }
  return out
}

async function convertOne(file) {
  const outFile = file.replace(/\.jpe?g$/i, '.webp')
  if (fs.existsSync(outFile)) return { file, skipped: true }
  await sharp(file).webp({ quality: QUALITY, effort: 6 }).toFile(outFile)
  const inSize = fs.statSync(file).size
  const outSize = fs.statSync(outFile).size
  return { file, inSize, outSize }
}

async function run() {
  const files = walk(ROOT)
  console.log(`Found ${files.length} jpg files`)

  let totalIn = 0
  let totalOut = 0
  let done = 0
  let skipped = 0
  let idx = 0

  async function worker() {
    while (idx < files.length) {
      const file = files[idx++]
      try {
        const r = await convertOne(file)
        done++
        if (r.skipped) {
          skipped++
        } else {
          totalIn += r.inSize
          totalOut += r.outSize
        }
        if (done % 50 === 0 || done === files.length) {
          console.log(`${done}/${files.length} converted...`)
        }
      } catch (err) {
        console.error(`FAILED: ${file}`, err.message)
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker))

  console.log('--- done ---')
  console.log(`Skipped (already existed): ${skipped}`)
  console.log(`Total in:  ${(totalIn / 1024 / 1024).toFixed(1)} MB`)
  console.log(`Total out: ${(totalOut / 1024 / 1024).toFixed(1)} MB`)
  if (totalIn > 0) {
    console.log(`Reduction: ${(100 - (totalOut / totalIn) * 100).toFixed(1)}%`)
  }
}

run()
