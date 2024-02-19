function special(input){
    let num = Number(input[0]);
    let row;
    let actualNum ="";
    for(let i = 1111; i< 9999; i++){
        let newNum = "" + i;
        let counter = 0;
         for(let a = 0; a < newNum.length ; a++){
            let currentNum = Number(newNum.charAt(a));



            if(num % currentNum === 0){
                counter++
            }

            if(counter === 4){
                actualNum += newNum + " "

            }
         

            

            



           
            

         }
        
    }

    console.log(actualNum);

   
        
    



}
special(["11"])