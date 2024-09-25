const prompt = require('prompt-sync')();
let character = ''; 
let inverted = '';
let count;
const rows = [];

while (character.length === 0 || character.length > 1 ) {
    character = prompt('What character would you like to build the pyramid from?');
    if (character.length === 1)  {
        break;
    } else {
        console.log('Please enter one character');
    }
}

while (true) {
    const count_input = prompt('How many rows do you want it to be?');
    const count_undefined = parseInt(count_input);
    if (Number.isInteger(count_undefined)) {
        count = count_undefined
        break;
    } else {
        console.log("Please enter a valid number");
    }

}

while (inverted.toLocaleLowerCase() != "yes" && inverted.toLocaleLowerCase() != "no") {
    inverted = prompt('Do you want the pyramid to be inverted (yes or no)?');
    if (inverted.toLocaleLowerCase() === "yes" || inverted.toLocaleLowerCase() === "no") {
        break;
    } else {
        console.log('Please answer with yes or no');
    }
}


function insert(current_row, total_rows) {
    return " ".repeat(total_rows - current_row) + character.repeat(2*current_row-1) + " ".repeat(total_rows - current_row);
}

for (let i = 1; i<=count; i++) {
    if (inverted === "yes") {
        rows.unshift(insert(i, count));
    } else {
        rows.push(insert(i, count));
    }
}

let result = "";

for (row of rows) {
    result += "\n" + row;
}

console.log(result);