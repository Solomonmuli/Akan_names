//male akan names according to the day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi", "Kwame"];

//female akan names according to the day of the week
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];  
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //Days of the week
const noOfDays = 7 //number of days in a week

//total Days Of Months in a year
const monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const totalDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let monthCode = [] //month code 

let monthCodeGenerator = () => {
  let mod = 0;
  for (let i = 0; i < totalDaysOfMonths.length; i++) {
    monthCode.push(mod);
    mod = (mod + totalDaysOfMonths[i]) % noOfDays

  }
  return mod;
} //month Code Generate

monthCodeGenerator();
let centuryCode = century => {
    let code;
    if (century % 4 === 0) {
      code = 6;
    } else if (century === 1 || (century - 1) % 4 === 0) {
      code = 4;
    } else if ((century + 1) % 4 === 0) {
      code = 0;
    } else if (century === 2 || (century / 2) % 2 !== 0) {
      code = 2;
    }
    return code;
  } // century code 