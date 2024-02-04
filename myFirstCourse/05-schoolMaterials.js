function order(input){
 let pen = 5.8;
 let mark = 7.2;
 let prep = 1.2

 let penNum = Number(input[0]);
 let markNum = Number(input[1]);
 let prepLiters = Number(input[2]);
 let discount = Number(input[3]);
 let percentage = discount / 100;

 let sum = (penNum * pen + markNum * mark + prepLiters * prep);
 let all = sum - (sum * percentage);
 console.log(all);

}
order(["2 ","3 ","4 ","25 "])