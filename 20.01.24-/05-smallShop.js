function shop(input){

    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);


    

    if(city === "Varna"){
       if(product === "coffee"){
        console.log(amount * 0.45);
       }else if(product === "water"){
        console.log(amount * 0.7);
       }else if(product === "sweets"){
        console.log(amount * 1.35);
       }else if(product === "beer"){
        console.log(amount * 1.1);
       }else if(product === "peanuts"){
        console.log(amount * 1.55);
       }
    }

    if(city === "Plovdiv"){
        if(product === "coffee"){
         console.log(amount * 0.40);
        }else if(product === "water"){
         console.log(amount * 0.7);
        }else if(product === "sweets"){
         console.log(amount * 1.30);
        }else if(product === "beer"){
         console.log(amount * 1.15);
        }else if(product === "peanuts"){
         console.log(amount * 1.50);
        }
     }

     if(city === "Sofia"){
        if(product === "coffee"){
         console.log(amount * 0.50);
        }else if(product === "water"){
         console.log(amount * 0.8);
        }else if(product === "sweets"){
         console.log(amount * 1.45);
        }else if(product === "beer"){
         console.log(amount * 1.20);
        }else if(product === "peanuts"){
         console.log(amount * 1.60);
        }
     }





}
shop(["coffee","Varna","2"]);