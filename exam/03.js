function winnings(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let reward = 0;

    switch (place) {
        case "Bulgaria":
            switch (season) {
                case "summer":
                    reward = points * dancers;
                    reward *= 0.95
                    break;
                case "winter":
                    reward = points * dancers;
                    reward *= 0.92
                    break;
            }
            ; break;
        case "Abroad": switch (season) {
            case "summer":
                reward = points * dancers;
                reward *= 0.9
                reward *= 1.5
                break;
            case "winter":
                reward = points * dancers;
                reward *= 0.85
                reward *= 1.5
                break;
        }
        ; break;

    }
    let charityMoney =  reward * 0.75

    console.log(`Charity - ${(charityMoney).toFixed(2)}`);
    console.log(`Money per dancer - ${((reward - charityMoney) / dancers).toFixed(2)}`);




}
winnings(["1",
"89.5",
"summer",
"Abroad"])
;