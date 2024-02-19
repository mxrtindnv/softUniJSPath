function password(input){
    let username = input[0];
    let index = 2;
    let password = input[1];
    

    while(true){
        let guess = input[index];
        if(guess === password){
            console.log(`Welcome ${username}!`);
        }

        index++
      

    }





}
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"]);