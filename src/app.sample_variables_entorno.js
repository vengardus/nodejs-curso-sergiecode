/*--- variables de entorno ---*/
import { config } from "dotenv";

config();

console.log(process.env.PORT);
console.log(process.env.DB_USER);
