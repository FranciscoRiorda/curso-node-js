const express = require('express')
const app = express()
const ditto = require('./pokemon/ditto.json')

app.disable('x-powered-by') // Quitar cabecera que indica tecnologia usada por seguridad

const PORT = process.env.PORT ?? 1234

// Express ya cuenta con un middleware para realizar lo de abajo
// app.use(express.json())
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // Solo llegan las req que son POST y tienen el Content-Type: application/json
  let body = ''

  // Escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // acá deberíamos guardar en BD
  res.status(201).json(req.body)
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost/${PORT}`)
})
