const fs = require("node:fs"); // file system. Se recomienda usar el prefijo node: antes del fs

const stats = fs.statSync('./archivo.txt') //sincrono, obtenemos la info de un archivo

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbolico
    stats.size //tamaño en bytes
)
