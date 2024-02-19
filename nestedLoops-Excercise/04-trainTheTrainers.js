function train (input){
    let rowsNum = Number(input[0]);
    let index = 1;
    let currentRow = input[index];
    let currentNum = 0;
    let currentAsignment;
    let coursesTotal = 0;
    let allGrades = 0;

    while(currentRow !== "Finish"){
        currentNum = 0
        currentRow = input[index];
        currentAsignment = input[index]
        if(currentRow === "Finish"){
            break;
        }
        for(let a = 1; a <= rowsNum; a++){
            
            index++
            currentNum += Number(input[index]);
            allGrades += Number(input[index]);
            
            
            
        }
        index++
        currentAsignment = input[index - (rowsNum + 1)]
        coursesTotal += 1;
        console.log(`${currentAsignment} - ${(currentNum / rowsNum).toFixed(2)}. `);
        
        
        


    }
      
    
    

     console.log(`Student's final assessment is ${(allGrades / (coursesTotal * rowsNum)).toFixed(2)}.`);



    
   

     











}
train((["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"]));
