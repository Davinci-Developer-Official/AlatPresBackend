const express = require('express')();
const https = require('https');
const cors = require('cors');
const bodyParser = require('body-parser')
//const server = https.createServer(express);
const port =  process.env.PORT || 3500;
const redirect = require('./router');//express router

express.use(cors({origin:'*'}));
express.use(bodyParser.urlencoded({extended:true}));
express.use('/alatpres/api/alerts',redirect.routers);//redirects to expres router





express.listen(port,()=>console.log(`listening to port ${port}`));

