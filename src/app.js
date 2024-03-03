/*--- pruebas import export ---*/
import { getTitle, getAuthor } from "./function.js";
import { curso } from "./objects.js";

console.log(getTitle())
console.log(getAuthor('Gardus'))
const {title, author} = curso
console.log(title, author)
/*----------------------------*/

/*--- variables de entorno ---*/
import {config} from "dotenv"

config()

console.log(process.env.PORT)
console.log(process.env.DB_USER)
/*----------------------------*/