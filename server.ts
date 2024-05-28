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
import { setupDB } from "./config/database.config";

dotenv.config();
const uri: string = process.env.MONGODB_URI || "";

export const createServer = (): Express => {
  const app = express();
  const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  };
  const PORT: number = parseInt(process.env.PORT!);
  dotenv.config();
  // Settings

  app
    .set("port", PORT || 8000)
    // Midlewares
    // limit: "50mb" = fixing "413 Request Entity Too Large" errors
    .use(bodyParser.json({ limit: "50mb" }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.json({ limit: "50mb" }))
    .use(
      express.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
      })
    )
    .use(cors(corsOptions))
    // Routes
    // app.use(routesUsers);
    .use("/users", routesUsers)
    .use("/auth", routesAuth)
    .use("/compare", routesCompare)
    .use("/workouts", workoutRoutes)
    .use("/rpe", rpeRoutes);
  // app.use("/rpe/dashboard", rpeDashboardRoutes);

  setupDB(uri); // Initialization

  return app;
};
