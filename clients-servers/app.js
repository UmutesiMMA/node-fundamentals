const express =  require('express')
const app = express()

app.listen('3000')

app.get('/',(req,res)=>{
    res.sendFile('/content/index.html',{root:__dirname})
})

app.get('/about',(_,res)=>{
    res.sendFile('/content/about.html',{root:__dirname})
})

app.get('/about-us',(_,res)=>{
    res.redirect('/about.html')
})

app.use((_,res)=>{
    res.status(404).sendFile('/content/notfound.html',{root:__dirname})
})