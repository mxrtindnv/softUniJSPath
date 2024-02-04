function storePrices(input){
    let item = input[0];
    let day = input[1];
    let amount = input[2];

    switch (day) {
        default: console.log("error");break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (item) {
                case "banana":console.log((amount * 2.5 ).toFixed(2));break;
                case "apple":console.log((amount * 1.2 ).toFixed(2));break;
                case "orange":console.log((amount * 0.85 ).toFixed(2));break;
                case "grapefruit":console.log((amount * 1.45 ).toFixed(2));break;
                case "kiwi":console.log((amount * 2.7 ).toFixed(2));break;
                case "pineapple":console.log((amount * 5.5 ).toFixed(2));break;
                case "grapes":console.log((amount * 3.85 ).toFixed(2));break;
                default: console.log("error");break;
            }break;
         case "Saturday":
         case "Sunday":
            switch (item) {
                case "banana":console.log((amount * 2.7).toFixed(2));break;
                case "apple":console.log((amount * 1.25 ).toFixed(2));break;
                case "orange":console.log((amount * 0.9).toFixed(2));break;
                case "grapefruit":console.log((amount * 1.6).toFixed(2));break;
                case "kiwi":console.log((amount * 3).toFixed(2));break;
                case "pineapple":console.log((amount * 5.6 ).toFixed(2));break;
                case "grapes":console.log((amount * 4.2).toFixed(2));break;
                default: console.log("error");break;
            }
            

    }


}
storePrices(["orange", "Sunday", "3"]);