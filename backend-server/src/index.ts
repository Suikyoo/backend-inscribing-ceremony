import express from "express"
import { configRoutes } from "./routes.ts"
import { port } from "./lib/env/index.ts";
const app = express()

function main() {

  configRoutes(app);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

main();
