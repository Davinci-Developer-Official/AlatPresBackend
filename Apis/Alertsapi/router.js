const {Router}= require('express');
const routers = Router();
const operator = require('./operator')

routers.get('/',operator.getAlerts);



module.exports={
    routers
}
