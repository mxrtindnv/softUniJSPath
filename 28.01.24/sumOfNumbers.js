function sum(input){

    let number = input[0];
    let num = 0;

    for(let i = 0; i < number.length; i++ ){
       num += Number(number[i]);
       
       
    }

    console.log(`The sum of the digits is:${num}`);





}
sum(["1234"]);