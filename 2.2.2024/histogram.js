function histogram(input){
    let numCount = Number(input[0]);
    
    let p1 = 0;
    let p2=0;
    let p3=0;
    let p4=0;
    let p5=0;
    

    for(let i = 1; i<= numCount; i++){
        let curNum = Number(input[i]);
        
        if(curNum >= 1 && curNum < 200){
            p1++
        }else if(curNum >= 200 && curNum <= 399){
            p2++
        
        }else if(curNum >= 400 && curNum <=599 ){
            p3++
        }else if(curNum >= 600 && curNum <= 799){
            p4++
        }else if(curNum>= 800){
            p5++
        }
        
    }

    console.log(`${((p1/(p1 + p2 + p3 + p4 + p5)) * 100).toFixed(2)}%`);
    console.log(`${((p2/(p1 + p2 + p3 + p4 + p5)) * 100).toFixed(2)}%`);
    console.log(`${((p3/(p1 + p2 + p3 + p4 + p5)) * 100).toFixed(2)}%`);
    console.log(`${((p4/(p1 + p2 + p3 + p4 + p5)) * 100).toFixed(2)}%`);
    console.log(`${((p5/(p1 + p2 + p3 + p4 + p5)) * 100).toFixed(2)}%`);





}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);