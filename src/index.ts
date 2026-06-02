import { Elysia } from "elysia";
const env = process.env.nome;
const app = new Elysia().get("/", () => "ola tb12\ntudo bem?\nva embora").listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}
  nome : ${env}
  
  
  
  `
);
