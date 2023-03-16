
/* Alerts start */
    const newAlert = 'INSERT INTO alerts(alerttype,provider,resgroup,description,date,alertuuid) VALUES ($1, $2, $3, $4, $5, $6)';
    const allAlerts ='SELECT * FROM alerts';
    const getAlertsById = 'SELECT * FROM alerts WHERE id = $1';
/* Alerts end */

/* response groups start */
    const newResGroups ="INSERT INTO resgroups(groupname,grouppurpose,groupcategory,grouptuuid ) VALUES($1,$2,$3,$4) ";
    const allResGroups = "SELECT * FROM resgroups"
    const getRespGroupById="SELECT * FROM resgroups WHERE id = $1"
/* response groups end */

/* response providers start */
const newResProviders ="INSERT INTO(providername,location,membersuuid) VALUES($1,$2,$3) ";
const allResProviders ="SELECT * FROM resproviders";
const getResProviderById="SELECT * FROM resproviders WHERE id = $1"
/* response providers end */

/*reports start */
const newReport ="";
/* reports groups end */

/* Members start */
const newMember="INSERT INTO members(name,phonenumber,userid,role,membersuuid) VALUES($1,$2,$3,$4,$5) ";
const allMembers="SELECT * FROM members";
const getMemberById="SELECT * FROM members WHERE id = $1";
/* Members end */

/* Users start */
const newUsers ="INSERT INTO users(username,email,phonenumber,password,uuid) VALUES($1,$2,$3,$4,$5)";
const allUsers ="SELECT * FROM users";
const getUserById="SELECT * FROM users WHERE id = $1 "
/* Users end */

module.exports={
    //alerts
    newAlert,
    allAlerts,
    getAlertsById,

    //response groups
    newResGroups,
    allResGroups,
    getRespGroupById,

    //response Providers
    newResProviders,
    allResProviders,
    getResProviderById,

    //reports
    newReport,

    //member
    newMember,
    allMembers,
    getMemberById,
    //users
    newUsers,
    allUsers,
    getUserById,
}