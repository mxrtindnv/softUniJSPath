function examPrep(input) {
 
    let targetSum = Number(input[0]);
    let index = 1;
    let currentRow = input[index];
    let allCocktailsSum = 0;
 
    while (currentRow !== 'Party!') {
        let cocktailName = input[index];
        let cocktailPrice = cocktailName.length;
        index++;
        let cocktailsCount = Number(input[index]);
        let currentCocktailPrice = cocktailPrice * cocktailsCount;
 
        if (currentCocktailPrice % 2 !== 0) {
            currentCocktailPrice *= 0.75;
        }
        allCocktailsSum += currentCocktailPrice;
 
        if (allCocktailsSum >= targetSum) {
            console.log('Target acquired.');
            break;
        }
        index++
        currentRow = input[index];
    }
 
    if (targetSum > allCocktailsSum) {
        console.log(`We need ${(targetSum - allCocktailsSum).toFixed(2)} leva more.`);
    }
 
    console.log(`Club income - ${allCocktailsSum.toFixed(2)} leva.`);
 
}
examPrep(["100",

"Sidecar",

"7",

"Mojito",

"5",

"White",

"Russian",

"10"]);