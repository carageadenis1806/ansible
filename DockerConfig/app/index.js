const app = require("express")();

app.get("/", (req, res) => 
res.send("docker container web app"));

app.listen(9999, ()=> console.log("Listening on 9999"))