const express = require("express");
const app = express();
const internalPort = 9999;

app.get("/", (req, res) => 
  res.send(`Docker container web app running on external port ${process.env.PORT || internalPort}`));

const server = app.listen(internalPort, () => {
  console.log(`Server is running on internal port ${internalPort}`);
});