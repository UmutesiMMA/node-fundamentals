const fs = require('fs')
//read file
fs.readFile('./people.js',(error,data)=>{
    if(error)throw error
    console.log(data.toString())
})
//write file

//create directory

//delete directory

//write streams

//read streams
