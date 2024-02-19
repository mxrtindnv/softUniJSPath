function magicNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let x = Number(input[2]);
    let nCount = 0;
    let isFound = false;


    for (n1 = start; n1 <= end; n1++) {
         
         for (let n2 = start; n2 <= end; n2++) {
           nCount++
            if (n1 + n2 === x) {
                console.log(`Combination N:${nCount} (${n1} + ${n2} = ${n1 + n2})`);
                isFound = true;
                return;
            }


        }
    }

    if(isFound == false){
        console.log(`${nCount} combinations - neither equals ${x}`);
    }

    




}
magicNumber(["23", "24", "20"]);