function gym(input){
 let num = Number(input[0]);
 let backCount = 0;
 let chestCount = 0;
 let legsCount = 0;
 let absCount = 0;
 let protenShakeCount = 0;
 let proteinBarCount = 0;
 let trainingCount = 0;
 let proteinCount = 0;

 for(let a = 1; a <= num; a++){
    let b = input[a];
    switch(b){
      case "Back": backCount += 1 ; break;
        case "Chest": chestCount += 1; break;
            case "Legs": legsCount += 1; break;
                case "Abs": absCount += 1; break;
                    case "Protein shake": protenShakeCount += 1; break;
                        case "Protein bar": proteinBarCount += 1; break;

    }

    trainingCount = backCount + chestCount + legsCount + absCount;
    proteinCount = protenShakeCount + proteinBarCount;
    
    }

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${protenShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);
    console.log(`${((trainingCount / num) * 100).toFixed(2)}% - work out`);
    console.log(`${((proteinCount / num) * 100).toFixed(2)}% - protein`);





}
gym((["7",

"Chest",

"Back",

"Legs",

"Legs",

"Abs",

"Protein shake",

"Protein bar"]))