const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('./page.dat');
const writeStream = fs.createWriteStream('./new-text.txt');
const compressStream = zlib.createGzip();
// const decompressStream = zlib.brotliDecompress();
// readStream.on('data', (chunk) =>{
//     writeStream.write('\n---chunk---\n');
//     writeStream.write(chunk);
//     writeStream.write('\n---chunk---\n');
// })
const errorHend =() =>{
    console.log('error');
    readStream.destroy();
    writeStream.end('Finished with error');
}
readStream  .on('error', errorHend)
            .pipe(compressStream)
            // .pipe(decompressStream)
            .pipe(writeStream)
            .on('error', errorHend);