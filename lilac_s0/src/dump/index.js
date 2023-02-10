const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const archiver = require('archiver')

const { resolve } = path

const srcDir = resolve(__dirname, '../../public')
const tmpDir = resolve(__dirname, '../../tmp')
const dumpFile = `${tmpDir}/dump.zip`
const tmpPublicDir = `${tmpDir}/public`

try {
  clearTmpDir(tmpDir, dumpFile)
  copy(srcDir, tmpPublicDir)
  rmNeedlessFiles(tmpPublicDir)
  makeZip(dumpFile, tmpDir, tmpPublicDir)
} catch (e) {
  console.error(e)
}

function makeZip(dumpFile, tmpDir, tmpPublicDir) {
  // create a file to stream archive data to.
  const output = fs.createWriteStream(dumpFile)
  const archive = archiver('zip', {
    zlib: { level: 9 },
  })

  // listen for all archive data to be written
  // 'close' event is fired only when a file descriptor is involved\
  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes')
    console.log(
      'archiver has been finalized and the output file descriptor has closed.'
    )
  })

  // This event is fired when the data source is drained no matter what was the data source.
  // It is not part of this library but rather from the NodeJS Stream API.
  // @see: https://nodejs.org/api/stream.html#stream_event_end
  output.on('end', function () {
    console.log('Data has been drained')
  })

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function (err) {
    console.warn(err)
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err
    }
  })

  // good practice to catch this error explicitly
  archive.on('error', function (err) {
    throw err
  })

  // pipe archive data to the file
  archive.pipe(output)

  // append files from a sub-directory and naming it `new-subdir` within the archive
  archive.directory(tmpPublicDir, false)

  archive.finalize()
}

function copy(srcDir, tmpDir) {
  fse.copySync(srcDir, tmpDir)
}

function clearTmpDir(tmpDir, dumpFile) {
  const tmpPublicDir = `${tmpDir}/public`

  if (fs.existsSync(tmpPublicDir)) {
    fs.rmSync(tmpPublicDir, { recursive: true, force: true })
  }

  fs.mkdirSync(tmpPublicDir, { recursive: true })

  if (fs.existsSync(dumpFile)) {
    fs.rmSync(dumpFile)
  }
}

function rmNeedlessFiles(dir) {
  const rm = function (dir) {
    for (let item of fs.readdirSync(dir)) {
      item = `${dir}/${item}`
      if (fs.lstatSync(item).isDirectory()) {
        rm(item)
      } else {
        const filename = path.parse(item).name
        if (filename !== 'o') {
          fs.rmSync(item)
        }
      }
    }
  }

  rm(dir)
}
