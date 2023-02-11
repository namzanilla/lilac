const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const http = require('http')
const https = require('https')
const piexif = require('piexifjs')

const allowedFileTypes = ['jpg']
const { resolve } = path
const dirName = require(resolve(__dirname, '../../dir_name.json'))
const sizes = require(resolve(__dirname, '../../sizes.json'))

const SOURCE = {
  LOCAL_FILE: 0,
  URL: 1,
}

try {
  createFile()
} catch (e) {
  console.error(e)
}

async function createFile() {
  let file = process.argv.slice(2)[0]
  const ext = path.extname(file).slice(1)

  const source = checkSource(file)

  if (source === SOURCE.URL) {
    await download(file, '/tmp/lilac_photo.' + ext)
    file = `/tmp/lilac_photo.${ext}`
  }

  checkFile(file, ext)

  const dirName1 = getDirName()
  const dirName2 = getDirName()

  let dir = resolve(__dirname, '../../public', dirName1, dirName2)

  let id
  do {
    id = makeId(4)
  } while (fs.existsSync(`${dir}/${id}`))
  dir = `${dir}/${id}`
  fs.mkdirSync(dir, { recursive: true })

  const oFile = `${dir}/o.${ext}`
  const imageData = getBase64DataFromJpegFile(file)
  const scrubbedImageData = piexif.remove(imageData)
  const imageBuffer = Buffer.from(scrubbedImageData, 'binary')
  fs.writeFileSync(oFile, imageBuffer)

  for (const key in sizes) {
    const width = sizes[key][0]
    const height = sizes[key][1]
    const outputFile = `${dir}/${key}.${ext}`

    const image = sharp(oFile)
    const metadata = await image.metadata()

    const resizeOptions = {
      fit: sharp.fit.contain,
    }

    if (metadata.width > metadata.height) {
      resizeOptions.width = width
    } else if (metadata.width < metadata.height) {
      resizeOptions.height = height
    } else {
      resizeOptions.width = width
      resizeOptions.height = height
    }

    await image.resize(resizeOptions).toFile(outputFile)

    console.log(`File ${outputFile} was created`)
  }
}

function getBase64DataFromJpegFile(filename) {
  return fs.readFileSync(filename).toString('binary')
}

/**
 * Downloads file from remote HTTP[S] host and puts its contents to the
 * specified location.
 */
async function download(url, filePath) {
  const proto = !url.charAt(4).localeCompare('s') ? https : http

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath)
    let fileInfo = null

    const request = proto.get(url, (response) => {
      if (response.statusCode !== 200) {
        fs.unlink(filePath, () => {
          reject(new Error(`Failed to get '${url}' (${response.statusCode})`))
        })
        return
      }

      fileInfo = {
        mime: response.headers['content-type'],
        size: parseInt(response.headers['content-length'], 10),
      }

      response.pipe(file)
    })

    // The destination stream is ended by the time it's called
    file.on('finish', () => resolve(fileInfo))

    request.on('error', (err) => {
      fs.unlink(filePath, () => reject(err))
    })

    file.on('error', (err) => {
      fs.unlink(filePath, () => reject(err))
    })

    request.end()
  })
}

function checkSource(file) {
  return isValidHttpUrl(file) ? SOURCE.URL : SOURCE.LOCAL_FILE
}

function isValidHttpUrl(string) {
  let url
  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
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
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
