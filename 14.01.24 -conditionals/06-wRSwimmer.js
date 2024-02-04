function worldrecord(input){
    let record = Number(input[0]);
    let length = Number(input[1]);
    let time = Number(input[2]);

    let waterRessistance = Math.floor((length / 15)) * 12.5;
    let speed = length * time;
    let totalTime = speed + waterRessistance;

    if(totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
worldrecord((["55555.67",

"3017","5.03"])); 