const {spawn} = require("child_process")


const fs = require("fs")
var getDirArray = (url)=>{
    return fs.readdirSync(url) 
}

var isFile = (path)=>{
    return path.includes(".")
}
const dirArray = getDirArray("node_modules/.bin")
dirArray.forEach(element => {
    
    console.log(element + " => " + isFile(element))
});