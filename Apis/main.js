const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const cors=require("cors");
const routing = require("./router")

//dependecies to use
app.use(cors())
 app.use("/api",routing.router);//All Api routes




//https connection
const secureSSl= https.createServer({
  key: fs.readFileSync(path.join(__dirname,"./certificates/key.pem")),
  cert:fs.readFileSync(path.join(__dirname,"./certificates/cert.pem")),
},app)
secureSSl.listen(3500,()=>console.log(`server is on`))
