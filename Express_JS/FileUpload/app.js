const express = require('express')

const fileUplaod = require('express-fileupload')

const path = require('path')

const PORT = process.env.PORT || 3050

const app = express()

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/upload', fileUplaod({ createParentPath: true }),
  (req, res) => {
    const files = req.files
    console.log(files)

    return res.json({ status: 'logged', message: 'logged' })
  }
)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
