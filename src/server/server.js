import express from "express";
import path from "path";

export const startServer = (options) => {
    const { port, public_path = "public" } = options;

    const app = express();

    // para poderusar un middleware en express se utiliza la pálabra use
    app.use(express.static(public_path)); // contenido estático que ponemos disponible

    app.get("*", (req, res) => {
        const indexPath = path.join(__dirname, `../../../${public_path}/index.html` )
        res.sendFile(indexPath)
    });

    app.listen(port, () => {
        console.log(`Escuchando por el puerto ${port}`)
    })
};
