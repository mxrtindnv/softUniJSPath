function read(input){

    let word = input[0];
        let a = 0;


    while( word !== "Stop"){
        word = input[a];
        if(word === "Stop"){
            return;
        }else{console.log(word);
            a++}
        
        
    }



}
read((["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"]));