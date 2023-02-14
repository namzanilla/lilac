const path = require('path')
const fs = require('fs')

const { resolve } = path

try {
  clean()
} catch (e) {
  console.error(e)
}

function clean() {
  const dir = resolve(__dirname, '../../public')
  const scan = fs.readdirSync(dir)
  for (const el of scan) {
    const target = resolve(dir, el)
    if (fs.lstatSync(target).isDirectory()) {
      fs.rmSync(target, { recursive: true, force: true })
    }
  }
}
