import * as fs from 'fs'
import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';

const app = express()
const port = process.env.PORT || 6969

const allowedOrigins = [
  'http://localhost:3000', 
  'https://lifoodie-dev.web.app'
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/', (req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.sendFile(path.join(__dirname, '/welcome.html'))
})

app.get('/Lifoodie-getAllFood', async (req, res) => {

  let dir = await fs.promises.readdir('food-json')

  let allFood = []
  let currFile;
    
  for (let index = 0; index < dir.length; index++) {
    const curr = dir[index]  
      
    currFile = await fs.promises.readFile(('food-json/' + curr), 'utf-8')
    allFood.push(JSON.parse(currFile))
  }

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.json({"data" : allFood})
});



app.listen(port);

