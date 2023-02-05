const fs = require('fs')
const path = require('path')

const allowedFileTypes = [ 'jpg' ]
const { resolve } = path
const dirName = require('../dir_name.json')
const sizes = require('../sizes.json')

const sharp = require('sharp')


try {
  createFile()
} catch (e) {
  console.error(e)
}

async function createFile() {
  const file = process.argv.slice(2)[0]
  const ext = path.extname(file).slice(1)

  checkFile(file, ext)

  const dirName1 = getDirName()
  const dirName2 = getDirName()

  let dir = resolve(__dirname, '..', 'public', dirName1, dirName2)

  let id
  do {
    id = makeId(4)
  } while (fs.existsSync(`${dir}/${id}`))
  dir = `${dir}/${id}`
  fs.mkdirSync(dir, { recursive: true })

  const oFile = `${dir}/o.${ext}`

  fs.copyFileSync(file, oFile)

  for (const key in sizes) {
    const width = sizes[key][0]
    const height = sizes[key][1]
    const outputFile = `${dir}/${key}.${ext}`

    await sharp(oFile)
      .resize(width, height)
      .toFile(outputFile)
    console.log(`File ${outputFile} was created`)
  }

  console.log(dir)
}

function getDirName() {
  const ix = Math.floor(Math.random() * dirName.length) + 1
  return dirName[ix]
}

function checkFile(file, ext) {
  if (allowedFileTypes.indexOf(ext) === -1) {
    throw new Error('Invalid file type')
  }
  if (!fs.existsSync(file)) {
    throw new Error('File not exists')
  }
}

function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
