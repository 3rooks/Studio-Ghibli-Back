import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (rea, res) => {
  res.send(`req ${process.pid} on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
