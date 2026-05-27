import express from "express"
import { configRoutes } from "./routes.ts"
const app = express()
const port = 3000

function main() {

  configRoutes(app);
  app.use
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

main();
