// Crear servidor desde cero
const http = require('node:http') // Protocolo http
const { findAvailablePort } = require('./09.free-port.js')

const desiredPort = process.env.PORT ?? 3000 // Puerto por defecto 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

// server.listen(0, () => { // Se coloca puerto 0 para que automáticamente te brinde un puerto libre. No recomendable para producción
//   console.log(`Server listening on port http://localhost:${server.address().port}`) // Buscamos el puerto asignado
// })

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
  })
})
