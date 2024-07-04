const fs=require("fs")
let data="this is learning"
// 1-// <----------how to write in file Asyns----->
// fs.writeFile("./demo.txt",data,(err)=>{
//     err?console.log(err):console.log(data)
// })

// <----------how to write in file sync----->
// fs.writeFileSync("./sync.txt","hello world")

// 2- how to read file

// a-
// let ressult=fs.readFileSync("./demo.txt","utf-8")
// console.log(ressult);
// b-
// fs.readFile("../masai.txt","utf-8",(err,data)=>err?console.log(err):console.log(data))
// 3- how to edit file

// fs.appendFile("./demo.txt","this is my node project \n",(err,data)=>err?console.log(err):console.log(data))

// Note important if you want to completely over write your excesting file you need to you 


// fs.writeFile("./demo.txt", "this is my  new node project \n", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File has been overwritten");
//     }
// });

// 4-if you want to delete any file
fs.unlinkSync("../masai.txt")