const fs = require("fs")

const idris = fs.readFileSync('./files/idris.txt', 'utf-8')
console.log(idris)


const meContent = fs.readFileSync('./files/me.txt', 'utf-8')
console.log(meContent)

const cinnamon = "Emco super oat biscuits"
fs.writeFileSync('./files/christianah.txt', cinnamon)

const sugar = '33% oat flakes, no sugar added'
fs.writeFileSync('./files/biscuit.txt', sugar)

fs.readFile('./files/asyncfile.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

fs.readFile('./files/asyncc.txt', 'utf-8', (e, data) => {
    if(e){
        console.log(e)
    }else{
        console.log(data)
    }
})

fs.readFile('./files/asyncfileagain.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})