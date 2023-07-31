const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234; // Puerto por defecto 3000

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola Mundo");
});

findAvailablePort(desiredPort, () => {
    console.log(`Server listening on port: ${port}`);
});
