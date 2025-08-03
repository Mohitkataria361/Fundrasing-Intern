import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/user", (req, res) => {
  res.json({
    name: "Mohit Kataria",
    referralCode: "mohit2025",
    donationsRaised: 12064564
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Riya", amount: 3200 },
    { name: "Mohit", amount: 2500 },
    { name: "Aryan", amount: 1800 }
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
