/* const tiff = require("tiff")
const fs =  require("fs")
const { PNG } = require("pngjs");
var input = fs.readFileSync("file_example_TIFF_10MB.tiff")
var data = tiff.decode(input,{width:600, height:800})
 */
/* 
const sharp = require("sharp")
const fs = require("fs")
sharp(fs.readFileSync("new-image.jpg")).resize(100,100).toFile("out.jpg",(err, info)=>{
    console.log(info)
}) */

/* 
var ConvertTiff = require('tiff-to-png');
var path = require("path")
var options = {
    logLevel: 1
  };
   
  var converter = new ConvertTiff(options);
   
  var tiffs = [
    'new-file.tiff',
    'file_example_TIFF_10MB.tiff'
  ];
  var location = path.join(__dirname,'serve');
   //console.log(location)
  converter.convertOne('/tiff_compression/new-file.tiff', "/tiff_compression/serve");

   */

  /**
   * preGo  
   * 
   */
/* 

    sudo apt install graphicsmagick-imagemagick-compat  # version 1.4+really1.3.35-1, or
    sudo apt install imagemagick-6.q16                  # version 8:6.9.10.23+dfsg-2.1ubuntu11.4
    sudo apt install imagemagick-6.q16hdri              # version 8:6.9.10.23+dfsg-2.1ubuntu11.4
    */

    

  const { spawn } = require( 'child_process' );
  const fs = require("fs")
  var getDirArray = (url)=>{
    return fs.readdirSync(url) 
  }
  var isFile = (path)=>{return path.includes(".")}
  var compress = (inputPath, outputPath)=>{
    const ls = spawn( 'convert', [ '-compress', 'lzw',"-colorspace","Gray",inputPath, outputPath ] );
    ls.stdout.on( 'data', ( data ) => {
      console.log( `stdout: ${ data }` );
    });
  
    ls.stderr.on( 'data', ( data ) => {
      console.log( `stderr: ${ data }` );
    });
  
    ls.on('close', ( code ) => {
      console.log( `child process exited with code ${ code } ${inputPath}` );
    });
  
  }
const output = "serve/"
const input = "tiffsSamle/"
const dirArray = getDirArray("tiffsSamle/")
dirArray.forEach(element => {
  if(isFile(element))
    compress(input+element, output+element)

});
  
/* 
  const ls = spawn( 'convert', [ '-compress', 'lzw',"file_example_TIFF_10MB.tiff","file_example_TIFF_10MB.tiff" ] );
  ls.stdout.on( 'data', ( data ) => {
    console.log( `stdout: ${ data }` );
  });

  ls.stderr.on( 'data', ( data ) => {
    console.log( `stderr: ${ data }` );
  });

  ls.on('close', ( code ) => {
    console.log( `child process exited with code ${ code }` );
  });
 */


// convert -compress lzw -colorspace Gray ddd.tiff dest2.tiff 
