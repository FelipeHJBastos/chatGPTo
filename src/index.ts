import { Application, oakCors, config } from "../deps.ts";
import router from "./router.ts";

// Necessário para carregar as variáveis de ambiente
await config({export: true});

const app = new Application();


app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on http://${ Deno.env.get("APP_HOST")}:${Deno.env.get("APP_PORT")}/`);

const options = {
    hostname: Deno.env.get("APP_HOST" ?? "localhost"),
    port: Number(Deno.env.get("APP_PORT" ?? "")),
}

await app.listen(options);