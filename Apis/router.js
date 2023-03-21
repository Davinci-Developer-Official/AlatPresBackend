const {Router}= require("express")
const router = new Router();
const Logic = require("./operator")
const pool = require("./connection/db")


//alerts
router.get('/alerts',Logic.getAlerts)//fetch all alerts
router.get('/alerts/:id',Logic.getAlertsById)
router.post('/alerts',Logic.postAlert);
router.delete("/alerts",Logic.deleteAllAlerts);
router.delete('/alerts/:id',Logic.deleteAlertById)



//providers
router.get("/providers",Logic.getAllProvider)



//Reports
router.get("/reports",Logic.getAllReports)


//response groups
router.get("/resgroup",Logic.getAllResponseGroups)
router.post("/resgroup",Logic.createNewResponseGroup)
router.delete("/resgroup",Logic.deleteAllResponseGroups)
router.delete("/resgroup/:id",Logic.deleteResponseGroupById)

//members
router.get("/members",Logic.getAllMembers)

//Users
router.get("/users",Logic.getAllUsers)


module.exports={router}