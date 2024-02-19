function guessPassword(input){
 let guess = input[0];
 if(guess == "s3cr3t!P@ssw0rd"){
    console.log("Welcome");
 }else{
    console.log("Wrong password!");
 }
}
guessPassword(["s3cr34t!P@ssw0rd"]);