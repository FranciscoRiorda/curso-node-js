const fs = require("node:fs");

fs.readdir(".", (err, files) => {
  // readdir: leer el directorio. El error va primero.
  if (err) {
    console.error("Error al leer el directorio: ", err);
    return; // return para que no siga ejecutando
  }
  files.forEach((file) => {
    console.log(file);
  });
});
