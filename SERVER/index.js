import express, { json } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.send(JSON.stringify({ name: "shuvo", job: "web developer learner" }));
});

app.listen(PORT, () => {
  console.log("https://localhost:3000");
});
