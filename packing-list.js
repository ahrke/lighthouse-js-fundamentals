const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for(let i = 0; i < packingList.length; i++){
  console.log(packingList[i])
}

let i = 0;
console.log("\nKitchen stuff to pack: (while loop)")
while(i < packingList.length){
  console.log(packingList[i])
  i++
}