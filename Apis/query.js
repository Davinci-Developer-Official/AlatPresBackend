
/* Alerts start */
    const newAlert =  'INSERT INTO alerts (alerttype, provider, resgroup, description, alertuuid) VALUES ($1, $2, $3, $4, $5)';
    const allAlerts ='SELECT * FROM alerts';
    const getAlertsById = 'SELECT * FROM alerts WHERE id = $1';
    const deleteAllAlerts="DELETE FROM alerts";
    const deleteAlertById="DELETE FROM alerts WHERE id=$1 ";
/* Alerts end */

/* response groups start */
    const newResGroups ="INSERT INTO resgroups( groupname,grouppurpose,groupdescription,groupcategory,groupuuid) VALUES($1,$2,$3,$4,$5) ";
    const allResGroups = "SELECT * FROM resgroups"
    const getRespGroupById="SELECT * FROM resgroups WHERE id = $1"
    const deleteAllResponseGroups="DELETE FROM resgroups";
    const deleteResponseGroupById="DELETE FROM resgroups WHERE id = $1 ";
/* response groups end */

/* response providers start */
const newResProviders ="INSERT INTO resproviders (providername,location,membersuuid) VALUES($1,$2,$3) ";
const allResProviders ="SELECT * FROM resproviders";
const getResProviderById="SELECT * FROM resproviders WHERE id = $1";
const deleteAllProviders="DELETE FROM resproviders";
const deleteProviderById="DELETE FROM resproviders WHERE id = $1 ";
/* response providers end */

/*reports start */
const newReport ="INSERT INTO reports(title,topic,source,body,authors,reportuuid) VALUES($1,$2,$3,$4,$5,$6)";
const getAllReports ="SELECT * FROM reports"
const getReportsById ="SELECT * FROM reports WHERE id = $1 ";
const deleteAllReports="DELETE FROM reports";
const deleteReportById="DELETE FROM reports WHERE id = $1";
/* reports groups end */

/* Members start */
const newMember="INSERT INTO members(name,phonenumber,userid,role,membersuuid) VALUES($1,$2,$3,$4,$5) ";
const allMembers="SELECT * FROM members";
const getMemberById="SELECT * FROM members WHERE id = $1";
const deleteAllMembers="DELETE FROM members";
const deleteMemberById="DELETE FROM members WHERE id = $1"
/* Members end */

/* Users start */
const newUsers ="INSERT INTO users(username,email,phonenumber,password,uuid) VALUES($1,$2,$3,$4,$5)";
const allUsers ="SELECT * FROM users";
const getUserById="SELECT * FROM users WHERE id = $1 ";
const deleteAllUsers ="DELETE FROM users";
const deleteUserById="DELETE FROM users WHERE id = $1";
/* Users end */

module.exports={
    //alerts
    newAlert,
    allAlerts,
    getAlertsById,
    deleteAlertById,
    deleteAllAlerts,

    //response groups
    newResGroups,
    allResGroups,
    getRespGroupById,
    deleteResponseGroupById,
    deleteAllResponseGroups,

    //response Providers
    newResProviders,
    allResProviders,
    getResProviderById,
    deleteAllProviders,
    deleteProviderById,

    //reports
    newReport,
    getAllReports,
    getReportsById,
    deleteAllReports,
    deleteReportById,

    //member
    newMember,
    allMembers,
    getMemberById,
    deleteAllMembers,
    deleteMemberById,
    //users
    newUsers,
    allUsers,
    getUserById,
    deleteAllUsers,
    deleteUserById
}