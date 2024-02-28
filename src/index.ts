import { Application, oakCors, config } from "../deps.ts";
import router from "./router.ts";

const host = Deno.env.get("APP_HOST");
const port = Deno.env.get("APP_PORT");

// Necessário para carregar as variáveis de ambiente
await config({export: true});

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on http://${host}:${port}/`);

await app.listen(`${host}:${port}`);