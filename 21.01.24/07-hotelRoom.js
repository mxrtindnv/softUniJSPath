function Hotel(input) {
    let month = input[0];
    let days = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            apartmentPrice = 65;
            studioPrice = 50;
            if (days > 7 && days <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (days > 14) {
                studioPrice = studioPrice * 0.7;
            }

            if (days > 14) {
                apartmentPrice = apartmentPrice * 0.9;
            }

            console.log(`Apartment: ${(apartmentPrice * days).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrice * days).toFixed(2)} lv.`);
            break;



        case "June":
        case "September":
            apartmentPrice = 68.7;
            studioPrice = 75.2;

            if (days > 14) {
                studioPrice = studioPrice * 0.8;
            }

            if (days > 14) {
                apartmentPrice = apartmentPrice * 0.9;
            }

            console.log(`Apartment: ${(apartmentPrice * days).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrice * days).toFixed(2)} lv.`);
            break;

        case "July":
        case "August":
            apartmentPrice = 77;
            studioPrice = 76;

            if (days > 14) {
                apartmentPrice = apartmentPrice * 0.9;
            }

            console.log(`Apartment: ${(apartmentPrice * days).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrice * days).toFixed(2)} lv.`);
            break;



    }


}
Hotel((["May",

"15"]));