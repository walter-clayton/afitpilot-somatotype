import { Express } from "express";
require("./database");

const app: Express = require("./server");

const PORT: number = app.get("port");

app.listen(PORT, () => {
  console.log(`[server]: Server is running at ${PORT}`);
});
