const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '..', 'build')
const app = express()

app.use(express.static(publicPath))

app.get('*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(process.env.PORT || 3000)
