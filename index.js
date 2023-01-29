const express = require('express')
const path = require('path')
const port = process.env.PORT || 3030
const app = express()

app.use(express.static(path.join(__dirname,'build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'build', 'index.html'))
})

app.get('/health', (req, res) => {
    res.send({message: 'okay'})
})

app.listen(port, () => {
    console.log('server is running')
})