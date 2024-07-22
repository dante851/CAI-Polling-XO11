const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;
let pollingStatus;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/koreAI", require("./routes/koreAIPollingRoutes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
