function tennis(input){
    let gamesNum = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = 0;
    let wins = 0;
    let i = 2;

    for( i = 2; i<= gamesNum + 2; i++){
      let gameResult = input[i];

      switch(gameResult){
        case "W": points+= 2000
        wins++; break;
            case "F": points += 1200; break;
                case "SF": points += 720; break;

      }
    }

    console.log(`Final points: ${points + startPoints}`);
    console.log(`Average points: ${Math.floor(points/(i-3))}`);
  
    console.log(`${((wins/(i-3))*100).toFixed(2)}%`);




}
tennis(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"]);