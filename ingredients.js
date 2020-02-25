const ingredients = ["eggs","milk","flour","sugar","baking soda", "chocolate chip", "bananas"];


console.log("Printing list of ingredients from while loop:");
let i = 0;
while(i < ingredients.length){
	console.log(ingredients[i]);
	i++;
}

console.log("Printing list of ingredients from for loop");
for (let x = 0; x < ingredients.length; x++){
	console.log(ingredients[x]);
}

console.log("list backwards");
for (let x = ingredients.length - 1; x >= 0; x--){
	console.log(ingredients[x]);
}
