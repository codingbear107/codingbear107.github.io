import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputPath = resolve(projectRoot, 'dist', 'index.html')
const serverEntryPath = resolve(projectRoot, '.prerender', 'entry-server.js')

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntryPath).href),
  readFile(outputPath, 'utf8'),
])

const rootMarker = '<div id="root"></div>'

if (!template.includes(rootMarker)) {
  throw new Error(`Prerender marker not found in ${outputPath}`)
}

const html = template.replace(
  rootMarker,
  `<div id="root" data-prerendered="true">${render()}</div>`,
)

await writeFile(outputPath, html)
