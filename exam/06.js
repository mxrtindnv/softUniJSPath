function pinCode(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let output;

    for(let a1 = 2; a1 <= a; a1+=2){
        

        for(let b1 = 1; b1 <= b; b1++){ 
            
            for(let c1 = 2; c1 <= c; c1+=2){
               if(b1 == 2 || b1 == 3 || b1 == 5 || b1 === 7){
                console.log(a1 + " " + b1 + " " + c1);
               }
            }
        }
    }

    




}
pinCode((["3",
"5",
"5"]));