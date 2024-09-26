const express = require("express");
const { marked } = require("marked");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint for Markdown to HTML conversion
app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  const html = marked(markdown);
  res.json({ html });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
