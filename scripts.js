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

//date of birth data function
let dataCollection = (day, month, year) => {
  let dd = parseInt(day);

  let mm = monthCode[parseInt(month) - 1]; //month code
  let cc = centuryCode(Math.floor(year / 100)); // century code
  let yy = parseInt(year.slice(-2));
  let yearCode = (yy + Math.floor(yy / 4)) % noOfDays //year code)
  let dayOfBirthIndex;

  if ((((cc === 6 && yy === 0) || (yy % 4 === 0 && yy !== 0)) && ((month - 1) <= 1))) {
    //leap year
    dayOfBirthIndex = (yearCode + mm + cc + dd - 1) % noOfDays;

  } else {
    //ordinary year
    dayOfBirthIndex = (dd + mm + cc + yy + Math.floor(yy / 4)) % noOfDays
  }

  return dayOfBirthIndex;

}
let validation = (d, m, y) => {
  if (d === "") {
    alert("Please add day of birth")
  } else if ((d <= 0) || (d > 31)) {
    alert("invalid day")

  }
  if (m === "") {
    alert("Please add Month Of Birth")
  } else if ((m <= 0) || (m > 12)) {
    alert("invalid month")

  }
  if (y === "") {
    alert("Please add year Of Birth")
  } else if ((y <= 0) || (y.length > 4)) {
    alert("invalid year")

  }
} // validation function

let formOutPut = (dayB, monthB, yearB, birthIndex) => {
  if ((dayB > 0 && monthB > 0 && yearB > 0) && (dayB <= 31 && monthB <= 12 && yearB > 0)) { //output validation
    if (document.getElementById("male").checked) {
      output.innerHTML = `Your Akan Name is <span>${maleNames[birthIndex]}</span> <br/> You were born on <span>${daysOfTheWeek[birthIndex]} ${dayB}-${monthsOfTheYear[monthB-1]}-${yearB}</span>`
    } else if (document.getElementById("female").checked) {
      output.innerHTML = `Your Akan Name is <span>${femaleNames[birthIndex]}</span> <br/> You were born on <span>${daysOfTheWeek[birthIndex]} ${dayB}-${monthsOfTheYear[monthB-1]}-${yearB}</span> `
    } else alert("Please Select You Gender")
  }
}

let submission = e => {
  e.preventDefault();

  let dayB = document.getElementById("day").value; //day value
  let monthB = document.getElementById("month").value; //month value
  let yearB = document.getElementById("year").value; //year value
  let birthIndex = dataCollection(dayB, monthB, yearB); //date of birth data collection function
  let output = document.getElementById("output");
  output.innerHTML = "" // clear output after reload
  let form = document.getElementById("form");
  validation(dayB, monthB, yearB); //validation
  formOutPut(dayB, monthB, yearB, birthIndex); // display function
  form.reset();  //reset form after submission function
}

document.getElementById("submit").addEventListener('click', submission); // submit button EventListener;