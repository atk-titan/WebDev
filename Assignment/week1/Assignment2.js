/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

 const transactions =[{
    id: 1,
    timestamp: 1656076800000,
    price: 40,
    category: 'Food',
    itemName: 'Pizza',
},{
    id: 2,
    timestamp: 1656076800000,
    price: 15,
    category: 'Food',
    itemName: 'Pancake',
},{
    id: 3,
    timestamp: 1656076800000,
    price: 100,
    category: 'Furniture',
    itemName: 'Sofa',
},{
    id: 4,
    timestamp: 1656076800000,
    price: 50,
    category: 'Clothing',
    itemName: 'Shirt',
},{
    id: 5,
    timestamp: 1656076800000,
    price: 70,
    category: 'Clothing',
    itemName: 'pants',
}]

function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};

    transactions.forEach(transaction => {
        if (categoryTotals[transaction.category]) {
            categoryTotals[transaction.category] += transaction.price;
        } else {
            categoryTotals[transaction.category] = transaction.price;
        }
    });

    return Object.keys(categoryTotals).map(category => ({
        category: category,
        totalSpent: categoryTotals[category],
    }));
}

// Example usage
const result = calculateTotalSpentByCategory(transactions);
console.log(result);