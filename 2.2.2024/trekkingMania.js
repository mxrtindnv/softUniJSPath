function trekking(input){
 let groups = Number(input[0]);
 let musala = 0;
 let monblan = 0;
 let kilimandjaro = 0;
 let k2 = 0;
 let everest = 0;
  
 for(let i = 1; i <= groups; i++){
    let pplNum = Number(input[i]);
    if(pplNum <= 5){
        musala += pplNum;
    }else if( pplNum >= 6 && pplNum <= 12){
        monblan += pplNum;
    }else if(pplNum >=13 && pplNum <= 25){
        kilimandjaro += pplNum;
    }else if(pplNum >=26 && pplNum <=40){
        k2 += pplNum;
    }else if(pplNum >= 41){
        everest += pplNum
    }

 }

 let all = everest + k2 + kilimandjaro + monblan + musala;


 console.log(`${((musala/all)*100).toFixed(2)}%`);
 console.log(`${((monblan/all)*100).toFixed(2)}%`);
 console.log(`${((kilimandjaro/all)*100).toFixed(2)}%`);
 console.log(`${((k2/all)*100).toFixed(2)}%`);
 console.log(`${((everest/all)*100).toFixed(2)}%`);



}
trekking((["5",

"25",

"41",

"31",

"250",

"6"]));