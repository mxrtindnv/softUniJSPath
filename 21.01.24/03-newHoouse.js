function flowersPurchase(input){
    let flower = input[0];
    let flowerNum = Number(input[1]);
    let budget = Number(input[2]);
    let price;
   
    switch(flower){
       
        case "Roses": 
        if(flowerNum > 80){
           price = (flowerNum * 5) * 0.9;
        }else{
           price = flowerNum * 5
        }
   
        if(budget >= price){
           console.log(`Hey, you have a great garden with ${flowerNum} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
        }else{
           console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
        }
        
        break;
    
        case "Dahlias":
           if(flowerNum > 90){
               price = (flowerNum * 3.8) * 0.85;
            }else{
               price = flowerNum * 3.8
            }
       
            if(budget >= price){
               console.log(`Hey, you have a great garden with ${flowerNum} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
            }else{
               console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
            }
           
        break;
        
        case "Tulips":
   
        if(flowerNum > 80){
           price = (flowerNum * 2.8) * 0.85;
        }else{
           price = flowerNum * 2.8
        }
   
        if(budget >= price){
           console.log(`Hey, you have a great garden with ${flowerNum} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
        }else{
           console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
        }
           
        break;
        
        case "Narcissus":
           if(flowerNum < 120){
               price = (flowerNum * 3) * 1.15 ;
            }else{
               price = flowerNum * 3
            }
       
            if(budget >= price){
               console.log(`Hey, you have a great garden with ${flowerNum} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
            }else{
               console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
            }
           
        break;
        
        case "Gladiolus":
           if(flowerNum < 80){
               price = (flowerNum * 2.5) * 1.2 ;
            }else{
               price = flowerNum * 2.5
            }
       
            if(budget >= price){
               console.log(`Hey, you have a great garden with ${flowerNum} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
            }else{
               console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
            }
           
        break;
   
   
    }
   
   }
   flowersPurchase((["Roses",
   
   "55",
   
   "250"]));