const path = require("node:path");

// Barra separadora de carpetas según sistema operativo
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Sacar el nombre del directorio
const base = path.basename("./tmp/midudev/password.txt");
console.log(base);

// Sacar nombre sin la extensión
const fileName = path.basename("./tmp/midudev/password.txt", ".txt");
console.log(fileName);

// consultar la extensión
const extension = path.extname("myImg.jpg");
console.log(extension);
