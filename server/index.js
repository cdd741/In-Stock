const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = process.env;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening on port 8080");
});
