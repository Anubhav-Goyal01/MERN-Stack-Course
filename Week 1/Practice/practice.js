/*
These coding challenges are part of this course: https://www.udemy.com/course/the-complete-javascript-course/
*/


// CODING CHALLENGE - 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall
*/

const marksWeight = 78
const marksHeight = 1.69
const JohnsWeight = 92
const JohnsHeight = 1.95

let calcBMI = (weight, height) => {
    return (weight / height ** 2)
}

marksBMI = calcBMI(marksWeight, marksHeight)
johnsBMI = calcBMI(JohnsWeight, JohnsHeight)
let markHigherBMI = marksBMI > johnsBMI
console.log(markHigherBMI, marksBMI, johnsBMI)


// CODING CHALLENGE 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

if (markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}


//  5 falsy values in JS -> 0, '', null, undefined, nan


// CODING CHALLENGE 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolphinsScore = (97 + 112 + 101) / 3
let koalasScore = (109 + 95 + 123) / 3

if (dolphinsScore > koalasScore && dolphinsScore > 100) {
    console.log("Dolphins is the winner")
} else if (koalasScore > dolphinsScore && koalasScore > 100) {
    console.log("Koalas is the winner");
} else if (koalasScore === dolphinsScore && koalasScore > 100 && dolphinsScore > 100) {
    console.log("There is a draw");
} else {
    console.log("No one won the trophy");
}


// CODING CHALLENGE 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

const bill = 275
let tipPercentage = (bill > 50 && bill < 500) ? 0.15 : 0.20
let tip = bill * tipPercentage
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);


// CODING CHALLENGE 5
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
*/

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}

dolphinsScore = calcAverage(44, 23, 71)
koalasScore = calcAverage(65, 54, 49)

const checkWinner = (dolphinsScore, koalasScore) => {
    if (dolphinsScore > 2 * koalasScore) {
        return `Dolphins win (${dolphinsScore} vs. ${koalasScore})`
    } else if (koalasScore > dolphinsScore) {
        return `Koalas win (${koalasScore} vs. ${dolphinsScore})`
    }
}

result = checkWinner(dolphinsScore, koalasScore)
console.log(result)


// CODING CHALLENGE 6
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.
BONUS: Create an array total containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44.
*/

let calcTip = (bill) => {
    tip = (bill > 50 && bill < 500) ? 0.15 : 0.20
    return tip
}

let billsArray = [125, 555, 44]
let tipsArray = []
let totalBill = []

for (let i = 0; i < billsArray.length; i++) {
    tipPercentage = calcTip(billsArray[i])
    tip = tipPercentage * billsArray[i]
    tipsArray.push(tip)
    totalBill.push(billsArray[i] + tip)
}
console.log(tipsArray, totalBill)

// CODING CHALLENGE: 7
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall
*/
let mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI() {
        this.bmi = (this.mass / this.height ** 2)
        return this.bmi
    }
}

let john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI() {
        this.bmi = (this.mass / this.height ** 2)
        return this.bmi
    }
}

marksBMI = mark.calcBMI()
JohnsBMI = john.calcBMI()
markHigherBMI = marksBMI > johnsBMI

console.log(mark.bmi)
if (markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}


// CODING CHALLENGE - 8
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
    let stringToPrint = ""
    for (i = 0; i < arr.length; i++) {
        stringToPrint += `... ${arr[i]}ºC in ${i + 1} days `
    }
    console.log(stringToPrint)
}
printForecast([17, 21, 23])


// CODING CHALLENGE - 9:
/*
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude (max - min). Keep in mind that sometimes there might be a sensor error."
Test Data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
maxTemp = temperatures[0]
minTemp = temperatures[0]
for (temp of temperatures) {
    if (typeof temp != 'number') continue;

    if (temp > maxTemp) maxTemp = temp;
    else if (temp < minTemp) minTemp = temp
}
console.log(maxTemp - minTemp)


// CODING CHALLENGE - 10
/*
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary operator

Test data for 6: Use players: Davies, Muller, Lewandowski and Kimmich. Then call the function again with players from game.scored
*/

let game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let [players1, players2] = game.players
let [gk, ...fieldPlayers] = players1
let allPlayers = players1.concat(players2)
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
let { team1, x: draw, team2 } = game.odds
function printGoals(...players) {
    for (let player of players) {
        if (game.scored.includes(player)) {
            console.log(`${player} scored a goal`)
        }
    }
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


// Coding Challenge 11
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

for (let [i, scorer] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${scorer}`)
}

let SumOfOdds = 0
let odds = Object.values(game.odds)
for (let odd of odds) {
    SumOfOdds += odd
}
let avgOdds = SumOfOdds / odds.length
console.log(avgOdds);

let odd_entries = Object.entries(game.odds)
console.log(odd_entries)
for (let entry of odd_entries) {
    let [team, odd] = entry
    if (team != 'x') {
        console.log(`Odd of victory ${game[team]}: ${odd}`);
    } else {
        console.log(`Odd of draw: ${odd}`)
    }
}

let scorers = {}
for (let scorer of game.scored) {
    if (scorer in scorers) {
        scorers[scorer] += 1
    } else
        scorers[scorer] = 1
}
console.log(scorers);


// CODING CHALLENGE - 12
/*
  Your tasks:
  1. Create an array 'events' of the different game events that happened (no
  duplicates)
  2. After the game has finished, is was found that the yellow card from minute 64
  was unfair. So remove this event from the game events log.
  3. Compute and log the following string to the console: "An event happened, on
  average, every 9 minutes" (keep in mind that a game has 90 minutes)
  4. Loop over 'gameEvents' and log each element to the console, marking
  whether it's in the first half or second half (after 45 min) of the game, like this:
  [FIRST HALF] 17: ⚽ GOAL
  */

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

let events = [...new Set(gameEvents.values())]
console.log(events)
gameEvents.delete(64)

console.log(`An event happened, on average, every ${90 / gameEvents.sizes} minutes`);

for ([key, value] of gameEvents) {
    let half = key < 45 ? "[First Half]" : "[Second half]"
    console.log(`${half} ${key}: ${value}`);
}


// Coding Challenge 13
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!

GOOD LUCK 😀
*/

function convertCamelCase(text) {
    let rows = text.split('\n')
    finalString = ""
    for (let [i, row] of rows.entries()) {
        row = row.trim()
        let [first_word, second_word] = row.split('_')
        first_word = first_word.toLowerCase()
        second_word = second_word[0].toUpperCase() + second_word.toLowerCase().slice(1)
        let final_word = [first_word, second_word].join('').padEnd(25, ' ')

        for (j = 0; j < i + 1; j++) {
            final_word += "✅"
        }
        finalString += final_word + "\n"
    }
    console.log(finalString)
}

testString = `underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure`
convertCamelCase(testString)


// Coding Challenge 14

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = (dogsJulia, dogsKate) => {
    let dogsJuliacopy = dogsJulia.slice()
    dogsJuliacopy.splice(0, 1)
    dogsJuliacopy.splice(-2)
    let combinedDogs = dogsJuliacopy.concat(dogsKate)
    combinedDogs.map((age, i) => {
        if (age >= 3) {
            console.log(`Dog number ${i} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${i} is still a puppy`);
        }
    })
}

const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]
checkDogs(dogsJulia, dogsKate)


// Coding Challenge 15
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = (ages) => {
    return ages.map((age) => (age <= 2) ?  2 * age : 16 + (age * 4))
        .filter((age) => age >= 18)
        .reduce((acc, curr, i, arr) => acc + curr / arr.length , 0)
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))


// Coding Challenge 16
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight  ** 0.75 * 28)
})

const SarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(SarahDog)
if (SarahDog.curFood < (SarahDog.recommendedFood * 0.90)){
    console.log("Sarah's dog is eating too little")
} else if (SarahDog.curFood > (SarahDog.recommendedFood * 1.10)){
    console.log("Sarah's dog is eating too much");
}


let ownersEatTooMuch = []
let ownersEatTooLittle = []
dogs.map(dog => {
    if (dog.curFood < (dog.recommendedFood * 0.90)){
        ownersEatTooLittle.push(dog.owners)
    } else if (SarahDog.curFood > (SarahDog.recommendedFood * 1.10)){
        ownersEatTooMuch.push(dog.owners)
    }
})

ownersEatTooLittle = ownersEatTooLittle.flat()
ownersEatTooMuch = ownersEatTooMuch.flat()

console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little`);
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));
console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));

const newDogsArray = dogs.filter(dog => {
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
})

const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted)
