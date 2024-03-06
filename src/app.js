/*--- Sample WebServer ---*/
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


/*** función agnóstica ***/
(async () => {
    main();
})();

