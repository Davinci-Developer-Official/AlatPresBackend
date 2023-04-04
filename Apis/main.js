const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const cors=require("cors");
const routing = require("./router")
const http = require("http").Server(app)
const conn={
  name:'EC2',
  port:3500,
}
const time = require("../Algo/date")
const io = require("socket.io")(http)
const {responsegroup}= require("../Sockets/sockets")
//dependecies to use
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api",routing.router);//All Api routes
app.use((req, res, next) => {
  if (req.protocol === 'http') {
    res.redirect(`https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

app.get('/',(req,res)=>{
  res.status(200)
  .send(`Welcome to alatpres Api center  `)
  console.log(`${time.generateTime()}`)
})

app.get('/api',(req,res)=>{
  res.status(200)
  .send(`Welcome to alatpres Api center  `)
  console.log(`${time.generateTime()}`)
})


/*Sockets */
io.on('connection',(socket)=>{
 console.log(socket.id)
 //about groups
  socket.emit("groups","response groups")

  //group connection status
  socket.on("statusgroups",(args)=>{
    console.log(`${args}`)
    io.emit("statusgroups",args)
  })
  //diconnecting
  socket.on("disconnect",(msg)=>{
    console.log("you have disconnected"+msg)
  })
})

/*sockets */







//https connection
//const secureSSl= https.createServer({
//  key: fs.readFileSync(path.join(__dirname,"./certificates/key.pem")),
//  cert:fs.readFileSync(path.join(__dirname,"./certificates/cert.pem")),
//},app)
//secureSSl.listen(conn.port,()=>console.log(`server is on localhost ${conn.port} `))

//listen to port
http.listen(conn.port,()=>console.log(`server is on localhost ${conn.port} `))

module.exports={app}
