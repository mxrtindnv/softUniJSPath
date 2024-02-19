function boxesMoving(input){
    let totalSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let currentRowIndex = 3;
    let currentRow = input[currentRowIndex];
    let spaceTaken = 0;

    while(spaceTaken < totalSpace){
        currentRow = input[currentRowIndex];
        if(currentRow === "Done"){
            if(totalSpace >= spaceTaken){
                console.log(`${totalSpace - spaceTaken} Cubic meters left.`);
                return;
            }else{
                console.log(`No more free space! You need ${spaceTaken - totalSpace} Cubic meters more.`);
                return;
            }
        }else{
            currentRow = Number(input[currentRowIndex]);
            spaceTaken += currentRow;
        }

        currentRowIndex++



    }

    if(totalSpace >= spaceTaken){
        console.log(`${totalSpace - spaceTaken} Cubic meters left.`);
        
    }else{
        console.log(`No more free space! You need ${spaceTaken - totalSpace} Cubic meters more.`);
        
    }

    

      


}
boxesMoving((["10",

"10",

"2","20", "20", "20", "20", "122"]));