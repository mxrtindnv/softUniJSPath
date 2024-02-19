function oldBooks(input){
    let bookNeeded = input[0];
    let index = 1;
    let bookFound = input[index];
   
    if (bookFound === bookNeeded) {
        console.log(`You checked ${index-1} books and found it.`);
        return;
      } 
    

    while(bookFound != bookNeeded){
        bookFound = input[index];
        if(bookFound === bookNeeded){
            console.log(`You checked ${index-1} books and found it.`);
            return;
        }
        

        if(bookFound === "No More Books"){
            console.log("The book you search is not here!");
            console.log(`You checked ${index - 1} books.`);
            return;
        }
        index++
    }




}
oldBooks((["Bourne",

"Bourne",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"]));