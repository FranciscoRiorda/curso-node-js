// Modulos nativos de NodeJS

// import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'; => con .mjs
const os = require('node:os');

console.log('Información del sistema operativo:')
console.log('-------------------------')
console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria libre: ', os.freemem()/1024/1024)
console.log('Memoria total: ', os.totalmem()/1024/1024)
console.log('Tiempo que lleva la pc prendida: ', os.uptime()/60/60)