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
  origin: ["http://localhost:3000", "https://www.afitpilot.com/"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at ${PORT}`);
});

dotenv.config();

// Midlewares
// limit: "50mb" = fixing "413 Request Entity Too Large" errors
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// Routes
// app.use(routesUsers);
app.use("/users", routesUsers);
app.use("/auth", routesAuth);
app.use("/compare", routesCompare);
app.use("/workouts", workoutRoutes);
app.use("/rpe", rpeRoutes);
//app.use("/dashboard", rpeDashboardRoutes);

module.exports = app;
