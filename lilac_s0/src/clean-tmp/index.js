const path = require('path')
const fs = require('fs')

const { resolve } = path

try {
  clean()
} catch (e) {
  console.error(e)
}

function clean() {
  const dir = resolve(__dirname, '../../tmp')
  const scan = fs.readdirSync(dir)
  for (const el of scan) {
    const target = resolve(dir, el)
    if (fs.lstatSync(target).isDirectory() && el === 'public') {
      fs.rmSync(target, { recursive: true, force: true })
    } else if (el === 'dump.zip') {
      fs.rmSync(target)
    }
  }
}
