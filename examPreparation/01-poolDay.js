function pool(input){
    let peopleNum = Number(input[0]);
    let entryTax = Number(input[1]);
    let sunBedTax = Number(input[2]);
    let umbrellaTax = Number(input[3]);

    let entrySum = peopleNum * entryTax;
    let sunBedSum = (Math.ceil(peopleNum * 0.75)) * sunBedTax;
    let umbrellaSum  = (Math.ceil(peopleNum * 0.5)) * umbrellaTax;

    console.log(`${(entrySum + sunBedSum + umbrellaSum).toFixed(2)} lv.`);
    
}
pool((["21", "5.50", "4.40", "6.20"]));