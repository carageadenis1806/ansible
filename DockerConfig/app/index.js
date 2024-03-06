const app = require("express")();

app.get("/", (req, res) => 
res.send("Docker container web app running on external port ${process.env.PORT || internalPort}"));

app.listen(9999, ()=> console.log("Listening on 9999"))