const express = require('express')
const app = express()
const cors = require("cors")
const fs = require("fs")
const path = require("path")
const { promisify } = require("util");
const asyncStat = promisify(fs.stat);
const port = 3004
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  fs.readdir('public', (err, files) => {
    res.send(files)

  })
})
app.get('/:file/Info', (req, res) => {
  const url = req.params.file
  fs.stat(`public/${url}`, (err, stat) => {
    return res.send(stat)

  }
  )

})
app.get('/:file/Show',(req, res) => {
  const url = req.params.file
  fs.readFile(`public/${url}`, (err, data) => {
    return res.send(data)
console.log(data);
  }
  )

})
app.put('/:file/Rename',(req, res) => {
  const url = req.params.file
  fs.rename(`public/${url}`,`public/${req.body.name}`, (err, data) => {

  }
  )

})
app.post('/:file/copy',(req, res) => {
  const url = req.params.file
  fs.copyFile(`public/${url}`,`public/${req.body.name}`, (err, data) => {

  }
  )

})
app.delete('/:file/Delete', (req, res) => {
  const url = req.params.file
  console.log(url);
fs.rm(`public/${url}`,(err,delet)=>{
  res.send(delet)
} )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})