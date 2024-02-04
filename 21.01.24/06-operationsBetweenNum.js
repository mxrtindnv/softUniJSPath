function operation(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let eOrO;

    switch (operator) {
        case "+":
            if ((n1 + n2) % 2 == 0) {
                eOrO = "even"

            } else {
                eOrO = "odd"
            } console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${eOrO}`); break;
        case "-":
            if ((n1 - n2) % 2 == 0) {
                eOrO = "even"

            } else {
                eOrO = "odd"
            } console.log(`${n1} ${operator} ${n2} = ${n1 - n2} - ${eOrO}`);
            break;
        case "*":
            
             if ((n1 * n2) % 2 == 0) {
                eOrO = "even"

            } else {
                eOrO = "odd"
            } console.log(`${n1} ${operator} ${n2} = ${n1 * n2} - ${eOrO}`);
            break;
        case "/":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);

            }else{
            console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
        } break;
        case "%":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);

            }else{
            console.log(`${n1} % ${n2} = ${n1 % n2}`);
             } break;

    }



}
operation((["7",

"3",

"*"]));