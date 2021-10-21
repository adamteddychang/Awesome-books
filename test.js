var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time

const now = DateTime.now();

document.getElementById("date-time").innerHTML = now