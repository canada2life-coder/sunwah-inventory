initDatabase();
console.log(
"SunWah Inventory Started"
);



let today =
new Date()
.toLocaleDateString();



document.getElementById(
"stockIn"
).innerHTML = 0;



document.getElementById(
"stockOut"
).innerHTML = 0;



document.getElementById(
"alerts"
).innerHTML = 0;
