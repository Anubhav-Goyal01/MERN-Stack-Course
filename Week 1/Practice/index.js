// Switch Statements

const day = "Monday"
switch(day){
    case "Monday":
    case "Tuesday":
        console.log("Do something");
        break
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Do something else");
        break
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break
    default:
        console.log("Not a valid day");
}

// Ternary operator
const age = 21
age >= 25 ? "Age greater than 25" : "Age less than 25"


// Arrays
let friends = ["John", "Mark", "Steven"]
console.log(friends.length);
friends.push("Josh") // adds at the last
friends.unshift("Jos") // adds at the beginning
friends.pop() // removes last element
friends.shift() // removes first element
console.log(friends.indexOf("Mark"));
console.log(friends.includes("Mark"));

// Sets
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Pasta',
    'Rizzoto',
    'Pasta',
  ]);
console.log(ordersSet);

console.log(new Set('Anubhav'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Bread');
ordersSet.delete('Bread');



// STRINGS
let airline = 'Tap Air India';
const plane = 'A320';
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Air'));
console.log(airline.slice(4)); // position at which index will start
console.log(airline.slice(4, 8));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

airline = airline.toLowerCase()
airline = airline.trim()

const priceUS = '288,97$';
const priceGB = priceUS.replace('$', '€').replace(',', '.');
console.log(priceGB);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

// Other methods: startswith, split, endswith, join
const mess = 'Go to gate 23';
console.log(mess.padStart(25, '=').padEnd(40, '='));


// arrays
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(2));

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach( (movement, index, array)  => {
    if (movement > 0) {
      console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
  });
  
const movementsDescription = movements.map((mov, i, arr) => {
if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
} else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
}
});

const withdrawals = movements.filter(mov => mov < 0);

// accumulator is the first param
const balance = movements.reduce(function (acc, curr, i, arr) {
    return acc + curr;
  }, 0);