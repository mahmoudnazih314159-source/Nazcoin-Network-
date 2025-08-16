// Nazcoin Backend - First Version
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Welcome to Nazcoin Network API - Mobile Mining Coming Soon!");
});

app.listen(PORT, () => {
  console.log(`Nazcoin server running on port ${PORT}`);
});
