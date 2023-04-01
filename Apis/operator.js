const queries = require('./query');
const storage = require("./connection/db");
const crypto = require("crypto");
const time = require("../Algo/date")
//const conn = require("../Apis/connection/db")

/*--Alerts start--*/
    //get all alerts
        const getAlerts=async(req,res)=>{
            try {
                await storage.pool.query(queries.allAlerts,(error,results)=>{
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
        const getAlertsById=async(req,res)=>{
            try {
                const id =await req.params.id 
                await storage.pool.query(queries.getAlertsById,[id],(error,results)=>{
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
              const { alerttype, provider, resgroup, description } =await req.body;
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
        const deleteAllAlerts =async (req,res)=>{
                try {
                   await storage.pool.query(queries.deleteAllAlerts,(error,results)=>{
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
        const deleteAlertById=async(req,res)=>{
            try {
               const id =await req.params;
                await storage.pool.query(queries.deleteAlertById,[id],(error,results)=>{
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
        const getAllResponseGroups =async (req,res)=>{
           try {
            await storage.pool.query(queries.allResGroups,(error,results)=>{
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
    const getResponseGroupById= async(req,res)=>{
       try {
        const id = await req.params;
        await storage.pool.query(queries.getRespGroupById,[id],(error,results)=>{
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
        const{ groupname,grouppurpose,groupdescription,groupcategory}= await req.body;
        const groupuuid= crypto.randomBytes(16)
        const query = queries.newResGroups; 
        const values =[groupname,grouppurpose,groupdescription,groupcategory,groupuuid]
        const result = await storage.pool.query(query,values)
        res.send(`New Goup Created`)
        } catch (error) {
            res.status(404).send(`Request Failed`)
        }
    }
    //delete response group by id
    const deleteResponseGroupById=async(req,res)=>{
        try {
           const id =await req.params.id;
           await storage.pool.query(queries.deleteResponseGroupById,[id],(error,results)=>{
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
    const deleteAllResponseGroups=async(req,res)=>{
        try {
          
            await storage.pool.query(queries.deleteAllResponseGroups,(error,results)=>{
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
        const getAllProvider =async(req,res)=>{
           try {
            await storage.pool.query(queries.allResProviders,(error,results)=>{
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
    const getResponseProvidersById= async(req,res)=>{
       try {
        const id = await req.params.id;
        await storage.pool.query(queries.getResProviderById,[id],(error,results)=>{
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
    const createNewResponseProvider=async(req,res)=>{
       try {
        const{providername,location}= await req.body;
        const membersuuid = crypto.randomBytes(16)
        const values=[providername,location,membersuuid];
        const query =  queries.newResProviders;
        const result =await storage.pool.query(query,values);
        res.send("New Response provider created");
       } catch (error) {
        res.status(404).send(`request failed`)
        console.log(`Request Failed`)
       }
    }
    //delete response provider by id
    const deleteResponseProviderById=async(req,res)=>{
        try {
           const id = req.params;
           await storage.pool.query(queries.deleteProviderById,[id],(error,results)=>{
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
    const deleteAllResponseProviders=async(req,res)=>{
        try {
          
           await storage.pool.query(queries.deleteAllProviders,(error,results)=>{
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
    const getAllUsers =async(req,res)=>{
       try {
       await storage.pool.query(queries.allUsers,(error,results)=>{           
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
    const getUserById= async(req,res)=>{
        try {
            const id =await req.params.id;
         await storage.pool.query(queries.getUserById,[id],(error,results)=>{
            try {
                res.status(200)
                .send(`user ${id} has been deleted`);
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
     const createNewUser=async(req,res)=>{
      try {
        const{username,email,phonenumber,password}=await req.body;
        const uuid = crypto.randomBytes(16);
        values=[username,email,phonenumber,password,uuid]
        query=queries.newUsers;
        const result = storage.pool.query(query,values);
        res.send("processing")
      } catch (error) {
        res.status(404).send(`Error the request cannot be completed`)
      }
    }
    //delete all users
    const deleteAllUsers=async(req,res)=>{
        try {
          
           await storage.pool.query(queries.deleteAllUsers,(error,results)=>{
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
    const deleteUserById=async (req,res)=>{
        try {
          const id = await req.params.id
          const query = queries.deleteUserById;
          const result = await storage.pool.query(query,[id])
          res.send(`user id ${id} has been deleted`)
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
/*--Users Route end--*/


/*--Members Route start--*/
    //get all members
    const getAllMembers = async (req,res)=>{
       try {
        await storage.pool.query(queries.allMembers,(error,results)=>{
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
    const getMemberById= async(req,res)=>{
       try {
        const id = await req.params.id;
        await storage.pool.query(queries.getMemberById,[id],(error,results)=>{
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
     const createNewMember=async (req,res)=>{
        try {
         const{name,phonenumber,userid,role}= await req.body;
         const membersuuid = crypto.randomBytes(16);
         const values =[name,phonenumber,userid,role,membersuuid]
         const query = queries.newMember;
         const result = await storage.pool.query(query,values);
         res.send("New Member created")
        } catch (error) {
            res.status(404).send(`Request coul not be completed`)
        }
    }
    //delete all members
    const deleteAllMembers=async (req,res)=>{
        try {
          
           await storage.pool.query(queries.deleteAllMembers,(error,results)=>{
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
    const deletememberById=async (req,res)=>{
        try {
          const id = await req.params.id
           await storage.pool.query(queries.deleteMemberById,[id],(error,results)=>{
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
    const getAllReports =async (req,res)=>{
        try {
            await storage.pool.query(queries.getAllReports,(error,results)=>{
                res.send(results.rows);
            })
        } catch (error) {
            res.send(error)
            console.error(error)
        }
    }
    //get report by id
    const getReportById =async (req,res)=>{
        try {
            const id = await req.params.id;
            await storage.pool.query(queries.getReportsById,[id],(error,results)=>{
                res.send(results.rows);
            })
        } catch (error) {
            res.send(error)
            console.error(error)
        }
    }

    //create new report
    const newReport = async(req,res)=>{
       try {
        const{title,topic,source,body,authors}=await req.body;
        const query = queries.newReport;
        const reportuuid = crypto.randomBytes(16);
        const values=[title,topic,source,body,authors,reportuuid]
        const result = await storage.pool.query(query,values);
        res.send("new report created")
       } catch (error) {
        console.error(error)
        res.send(error)
       }
    }
    //const delete reports
    const deleteAllReports=async (req,res)=>{
        try {
          
           await storage.pool.query(queries.deleteAllReports,(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`all report have been deleted`);
                console.log(` all report have been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
    }
    //const delete reports by id
    const deleteReportById=async (req,res)=>{
        try {
          const id = await req.params.id
           await storage.pool.query(queries.deleteReportById,[id],(error,results)=>{
                try {
                    res
                    .status(200)
                    .send(`report has been deleted`);
                console.log(`report has been deleted`+`${results.rows}`)
                } catch (error) {
                    console.error(error)
                }
           })
        } catch (error) {
            console.log(error)
            res.status(404).send(`Error the request could not be completed`)
        }
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
    deleteResponseProviderById,
    deleteAllResponseProviders,

    //Users
    getAllUsers,
    getUserById,
    createNewUser,
    deleteUserById,
    deleteAllUsers,

    //members
    getAllMembers,
    getMemberById,
    createNewMember,
    deleteAllMembers,
    deletememberById,
    //Reports
    getAllReports,
    newReport,
    getReportById,
    deleteAllReports,
    deleteReportById,
}