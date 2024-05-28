import { createServer } from "./server";

const server = createServer();

server.listen(server.get("port"), () => {
  console.log(`Server running on port ${server.get("port")}`);
});
