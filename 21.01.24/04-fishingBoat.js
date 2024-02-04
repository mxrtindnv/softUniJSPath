function fishingTrip(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);
    let price;

    switch (season) {
        case "Spring":
             price = 3000;

            if(people <= 6){
                price = price * 0.9;
            }else if(people >= 7 && people <= 11){
                price = price * 0.85;
            }else if(people >= 12){
                price = price * 0.75;
            }

            if(people % 2 == 0){
                price = price * 0.95
            }

            if(budget >= price){
                console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
            }

            break;
        case "Summer":
             price = 4200;

            if(people <= 6){
                price = price * 0.9;
            }else if(people >= 7 && people <= 11){
                price = price * 0.85;
            }else if(people >= 12){
                price = price * 0.75;
            }

            if(people % 2 == 0){
                price = price * 0.95
            }

            if(budget >= price){
                console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
            }

            break;
        case "Autumn":
            price = 4200;

            if(people <= 6){
                price = price * 0.9;
            }else if(people >= 7 && people <= 11){
                price = price * 0.85;
            }else if(people >= 12){
                price = price * 0.75;
            }

           

            if(budget >= price){
                console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
            }

            break;
        case "Winter":
            price = 2600;

            if(people <= 6){
                price = price * 0.9;
            }else if(people >= 7 && people <= 11){
                price = price * 0.85;
            }else if(people >= 12){
                price = price * 0.75;
            }

            if(people % 2 == 0){
                price = price * 0.95
            }

            if(budget >= price){
                console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
            }

            break;

    }




}
fishingTrip((["3600",

"Autumn",

"6"]));