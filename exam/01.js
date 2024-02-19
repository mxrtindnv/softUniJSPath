// •	Опаковъчна хартия - 5.80 лв. за ролка
// •	Плат - 7.20 лв. за ролка
// •	Лепило - 1.20 лв. за литър


function xmas(input){
    let paper = Number(input[0]);
    let plat = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3])
   
    let paperPrice = paper * 5.8;
    let platPrice = plat * 7.2;
    let gluePrice = glue * 1.2;

    let discountPrice = (paperPrice + platPrice + gluePrice) * (discount * 0.01)
    let TotalPrice = paperPrice + platPrice + gluePrice - discountPrice
    console.log(TotalPrice.toFixed(3));




}
xmas((["4",
"2",
"5",
"13"])
);