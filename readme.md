# PROYECTO NODE JS

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

## Import / Export

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
