function cakeSize(input){
    let cakeNum = Number(input[0]) * Number(input[1]);
    let cakeTaken = 0;
    let currentRowIndex = 2
    let currentRow = input[currentRowIndex];

    while(cakeTaken < cakeNum){
        currentRow = input[currentRowIndex];
        if(currentRow === "STOP"){
            if(cakeTaken >= cakeNum){
                console.log(`No more cake left! You need ${cakeTaken - cakeNum} pieces more.`);
                return;
            }else{
                console.log(`${cakeNum - cakeTaken} pieces are left.`);
                return;
            }
        }else{
            currentRow = Number(input[currentRowIndex]);
            cakeTaken += currentRow;
            
        }
        
        currentRowIndex++


    }


    if(cakeTaken >= cakeNum){
        console.log(`No more cake left! You need ${cakeTaken - cakeNum} pieces more.`);
        
    }else{
        console.log(`${cakeNum - cakeTaken} pieces are left.`);
    }
    




}
cakeSize((["10",

"10",

"20",

"20","20", "20", "21"]));