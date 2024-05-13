import { Router, Request, Response } from "express";
import RPE from "../models/RpeModel";

const router: Router = Router();

function getEmojiAndColor(score: number) {
  const emojis = ["😆", "😋", "😊", "🙂", "😉", "🤨", "😪", "😥", "😭", "🤮"];
  const colors = [
    "#5ce1e6",
    "#37b6fe",
    "#37b6fe",
    "#7dd957",
    "#7dd957",
    "#7dd957",
    "#ffde59",
    "#ffde59",
    "#fe904c",
    "#fe1616",
  ];

  // Round the score to the nearest integer and subtract 1 to get the index
  const index = Math.round(score) - 1;

  // Return the emoji and color at the corresponding index
  return { emoji: emojis[index], color: colors[index] };
}

router.get("/", async (req: Request, res: Response) => {
  try {
    const rpeData = await RPE.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$dateClique" } },
          averageScore: { $avg: "$numeroClique" },
        },
      },
    ]);

    // Map over the rpeData to add the emoji and color for each averageScore
    const rpeDataWithEmojiAndColor = rpeData.map((data: any) => {
      const { emoji, color } = getEmojiAndColor(data.averageScore);
      return { ...data, emoji, color };
    });

    res.status(200).json({ rpeData: rpeDataWithEmojiAndColor });
  } catch (err) {
    console.error("Error fetching RPE data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
