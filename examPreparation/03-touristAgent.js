function agency(input) {
    let destination = input[0];
    let equipment = input[1];
    let vipCheck = input[2];
    let days = Number(input[3]);
    let totalSum = 0;

    if (days < 1) {
        console.log(`Days must be positive number!`);
        return;
    }
    if(days > 7){
        days -= 1
    }

    switch (destination) {
        case "Borovets":
        case "Bansko":
            switch (equipment) {
                case "noEquipment": switch (vipCheck) {
                    case "yes": totalSum += (days * 80) * 0.95; break;
                    case "no": totalSum += days * 80; break;
                }; break;
                case "withEquipment": switch (vipCheck) {
                    case "yes": totalSum += (days * 100) * 0.9; break;
                    case "no": totalSum += days * 100; break;
                }; break;
                default: console.log("Invalid input!"); return;;
            } break;

            case "Varna":
                case "Burgas": switch (equipment) {
                    case "withBreakfast": switch (vipCheck) {
                        case "yes": totalSum += (days * 130) * 0.88; break;
                        case "no": totalSum += days * 130; break;
                    }; break;
                    case "noBreakfast": switch (vipCheck) {
                        case "yes": totalSum += (days * 100) * 0.93; break;
                        case "no": totalSum += days * 100; break;
                    }; break;
                    default: console.log("Invalid input!"); return;
                } break;

                default: console.log("Invalid input!"); return;


    }

    console.log(`The price is ${totalSum.toFixed(2)}lv! Have a nice time!`);






}
agency((["Gabrovo",

"noBreakfast",

"no",

"3"]));