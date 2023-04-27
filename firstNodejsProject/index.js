// Global keywords
// console.log(__dirname)
// console.log(__filename)

// const xyz = require('./people')

// console.log(xyz)

// const os = require('os')

// console.log(os.platform(), os.homedir())

const fs = require("fs");

// fs.readFile('./people.js',(error, data)=>{
//     if (error) console.log(error)
//     else{
//         console.log(data.toString())
//     }
// })

// fs.writeFile('first.txt',"Hey I am Bhavye", ()=>{
//     console.log("File is written...")
// })

// fs.mkdir("backened",()=>{
//     console.log("Directory created...")
// })
// if (fs.existsSync("first.txt")){
//     console.log("Existed")
//     fs.unlink("first.txt",()=>{
//         console.log("File deleted successfully")
//     })
// }

// let res = ""
// for (let i=0; i<=100000; i++){
//     res+=`Hey I am using this and the index is : ${i}\n`;
// }
// console.log(res)

// fs.writeFileSync("bigFile.txt",res,()=>{
//     console.log("File written successfully...")
// })

// const readStream = fs.createReadStream("bigFile.txt", {encoding:'utf-8'});

// readStream.on("data", (chunk) => {
//   console.log("New chunk");
//   console.log(chunk.toString());
// });