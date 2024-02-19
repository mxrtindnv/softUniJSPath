function hotel(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let currentRow = '';
        for (let a = 0; a < rooms; a++) {

            if (i === floors) {
                currentRow += `L${i}${a} `

            } else if (i % 2 === 0) {
                currentRow += `O${i}${a} `

            } else {
                currentRow += `A${i}${a} `
            }

        }
        console.log(currentRow);
    }




}
hotel(["6", "4"]);