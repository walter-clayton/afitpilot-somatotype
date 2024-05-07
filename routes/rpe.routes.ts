import { Router, Request, Response } from "express";
import RPE from "../models/RpeModel";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { emoji, numeroClique, colors } = req.body;
    const rpeData = new RPE({ emoji, numeroClique, colors });
    await rpeData.save();
    res.status(201).json({ message: "RPE data saved successfully" });
  } catch (err) {
    console.error("Error saving RPE data:", err);
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default router;
