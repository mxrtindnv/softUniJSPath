function hairsalon(input) {
    let goal = Number(input[0]);
    let index = 1
    let currentRow = input[index];
    let moneySaved = 0;

    while (currentRow !== "closed") {
        let action = input[index];
        index++
        let actionType = input[index];


        switch (action) {
            case "haircut":
                switch (actionType) {
                    case "mens":
                        moneySaved += 15;
                        break;
                    case "ladies":
                        moneySaved += 20
                        break;
                    case "kids":
                        moneySaved += 10
                        break;





                }; break;
             case "color":
                switch (actionType) {
                    case "touch up":
                        moneySaved += 20;
                        break;
                    case "full color":
                        moneySaved += 30
                        break;
                }

                ; break;;

        }
     
      
      index++
      currentRow = input[index]
       if(moneySaved >= goal){
        break;
       }

    }

    if(moneySaved >= goal){
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${moneySaved}lv.`);
    } else{
        console.log(`Target not reached! You need ${goal - moneySaved}lv. more.`)
        console.log(`Earned money: ${moneySaved}lv.`);
    }





}
hairsalon((["50",
"color",
"full color",
"haircut",
"ladies"]));