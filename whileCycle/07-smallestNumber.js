function smallestNumber(input){
    let index = 0;
    let row = input[index];
    
    let biggestNumber = Number.MAX_SAFE_INTEGER;

    while(row !== "Stop"){
        let num = Number(row);

        if(num < biggestNumber)(
            biggestNumber = num
        )
        row = input[index]
        index++
    }
    console.log(biggestNumber);



}
smallestNumber((["-10", "20", "-30", "Stop"]));