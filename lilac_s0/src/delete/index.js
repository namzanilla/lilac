const fs = require('fs')
const path = require('path')

const { resolve } = path

try {
  deleteFile()
} catch (e) {
  console.error(e)
}

function deleteFile() {
  const id = process.argv.slice(2)[0]
  const dir = resolve(__dirname, '../../public', id)
  fs.rmSync(dir, { recursive: true, force: true })
  const scan = fs.readdirSync(resolve(dir, '..'))
  if (!scan.length) {
    fs.rmSync(resolve(dir, '../..'), { recursive: true, force: true })
  }
}
