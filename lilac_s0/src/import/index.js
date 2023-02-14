const fs = require('fs')
const path = require('path')
const decompress = require('decompress')
const { execSync } = require('child_process')

const { resolve } = path

try {
  importData()
} catch (e) {
  console.error(e)
}

function importData() {
  const input = resolve(__dirname, '../../tmp/dump.zip')

  if (!fs.existsSync(input)) {
    throw `File ${input} not found`
  }

  cleanPublic()

  const dist = resolve(__dirname, '../../public')

  decompress(input, dist).then((files) => {
    console.log(files)
  })
}

function cleanPublic() {
  const script = resolve(__dirname, '../clean-public')
  const cmd = `node ${script}`
  execSync(cmd)
}
