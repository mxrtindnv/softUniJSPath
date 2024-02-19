function lunchBreak(input){
    let movie = input[0];
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);
    
    let lunchTime = breakLength * 1/8;
    let relaxTime = breakLength * 1/4;
    let timeLeft = breakLength - (lunchTime + relaxTime);

    if(timeLeft >= movieLength){
        console.log(`You have enough time to watch ${movie} and left with ${Math.round(timeLeft - movieLength)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.round(movieLength - timeLeft)} more minutes.`);
    }

}
lunchBreak((["Teen Wolf",

"48",

"60"]));