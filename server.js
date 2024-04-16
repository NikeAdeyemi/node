const http = require('http')
const port = 9000
const fs = require("fs")

const homePage = fs.readFileSync("./pages/homePage.html", "utf-8")
const about = fs.readFileSync("./pages/about.html", "utf-8")
const services = fs.readFileSync("./pages/services.html", "utf-8")
const produts = fs.readFileSync("./pages/products.html", "utf-8")
const testimonial = fs.readFileSync("./pages/testimonial.html", "utf-8")
const errorPage = fs.readFileSync("./pages/error.html", "utf-8")


const server = http.createServer( (req, res) => {
    let path = req.url
    if(path === '/' || path === '/home') {
        res.end(homePage)
    }else if(path === '/about'){
        res.end(about)
    }else if(path === '/services'){
        res.end(services)
    }else if(path === '/products'){
        res.end(produts)
    }else if(path === '/testimonial'){
        res.end(testimonial)
    }else{
        res.end(errorPage)
    }
})

server.listen(port, () => {
    console.log('Server started successfully')
})


