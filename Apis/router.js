const {Router}= require("express")
const router = new Router();
const Logic = require("./operator")
//const pool = require("./connection/db")



//alerts
router.get('/alerts',Logic.getAlerts)//fetch all alerts
router.get('/alerts/:id',Logic.getAlertsById)
router.post('/alerts',Logic.postAlert);
router.delete("/alerts",Logic.deleteAllAlerts);
router.delete('/alerts/:id',Logic.deleteAlertById)



//providers
router.get("/providers",Logic.getAllProvider)
router.get("/providers/:id",Logic.getResponseProvidersById)
router.post("/providers",Logic.createNewResponseProvider)
router.delete("/providers",Logic.deleteAllResponseProviders)
router.delete('/providers/:id',Logic.deleteResponseProviderById)



//Reports
router.get("/reports",Logic.getAllReports)
router.get("/reports/:id",Logic.getReportById)
router.post("/reports",Logic.newReport)
router.delete("/reports/:id",Logic.deleteReportById)
router.delete("/reports",Logic.deleteAllReports);



//response groups
router.get("/resgroup",Logic.getAllResponseGroups)
router.post("/resgroup",Logic.createNewResponseGroup)
router.delete("/resgroup",Logic.deleteAllResponseGroups)
router.delete("/resgroup/:id",Logic.deleteResponseGroupById)

//members
router.get("/members",Logic.getAllMembers)
router.get('/members/:id',Logic.getMemberById)
router.post('/members',Logic.createNewMember)
router.delete('/members',Logic.deleteAllMembers)
router.delete('/members/:id',Logic.deletememberById)

//Users
router.get("/users",Logic.getAllUsers)
router.get('/users/:id',Logic.getUserById)
router.post('/users',Logic.createNewUser)
router.delete('/users',Logic.deleteAllUsers)
router.delete('/users/:id',Logic.deleteUserById)


module.exports={router}