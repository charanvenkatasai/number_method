// creating a function to convert 24hr time to 12hr time
let date = new Date()
let hrs = date.getHours()
function hours(hrs){
    if(hrs>12){
        console.log(hrs-12)
    }else{
     console.log(hrs)
        }
    }
hours(hrs)


// creating a function to generate the otp of 6 digits
function otp(){
    let otps=((Math.random()*1000000).toFixed(0))
    if(otps.toString().length==6){
        return otps;
    }
}
console.log(otp())

// based on number create a function to return day of the day of the week
let today = new Date()
let day = today.getDay()
 function days(day){
    if(day==1){
        console.log("monday")
    }
    else if(day==2){
        console.log("tuesday")
    }
    else if(day==3){
        console.log("wednesday")
    }
    else if(day==4){
        console.log("thursday")
    }
    else if(day==5){
        console.log("friday")
    }
    else if(day==6){
        console.log("saturday")
    }
    else{
        console.log("sunday")
    }
 }
 days(day)