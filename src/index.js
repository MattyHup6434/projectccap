require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "GET" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
