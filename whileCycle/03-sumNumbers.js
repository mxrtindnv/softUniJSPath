function sum(input){
    let start = Number(input[0]);
    let index = 1;
    let sumNum = 0;

    while(sumNum < start){
        let currentNum = Number(input[index]);
        sumNum += currentNum;
        index++
        
         
    }
     
    console.log(sumNum);


}
sum((["100", "10", "20", "30", "40"]));