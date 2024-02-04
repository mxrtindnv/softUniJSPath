function trip(input) {
    let days = Number(input[0]) - 1;
    let room = input[1];
    let rating = input[2];
    let price = 0;

    switch (room) {

        case "room for one person":
            price = 18;
            switch (rating) {
                case "positive":
                    price = price * 1.25;
                    console.log((days * price).toFixed(2));
                    break;
                case "negative":
                    price = price * 0.9;
                    console.log((days * price).toFixed(2));
                    break;
            }break;

        case "apartment": 
        price = 25;
        
        if (days < 10 && days >= 0){
            price = price * 0.7;
            
        } else if (days >= 10 && days <= 15){
            price = price * 0.65;
            
        } else {
            price = price * 0.5;
            
        }

        if ( rating === "positive"){
            price = price * 1.25
        } else {
            price = price * 0.9
        }
        console.log((days * price).toFixed(2));
        
        break;


            
        case "president apartment":
            price = 35;
        
            if (days < 10 && days >= 0){
                price = price * 0.9;
                
            } else if (days >= 10 && days <= 15){
                price = price * 0.85;
                
            } else {
                price = price * 0.8;
                
            }
    
            if ( rating === "positive"){
                price = price * 1.25
            } else {
                price = price * 0.9
            }
            console.log((days * price).toFixed(2));
            
            break;

    }



}
trip(["30",

"president apartment",

"negative"]);