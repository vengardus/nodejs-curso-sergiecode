# PROYECTO NODE JS

[Desdde el curso de Sergie Code](https://www.youtube.com/watch?v=I17ln313Pjk&t=4063s)

## INICIANDO PROYECTO

```bash
npm init 
# ingresar datos solicitados o dar enter para dejar igual
```

Se crea un archivo package.json, el cuál podemos modificar :

```json
...
"main": "src/app.js",
...
"scripts": {
      "dev": "node src/app.js"
  },
```

Creamos una carpeta src/ y dentro un archivo app.js

Luego ejecutamos desde consola:

```bash
npm run dev
```

## INSTALANDO DEPENDENCIAS

- nodemon

```bash
npm install --save-dev nodemon
```

- actualizar el package.json

```json
...
 "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
```

## IMPORT / EXPORT

Configurarpackage.json para trabajar modo module.

```json
{
...
  "type": "module",
...
}
```

Ejemplo de como declarar y hacer la importación

```js fnction.js
export const getTitle = () => 'Curso NodeJS'
```

```js app.js
import {getTitle} from './function.js'  // debe incluirse la extensión del fichero

console.lo(getTitle())
```

## VARIABLES DE ENTORNO

```bash
npm i dotenv
```

```text   file .env
PORT=3000
db_USER=vengardus
```

```js   app.js
import {config} from "dotenv"

config()

console.log(process.env.PORT)
console.log(process.env.DB_USER)
```

## INSTALANDO JSON-SERVER PARA PRUEBAS APIREST

[instalar json-server](https://www.npmjs.com/package/json-server)
Las pruebas http las hice con la extensión ThunderClient de VSCode
