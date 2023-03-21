const fetchMethodDate = new Date();
const Year = fetchMethodDate.getFullYear();
const Month = fetchMethodDate.getMonth();
const Day = fetchMethodDate.getDay();
const Hour = fetchMethodDate.getHours();
const Minutes= fetchMethodDate.getMinutes();
const Seconds = fetchMethodDate.getSeconds();
const AmPm = true;

function generateTime(){
  if(AmPm){
    if(Hour <= 12 ){
        return `${Hour}:${ Minutes}:${Seconds} Am` ;
    }else if(Hour == 12){
        return `${Hour}:${ Minutes}:${Seconds} noon` ;
    }else if(Hour > 12){
        return `${Hour}:${ Minutes}:${Seconds} Pm` ;
    }
  }else{
    return `${Hour}  ${ Minutes}  ${Seconds} Hours` ;
  }
   
}
//function generateDate (){
 //   return Day + Month + Year;
//}
const date = `${Day}:${Month}:${Year} `

module.exports={
    fetchMethodDate,
    Year,
    Month,
    Day,
    Hour,
    Minutes,
    Seconds,
    generateTime,
    //generateDate,
    AmPm,
    date
}