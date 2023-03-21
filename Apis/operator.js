const queries = require('./query');
const storage = require("./connection/db");
const crypto = require("crypto");
const time = require("../Algo/date")
//const conn = require("../Apis/connection/db")

/*--Alerts start--*/
    //get all alerts
        const getAlerts=(req,res)=>{
            try {
                storage.pool.query(queries.allAlerts,(error,results)=>{
                   try {
                  res.status(201).send(results.rows);
                    console.log(results.rows)
                   } catch (error) {
                    console.error(error)
                   }
                      })
            } catch (error) {
                res.status(404)
                    .send(`Request failed`)
            }
        }
    //get alerts by id
        const getAlertsById=(req,res)=>{
            try {
                const id = req.params.id 
                storage.pool.query(queries.getAlertsById,[id],(error,results)=>{
                    try {
                        res.status(201).send(results.rows);
                        console.log(results.rows);
                    } catch (error) {
                        console.log(error)
                    }
                })
            } catch (error) {
                res.status(404)
                    .send(`Request failed`)
            }
        }
    //post alerts
        const postAlert= async (req, res) => {
            try {
              const { alerttype, provider, resgroup, description } = req.body;
              const query = queries.newAlert
              const alertuuid = crypto.randomBytes(16);
              const values = [alerttype, provider, resgroup, description, alertuuid];
              const result = await storage.pool.query(query, values);
              res.send('Alert inserted successfully!');
            } catch (err) {
              console.error(err);
              res.status(500).send('Internal server error');
            }
          }
    //delete all alerts
        const deleteAllAlerts = (req,res)=>{
                try {
                   storage.pool.query(queries.deleteAllAlerts,(error,results)=>{
                    try {
                        res
                            .status(200)
                            .send(`All alerts are deletd`);
                        console.log(`All Alerts Are Deleted`);
                    } catch (error) {
                        console.log(error)
                    }
                   })
                } catch (error) {
                    console.error(error)
                    res.status(404).send(`Error the request could not be completed`)
                }
            
        }
    //delete alertbyid
        const deleteAlertById=(req,res)=>{
            try {
               const id = req.params;
               storage.pool.query(queries.deleteAlertById,[id],(error,results)=>{
                    try {
                        res
                        .status(200)
                        .send(`Alert has been deleted`);
                    console.log(`Alert has been deleted`+`${results.rows}`)
                    } catch (error) {
                        console.error(error)
                    }
               })
            } catch (error) {
                console.log(error)
                res.status(404).send(`Error the request could not be completed`)
            }
        }

/*--Alerts Route end--*/

/*--Response Groups start--*/

    //get all response Groups
        const getAllResponseGroups = (req,res)=>{
           try {
             storage.pool.query(queries.allResGroups,(error,results)=>{
                 try {
                    res.status(200)
                        .send(results.rows)
                    console.log(results.rows)
                 } catch (error) {
                    console.log(error)
                 }
 
             })
           } catch (error) {
            res.send(404).send(`Request Failed`);
            console.log(`request failed`)
           }
        }
    //get response group by id
    const getResponseGroupById= (req,res)=>{
       try {
        const id = req.params;
        storage.pool.query(queries.getRespGroupById,[id],(error,results)=>{
            try {
                res.status(200)
                    .send(results.rows);
                console.log(results.rows);
            } catch (error) {
                console.error(error)
            }
        })
       } catch (error) {
            res.send(404).send(`Request Failed`)
       }
    }
    //create new response group
    const createNewResponseGroup=async(req,res)=>{
        try {
        const{groupname,grouppurpose,groupcategory}=req.body;
        const grouptuuid = crypto.randomBytes(16)
        const query = queries.newResGroups;
        const values =[groupname,grouppurpose,groupcategory,grouptuuid]
        const result = await storage.pool.query(query,values)
        res.send(`New Goup Created`)
        } catch (error) {
            res.status(404).send(`Request Failed`)
        }
    }
    //delete response group by id
    const deleteResponseGroupById=(req,res)=>{
        try {
           const id = req.params.id;
           storage.pool.query(queries.deleteResponseGroupById,[id],(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
    //delete all response groups
    const deleteAllResponseGroups=(req,res)=>{
        try {
          
           storage.pool.query(queries.deleteAllResponseGroups,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }



/*--Response Groups end--*/

/*--Response Provider Route start--*/
    //get all response providers
        const getAllProvider =(req,res)=>{
           try {
            storage.pool.query(queries.allResProviders,(error,results)=>{
              try {
                res.status(200)
                    .send(results.rows);
                console.log(results.rows);
              } catch (error) {
                console.error(error)
              }
            })
           } catch (error) {
                res.status(404).send(`Request Failed`)
           }
        }
    //get response provider by id
    const getResponseProvidersById= (req,res)=>{
       try {
        const id = req.params;
        storage.pool.query(queries.getResProviderById,[id],(error,results)=>{
           try {
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
           } catch (error) {
            console.log(error)
           }
        })
       } catch (error) {
        res.status(404).send(`Request Failed`)
       }
    }
    //create new response provider
    const createNewResponseProvider=(req,res)=>{
       try {
        const{providername,location,membersuuid}=req.body;
        storage.pool.query(queries.newResProviders,[providername,location,membersuuid],(error,results)=>{
           try {
            res.status(200)
            .send(results.rows);
            console.log(results.rows);
           } catch (error) {
            console.log(error)
           }
        })
       } catch (error) {
        res.status(404).send(`request failed`)
        console.log(`Request Failed`)
       }
    }
    //delete response provider by id
    const deleteResponseProviderById=(req,res)=>{
        try {
           const id = req.params;
           storage.pool.query(queries.deleteResponseProviderById,[id],(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
    //delete all response providers
    const deleteAllResponseProviders=(req,res)=>{
        try {
          
           storage.pool.query(queries.deleteAllProviders,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
/*--Response Provider Route end--*/

/*--Users Route start--*/
    //get all users
    const getAllUsers =(req,res)=>{
       try {
        storage.pool.query(queries.allUsers,(error,results)=>{           
           try {
            res.status(200)
            .send(results.rows);
             console.log(results.rows);
           } catch (error) {
            console.log(error)
           }
           })
       } catch (error) {
        res.status(404).send(`Error the request could not be completed`)
       }
    }
    //get User by id
    const getUserById= (req,res)=>{
        try {
            const id = req.params;
        storage.pool.query(queries.getUserById,[id],(error,results)=>{
            try {
                res.status(200)
                .send(results.rows);
                console.log(results.rows);
            } catch (error) {
                console.log(error)
            }
        })
        } catch (error) {
            res.status(404).send(`Error the request could not be completed`)
        }
    }
     //create new user 
     const createNewUser=(req,res)=>{
      try {
        const{username,email,phonenumber,password,uuid}=req.body;
        storage.pool.query(queries.newUsers,[username,email,phonenumber,password,uuid],(error,results)=>{
           try {
            res.status(200)
              .send(results.rows);
          console.log(results.rows);
           } catch (error) {
            console.log(error)
           }
        })
      } catch (error) {
        res.status(404).send(`Error the request cannot be completed`)
      }
    }
    //delete all users
    const deleteAllUsers=(req,res)=>{
        try {
          
           storage.pool.query(queries.deleteAllUsers,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
    //delete user by id
    const deleteUserById=(req,res)=>{
        try {
          
           storage.pool.query(queries.deleteUserById,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
/*--Users Route end--*/


/*--Members Route start--*/
    //get all members
    const getAllMembers =(req,res)=>{
       try {
        storage.pool.query(queries.allMembers,(error,results)=>{
           try {
            res.status(200)
                .send(results.rows);
            console.log(results.rows);
           } catch (error) {
            console.log(error)
           }
        })
       } catch (error) {
        res.status(404).send(`Request could not be completed `)
       }
    }
    //get member by id
    const getMemberById= (req,res)=>{
       try {
        const id = req.params;
        storage.pool.query(queries.getMemberById,[id],(error,results)=>{
            try {
                res.status(200)
                .send(results.rows);
                console.log(results.rows);
            } catch (error) {
                console.error(error);
            }
        })
       } catch (error) {
            res.status(404).send(`Request could not be completed`)
       }
    }
     //create new member
     const createNewMember=(req,res)=>{
        try {
         const{name,phonenumber,userid,role,membersuuid}=req.body;
        storage.pool.query(queries.newMember,[name,phonenumber,userid,role,membersuuid],(error,results)=>{
          try {
            res.status(200)   
              .send(results.rows);
          console.log(results.rows);
          } catch (error) {
            console.error(error)
          }
        })
        } catch (error) {
            res.status(404).send(`Request coul not be completed`)
        }
    }
    //delete all members
    const deleteAllMembers=(req,res)=>{
        try {
          
           storage.pool.query(queries.deleteAllMembers,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
    //delete member by id
    const deletememberById=(req,res)=>{
        try {
          
           storage.pool.query(queries.deleteMemberById,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`Alert has been deleted`);
                console.log(`Alert has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
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
    deleteAlertById,
    deleteAllAlerts,
    //response groups
    getAllResponseGroups,
    getResponseGroupById,
    createNewResponseGroup,
    deleteResponseGroupById,
    deleteAllResponseGroups,
    //response providers
    getAllProvider,
    getResponseProvidersById,
    createNewResponseProvider,

    //Users
    getAllUsers,

    //members
    getAllMembers,
    //Reports
    getAllReports,
}