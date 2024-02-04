function books(input){

    let pageNum = Number(input[0]);
    let pageHourRate = Number(input[1]);
    let daysNum = Number(input[2]);

    let wholeBookTime = pageNum / pageHourRate;
    let final = wholeBookTime / daysNum;
    console.log(final);

}
books(["212 ","20 ","2 "]);