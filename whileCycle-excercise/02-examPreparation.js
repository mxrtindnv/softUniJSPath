function examGrades(input){
    let strikesAllowed = Number(input[0]);
    let strikes = 0;
    let currentRow = input[1];
    let currentRowIndex = 1;
    let grade = Number(input[2]);
    let currentRowGrade = 2;
    let sumGrades = 0;

    while(currentRow !== "Enough"){
        currentRow = input[currentRowIndex] ;
        grade = Number(input[currentRowGrade]);
        if(grade <= 4){
            strikes++
        }

        if(strikesAllowed == strikes){
            console.log(`You need a break, ${strikes} poor grades.`);
            return;
        }

        if(currentRow === "Enough"){
            break;
        }else{
       
        sumGrades += grade;
        currentRowIndex += 2;
        currentRowGrade += 2;
        }





    }

    console.log(`Average score: ${((sumGrades / ((currentRowGrade - 2) /2))).toFixed(2)}`);
    console.log(`Number of problems: ${(currentRowGrade - 2) /2}`);
    console.log(`Last problem: ${input[currentRowIndex-2]}`);
    
    



}
examGrades(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"]);
