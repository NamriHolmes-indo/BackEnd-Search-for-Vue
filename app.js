import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const faqs = JSON.parse(fs.readFileSync("./data/faqs.json", "utf8"));

function scoreItem(query, item) {
  const q = query.toLowerCase();

  let score = 0;
  if (item.title.toLowerCase().includes(q)) score += 2;
  if (item.body.toLowerCase().includes(q)) score += 1;

  return score;
}

app.post("/api/search", (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Query cannot be empty" });
  }

  const results = faqs
    .map((item) => ({
      ...item,
      score: scoreItem(query, item),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (results.length === 0) {
    return res.json({
      results: [],
      message: "No matches found.",
    });
  }

  const combinedSummary =
    results
      .map((r) => r.body)
      .join(" ")
      .slice(0, 200) + "...";

  return res.json({
    results,
    summary: combinedSummary,
    sources: results.map((r) => r.id),
  });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
