function count(input){
    let power = Number(input[0]);

     
     
    for(let num = 0; num <= power; num++){
        if(num % 2 === 0){
            console.log(Math.pow(2, num));
        }
    }



}
count(["7"]);