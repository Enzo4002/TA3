let firstNames = [];
let lastNames = [];
let ages = [];

for (let i = 0; i < 5; i++) {
    let firstName = prompt(`Enter first name for person ${i + 1}:`, "");
    let lastName = prompt(`Enter last name for person ${i + 1}:`, "");
    let age = prompt(`Enter age for person ${i + 1}:`, "");

    firstNames.push(firstName);
    lastNames.push(lastName);
    ages.push(age);
}

document.write("<h2>Entered Data:</h2>");
for (let i = 0; i < 5; i++) {
    document.write(`Person ${i + 1}: ${firstNames[i]} ${lastNames[i]}, Age: ${ages[i]}<br>`);
}

let index = prompt("pick 0-4:", "0");

document.write(`<h2>Data for ID = ${index}:</h2>`);
document.write(`ID = ${index} <br>`);
document.write(`First Name = ${firstNames[index]} <br>`);
document.write(`Last Name = ${lastNames[index]} <br>`);
document.write(`Age = ${ages[index]} <br>`);
