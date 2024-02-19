function primeCheck(input) {
    let index = 0;
    let currentRow = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;
    let nan = true;

    for (let i = 0; currentRow !== "stop"; i++) {
        currentRow = input[i]
        if (currentRow === "stop") {
            break;
        }

        let rowAsNum = Number(currentRow);

        if(rowAsNum < 0){
            console.log(`Number is negative.`);
            continue;
        }

        if(rowAsNum === 2 || rowAsNum === 3){
            primeSum += rowAsNum;
            continue;
        }
        

        if(rowAsNum % 2 == 0 || rowAsNum % 3 == 0){
            nonPrimeSum += rowAsNum
            
            

        } else {
            primeSum += rowAsNum
            
        }


    }

   console.log(`Sum of all prime numbers is: ${primeSum}`);
   console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);



 



}
primeCheck((["30",

"83",

"33",

"-1",

"20",

"stop"]));