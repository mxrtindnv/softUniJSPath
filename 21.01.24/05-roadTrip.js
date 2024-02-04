function trip(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price;
    let destination;
    let place;

    if (budget <= 100) {
        switch (season) {
            case "summer":
                destination = "Bulgaria";
                place = "Camp";
                price = budget * 0.3;
                console.log(`Somewhere in ${destination}`);
                console.log(`${place} - ${price.toFixed(2)}`);
                break;
            case "winter":
                destination = "Bulgaria";
                place = "Hotel";
                price = budget * 0.7;
                console.log(`Somewhere in ${destination}`);
                console.log(`${place} - ${price.toFixed(2)}`);
                break;

        }
    } else if (budget > 100 && budget <= 1000) {
        switch (season) {
            case "summer":
                destination = "Balkans";
                place = "Camp";
                price = budget * 0.4;
                console.log(`Somewhere in ${destination}`);
                console.log(`${place} - ${price.toFixed(2)}`);
                break;
            case "winter":
                destination = "Balkans";
                place = "Hotel";
                price = budget * 0.8;
                console.log(`Somewhere in ${destination}`);
                console.log(`${place} - ${price.toFixed(2)}`);
                break;


        }
    } else if (budget > 1000) {
        destination = "Europe";
        place = "Hotel";
        price = budget * 0.9;
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${price.toFixed(2)}`);

    }



}
trip((["678.53", "winter"]));