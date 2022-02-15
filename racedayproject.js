

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
const age = 19;
if (age > 18 && registeredEarly === true) {
  //raceNumber+= 1000;
//raceNumber = raceNumber + 1000;
}
// raceNumber = raceNumber + 1000;
raceNumber+= 1000;
 if (age > 18 && registeredEarly === true) {
   console.log(`telling them that they will race at 9:30 am. Include their ${raceNumber}.`)
 } else if (age > 18 && !registeredEarly ){
console.log(`they will race at 11:00 am. Include their ${raceNumber}.`);
 } else if (age < 18){
   console.log(`they will race at 12:30 pm. Include their  ${raceNumber}`);
 } else {
   console.log('runner to see the registration desk.');
 }
