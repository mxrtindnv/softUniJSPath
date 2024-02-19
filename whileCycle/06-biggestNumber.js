function biggestNumber(input){
 let row = input[0];
 let index = 0;
 let maxNumber = Number.MIN_SAFE_INTEGER;

 while(row !== "Stop"){
    let rowAsNumber = Number(row);
    if(rowAsNumber > maxNumber){
        maxNumber = rowAsNumber
    }
    row = input[index]
    index++
    
 }
 console.log(maxNumber);


}
biggestNumber(["-1", "-2", "Stop"]);