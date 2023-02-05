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
  const dir = resolve(__dirname, '..', 'public', id)
  fs.rmSync(dir, { recursive: true, force: true })
  // @todo remove if empty
  /*const s = fs.readdirSync('../public/sg/xy')

  console.log(s)

  process.exit(0)*/

}
