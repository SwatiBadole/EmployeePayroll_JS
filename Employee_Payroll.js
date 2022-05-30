console.log("welcome to Employee_payroll App");

/*
//UC1 :Ability to Check Employee is present or Absent
const IS_ABSENT=0;

let empCheck = Math.floor(Math.random() *10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
    //return;
}
else{
    console.log("Employee is present");
}
//UC2:Ability to Calculate Daily Employee Wage based on part time or full time work


let empHrs=0;
empCheck =Math.floor(Math.random() * 10) % 3;
switch (empCheck){
    case IS_PART_TIME :empHrs =PART_TIME_HOURS;
    break;
    case IS_FULL_TIME: empHrs = FULL_TIME_HOURS;
    default:
        empHrs =0;
}
let empWage = empHrs *WAGE_PER_HOUR;
console.log("Employee wage : "+ empWage);

//UC3:
let IS_PART_TIME=2;
let IS_FULL_TIME=4;
let WAGE_PER_HOUR=20;

function getWorkingHours(empCheck){
    switch(empCheck) {
        case   IS_PART_TIME:
                return PART_TIME_HOURS;
        case  IS_FULL_TIME:
               return FULL_TIME_HOURS;
        default:
               return 0;
}
}
let empHrs1=0;
let empCheck1=Math.floor(Math.random() * 10) %  3;
empHrs=getWorkingHours(empCheck);
let empWag1 =empHrs * WAGE_PER_HOUR;
console.log("empHRS :"+empHrs +"Employee wage:"+ empWage);
*/

//UC 4 :calculate wage for a months

const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_ABSENT:
            return 0;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        case IS_PART_TIME:
            return PART_TIME_HOURS;
    }
}
let empHours = 0;

for (let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours += getWorkingHours(empCheck);
}
let empWage = empHours * WAGE_PER_HOUR;
console.log("Total Hours: "+empHours+ " Employee wage: "+ empWage);