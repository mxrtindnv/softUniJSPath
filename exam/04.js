function ratingPC(input){
    let pcNum = Number(input[0]);
    let totalSales = 0;
    let averageRating = 0;

    for(let i = 1; i <= pcNum; i++){
        let pcModel = input[i];
        let pcRating = Number(pcModel[2]);
        let pcSales = (Number(pcModel) - pcRating) / 10;
        averageRating += pcRating;
        switch(pcRating){
            case 2:   totalSales += 0  ; break;
                case 3:  totalSales += pcSales * 0.5  ; break;
                    case 4:  totalSales += pcSales * 0.7  ; break;
                        case 5:  totalSales += pcSales * 0.85  ; break;
                            case 6:   totalSales += pcSales ; break;
        }
    }

    console.log(totalSales.toFixed(2));
    console.log((averageRating / pcNum).toFixed(2));




}
ratingPC(["2",
"204",
"206"]);