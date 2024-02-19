function sums(input) {
    let num1 = (input[0]);
    let num2 = (input[1]);
    let sum = '';

    for (let i = num1; i <= num2; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let a = 0; a <= currentNum.length; a++) {
            let currentDigit = Number(currentNum.charAt(a));

            if (a % 2 === 0) {
                evenSum += currentDigit;

            } else {
                oddSum += currentDigit;


            }

        }

        if (evenSum === oddSum) {
            sum += `${i} `;
        }
    }
    console.log(sum);

}
sums(["100000", "100050"]);