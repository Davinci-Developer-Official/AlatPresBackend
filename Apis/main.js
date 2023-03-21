const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const cors=require("cors");
const routing = require("./router")
const conn={
  name:'EC2',
  port:3500,
}
const time = require("../Algo/date")
//dependecies to use
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use("/api",routing.router);//All Api routes


app.get('/api',(req,res)=>{
  res.status(200)
  .send(`Welcome to alatpres Api center  `)
  console.log(`${time.generateTime()}`)
})



//https connection
const secureSSl= https.createServer({
  key: fs.readFileSync(path.join(__dirname,"./certificates/key.pem")),
  cert:fs.readFileSync(path.join(__dirname,"./certificates/cert.pem")),
},app)
secureSSl.listen(conn.port,()=>console.log(`server is on localhost ${conn.port} `))
