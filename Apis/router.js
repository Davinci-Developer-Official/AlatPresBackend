const {Router}= require("express")
const router = new Router();
const Logic = require("./operator")


//alerts
router.get('/alerts',Logic.getAlerts)



//providers
router.get("/providers",Logic.getAllProvider)



//Reports
router.get("/reports",Logic.getAllReports)


//response groups
router.get("/response-groups",Logic.getAllResponseGroups)

//members
router.get("/members",Logic.getAllMembers)

//Users
router.get("/users",Logic.getAllUsers)


module.exports={router}