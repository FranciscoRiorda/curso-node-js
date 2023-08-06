const http = require('node:http')

// CommonJS => modulos clasicos de node. Se puede usar json
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Not Found 404</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          const body = ''
          break
        }
        case '/otro': {
          const body = ''
          break
        }
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Server listening on port http://localhost:1234')
})
