require("./database");

import express, { Express } from "express";
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routesUsers = require("./routes/users.routes");
const routesAuth = require("./routes/auth.routes");
const routesCompare = require("./routes/compare.routes");
import workoutRoutes from "./routes/workout.routes";
import rpeRoutes from "./routes/rpe.routes";
//import rpeDashboardRoutes from "./routes/rpedashboard.routes";

// Initialization
const app: Express = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at ${PORT}`);
});

dotenv.config();

// Routes
// app.use(routesUsers);
app.use("/users", routesUsers);
app.use("/auth", routesAuth);
app.use("/compare", routesCompare);
app.use("/workouts", workoutRoutes);
app.use("/rpe", rpeRoutes);
//app.use("/dashboard", rpeDashboardRoutes);

module.exports = app;
