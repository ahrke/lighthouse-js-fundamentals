const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
console.log("While loop:")
while(i < ingredients.length){
  console.log(ingredients[i])
  i++
}

// Write a for loop that prints out the contents of ingredients:
console.log("\n\nFor loop: ")
for(let k = 0; k < ingredients.length; k++){
  console.log(ingredients[k])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n\nLoop backwards:")
for(let j = ingredients.length - 1; j >= 0; j--){
  console.log(ingredients[j])
}