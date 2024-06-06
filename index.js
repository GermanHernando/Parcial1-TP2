import express from 'express'
import calificacionesRouter  from './src/routes/calificaciones.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use("/", calificacionesRouter);
//app.use("/", new Router().start());

app.listen(PORT, ()=> console.log(`Server Listening on: ${PORT}`));
app.on("error", (error)=> console.log(`ERROR: ${error}`));
