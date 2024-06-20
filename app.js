
// const btn = document.querySelector("#click-arrow");

// let dobInput = document.getElementById("input-year").value;
// let monthInput = document.getElementById("input-month").value;
// let dayInput = document.getElementById("input-day").value;

// let thisYear = new Date().getFullYear();
// let thisMonth = new Date().getMonth();
// let today = new Date().getDate();

// let yearAnswer = thisYear - dobInput;
// let monthAnswer = thisMonth - monthInput;
// let dayAnswer = today - dayInput;


// const yearDisplay = document.getElementById("year").innerHTML = thisYear;
// const monthDisplay = document.getElementById("month").innerHTML = thisMonth + 1;
// const day = document.getElementById("day").innerHTML = today;

// function click() {
//   document.getElementById("year").innerHTML = yearAnswer;
//   document.getElementById("month").innerHTML = monthAnswer + 1;
//   document.getElementById("day").innerHTML = dayAnswer;
// }

// btn.addEventListener("click", () => { 
//   click();
//     // if (dobInput === "") {
//     //   return alert("Year cannot be empty");
//     // }
// });

// function error() {}



const btn = document.querySelector("#click-arrow");


// const yearDisplay = document.getElementById("year").innerHTML = getFullYear()
// const monthDisplay = document.getElementById("month").innerHTML = getMonth() + 1;
// const day = document.getElementById("day").innerHTML = getDate();

btn.addEventListener("click", function() {
  let dobInput = parseInt(document.getElementById("input-year").value);
  let monthInput = parseInt(document.getElementById("input-month").value);
  let dayInput = parseInt(document.getElementById("input-day").value);

  let today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth() + 1; // getMonth() returns month from 0-11
  let thisDay = today.getDate();

  let yearAnswer = thisYear - dobInput;
  let monthAnswer = thisMonth - monthInput;
  let dayAnswer = thisDay - dayInput;

  // Adjust for cases where the current date is before the birth date in the current year
  if (monthAnswer < 0 || (monthAnswer === 0 && dayAnswer < 0)) {
    yearAnswer--;
    monthAnswer += 12;
  }
  if (dayAnswer < 0) {
    monthAnswer--;
    let daysInPrevMonth = new Date(thisYear, thisMonth - 1, 0).getDate();
    dayAnswer += daysInPrevMonth;
  }

  document.getElementById("year").textContent = yearAnswer;
  document.getElementById("month").textContent = monthAnswer;
  document.getElementById("day").textContent = dayAnswer;
});
