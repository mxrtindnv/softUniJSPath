function walking(input){
  let goal = 10000;
  let rowIndex = 0;
  let currentRow = input[rowIndex];
  let steps = 0;
  
  while(steps <= goal){
    currentRow = input[rowIndex];
   if(currentRow === "Going home"){
    steps += Number(input[rowIndex + 1]);
     if(steps < goal){
       console.log(`${goal - steps} more steps to reach goal.`);
       return;  
      }else{
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - goal} steps over the goal!`);
        return;
      }

   }else{
    currentRow = Number(input[rowIndex]);
    steps += currentRow;
    }
   


    rowIndex++


  }

  console.log(`Goal reached! Good job!`);
  console.log(`${steps - goal} steps over the goal!`);
    




}
walking(["125", "250", "4000", "30", "2678", "4682"]);