import { serve } from "./deps.ts";

const port = 8000;
const s = serve({ port });

console.log(`Listening to http://localhost:${port}/`);

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
