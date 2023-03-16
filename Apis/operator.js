const queries = require('./query');
const storage = require("./connection/db");

/*--Alerts start--*/
    //get all alerts
        const getAlerts=(req,res)=>{
          storage.pool.query(queries.allAlerts,(error,results)=>{
        if(error){
            res.send('an error occured while obtaining alerts')
            console.error(error);
        }
        res.status(201).send(results.rows);
        console.log(results.rows)
          })
        }
    //get alerts by id
        const getAlertsById=(req,res)=>{
            const id = req.params
            storage.pool.query(queries.getAlertsById,[id],(error,results)=>{
        if(error){
            res.send(`error occured obtaining alert id no ${id}`)
            console.error(error);
        }
        
        res.status(201).json(results.rows);
        console.log(results.rows);
            })
        }
    //post alerts
        const postAlert=(req,res)=>{
           const{alerttype,provider,resgroup,description,date,alertuuid}=req.body;
           storage.pool.query(queries.newAlert,[alerttype,provider,resgroup,description,date,alertuuid],
            (error,results)=>{
                if(error){
                    res.send(`an error has occured`+error)
                    console.error(error);
                }
            res.status(201).send(results.rows);
            console.log(results.rows)
            })    
        }

/*--Alerts Route end--*/

/*--Response Groups start--*/

    //get all response Groups
        const getAllResponseGroups = (req,res)=>{
            storage.pool.query(queries.allResGroups,(error,results)=>{
                if(error){
                    console.error(error);
                    res.send(`${error}`);
                }
                res.status(200)
                    .send(results.rows)
                console.log(results.rows)

            })
        }
    //get response group by id
    const getResponseGroupById= (req,res)=>{
        const id = req.params;
        storage.pool.query(queries.getRespGroupById,[id],(error,results)=>{
            if(error){
                console.error(error);
                res.send(`${error}`)
            }
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
        })
    }
    //create new response group
    const createNewResponseGroup=(req,res)=>{
        const{groupname,grouppurpose,groupcategory,grouptuuid}=req.body;
        storage.pool.query(queries.newResGroups,[groupname,grouppurpose,groupcategory,grouptuuid],(error,results)=>{
          if(error){
            console.error(error);
            res.send(`${error}`);
          }  
          res.status(200)
              .send(results.rows);
          console.log(results.rows);
        })
    }



/*--Response Groups end--*/

/*--Response Provider Route start--*/
    //get all response providers
        const getAllProvider =(req,res)=>{
            storage.pool.query(queries.allResProviders,(error,results)=>{
                if(error){
                    console.error(error);
                    res.send(`${error}`);
                }
                res.status(200)
                    .send(results.rows);
                console.log(results.rows);
            })
        }
    //get response provider by id
    const getResponseProvidersById= (req,res)=>{
        const id = req.params;
        storage.pool.query(queries.getResProviderById,[id],(error,results)=>{
            if(error){
                console.error(error);
                res.send(`${error}`)
            }
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
        })
    }
    //create new response provider
    const createNewResponseProvider=(req,res)=>{
        const{providername,location,membersuuid}=req.body;
        storage.pool.query(queries.newResProviders,[providername,location,membersuuid],(error,results)=>{
          if(error){
            console.error(error);
            res.send(`${error}`);
          }  
          res.status(200)
              .send(results.rows);
          console.log(results.rows);
        })
    }
/*--Response Provider Route end--*/

/*--Users Route start--*/
    //get all users
    const getAllUsers =(req,res)=>{
       storage.pool.query(queries.allUsers,(error,results)=>{
        if(error){
            console.error(error);
            res.send(`${error}`);
        }
        res.status(200)
            .send(results.rows);
        console.log(results.rows);
       })
    }
    //get User by id
    const getUserById= (req,res)=>{
        const id = req.params;
        storage.pool.query(queries.getUserById,[id],(error,results)=>{
            if(error){
                console.error(error);
                res.send(`${error}`)
            }
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
        })
    }
     //create new user 
     const createNewUser=(req,res)=>{
        const{username,email,phonenumber,password,uuid}=req.body;
        storage.pool.query(queries.newUsers,[username,email,phonenumber,password,uuid],(error,results)=>{
          if(error){
            console.error(error);
            res.send(`${error}`);
          }  
          res.status(200)
              .send(results.rows);
          console.log(results.rows);
        })
    }
/*--Users Route end--*/


/*--Members Route start--*/
    //get all members
    const getAllMembers =(req,res)=>{
        storage.pool.query(queries.allMembers,(error,results)=>{
            if(error){
                console.error(error);
                res.send(`${error}`)
            }
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
        })
    }
    //get member by id
    const getMemberById= (req,res)=>{
        const id = req.params;
        storage.pool.query(queries.getMemberById,[id],(error,results)=>{
            if(error){
                console.error(error);
                res.send(`${error}`)
            }
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
        })
    }
     //create new member
     const createNewMember=(req,res)=>{
        const{name,phonenumber,userid,role,membersuuid}=req.body;
        storage.pool.query(queries.newMember,[name,phonenumber,userid,role,membersuuid],(error,results)=>{
          if(error){
            console.error(error);
            res.send(`${error}`);
          }  
          res.status(200)
              .send(results.rows);
          console.log(results.rows);
        })
    }
    
/*--Members Route end--*/


/*--Reports Route start--*/
    //get all reports
    const getAllReports =(req,res)=>{
        res.send({name:"new report"});
    }
/*--Reports Route end--*/
module.exports={
    //alerts
    getAlerts,
    getAlertsById,
    postAlert,
    //response groups
    getAllResponseGroups,
    getResponseGroupById,
    createNewResponseGroup,
    //response providers
    getAllProvider,

    //Users
    getAllUsers,

    //members
    getAllMembers,
    //Reports
    getAllReports,
}