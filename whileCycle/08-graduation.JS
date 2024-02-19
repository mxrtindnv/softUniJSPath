function graduate(input){
    let name = input[0];
    let strikes = 0;
    let clas = 1;
    let index = 1;
    let sum = 0;
    

    while(clas < 13){
      let grades = Number(input[index]);

      if(grades >= 4){
        sum += grades;
        index++
        clas++
        continue;
        
      }

      if(grades < 4){
        strikes++
        index++

      }

      if(grades < 4 && strikes === 2){
        console.log(`${name} has been excluded at ${clas} grade`);
        return;
      }
      
      
      
      

    }


  
    
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    


}
graduate((["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]));