const express = require('express')
const cors = require('cors')

const app = express()

const nomes = []

app.use(express.json())
app.use(cors())

app.get("/nomes", function (req, res){
  return res.json(nomes)
})

app.post("/nomes", function(req, res){
  nomes.push(req.body.name)
  return res.json(nomes)
})
app.delete("/nomes", function(req, res){
  let name = req.body.name
  let index = nomes.findIndex(name => {
    return name.startsWith(name)
  })
  nomes.splice(index, 1)
  return res.send()
})

app.listen(8080, function(){
  console.log('o server inicou')
})