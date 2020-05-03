// Tutorial de como hacer un serverlistener con deno version 1.0
//Mandamos a llamar a la lectura de un formato JSON
import { readJson } from 'https://deno.land/std/fs/mod.ts';
//Importamos el paquete de oak para crear los middleware
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
//Creamos las rutas del servidor con oak
const router = new Router();
router
  .get("/", context => {
    context.response.body = "Hello world!";
  })
  .get("/data", async context => {
    const data = await readJson("./data.json");
    context.response.body = data;
  })
  .get('/fetch', async context => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/').then(res => res.json());
    context.response.body = JSON.stringify(res, null, 4);
  });
//Iniciamos el servidor
  const app = new Application();

  app.use(router.routes());
  app.use(router.allowedMethods());
  
  app.listen("0.0.0.0:8000");
