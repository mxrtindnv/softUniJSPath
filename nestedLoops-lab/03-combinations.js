function combinations(input) {
    let x = Number(input[0]);
    let numCount = 0;

    for (let a = 0; a <= x; a++) {
        for (let b = 0; b <= x; b++) {
            for (let c = 0; c <= x; c++) {
                if((a + b + c ) == x){
                    numCount++
                }


            }
        }
    }
    console.log(numCount);



}
combinations(["25"])