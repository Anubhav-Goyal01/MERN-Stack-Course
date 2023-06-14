/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];


function calculateTotalSpentByCategory(transactions) {
  let results = []
  let results_dict = {}
  for (let [ el, { price, category } ] of Object.entries(transactions)) {
    if (category in results_dict){
      results_dict[category] += price
    } else{
      results_dict[category] = price
    }
  }

  for ( let [cat, totalprice] of Object.entries(results_dict)) results.push(new Object({category: cat, totalSpent: totalprice}))
  return results;
}

// console.log(Object.entries(transactions))
// calculateTotalSpentByCategory(transactions);


module.exports = calculateTotalSpentByCategory;
