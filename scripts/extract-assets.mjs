import fs from 'node:fs'

const html = fs.readFileSync('japankanji.html', 'utf8')

const styles = [...html.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
  .map(match => match[1].trim())
  .join('\n\n')

const fontImport =
  '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap");\n'

fs.writeFileSync('public/japankanji.css', fontImport + styles)

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1].trim())
  .join('\n\n')

fs.writeFileSync('public/japankanji.js', scripts)

console.log({
  cssBytes: fs.statSync('public/japankanji.css').size,
  jsBytes: fs.statSync('public/japankanji.js').size
})
