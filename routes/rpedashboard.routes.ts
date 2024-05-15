import { Router, Request, Response } from "express";
import RPE from "../models/RpeModel";

const router: Router = Router();

function getEmojiAndColor(score: number) {
  const emojis = ["😆", "😋", "😊", "🙂", "😉", "😯", "😪", "😥", "😭", "😵"];
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

  const index = Math.round(score) - 1;

  return { emoji: emojis[index], color: colors[index] };
}

router.get("/rpe", async (req: Request, res: Response) => {
  try {
    const rpeData = await RPE.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$dateClique" } },
          averageScore: { $avg: "$numeroClique" },
        },
      },
    ]);

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
