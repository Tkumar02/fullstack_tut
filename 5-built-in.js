const os = require('os')

// info about current user
const user  = os.userInfo()
//console.log(user)

//method returns the system uptime in seconds
//console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

//console.log(currentOS)

const path = require('path')
//console.log(path.sep)
const filePath = path.join('/content/','subfolder','text.txt')
//console.log(filePath)

const base = path.basename(filePath)
//console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
//console.log(absolute)

const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// or as above
//const x = require('fs')

// const first = x.readFileSync('./content/first.txt','utf8')
// const second = x.readFileSync('./content/second.txt','utf8')

//console.log(first,second)

//writeFileSync('./content/third.txt',`i've got ${first}'s content and ${second}'s contents`)

const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})