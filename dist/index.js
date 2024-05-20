"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('./database');
const app = require("./server");
const PORT = app.get("port");
app.listen(PORT, () => {
    console.log(`[server]: Server is running at ${PORT}`);
});
