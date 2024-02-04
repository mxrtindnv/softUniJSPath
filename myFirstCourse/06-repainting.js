function all(input){
 let nailon = 1.5;
 let boq = 14.5;
 let razreditel = 5;
 
 let nailonSum = Number(input[0]);
 let boqSum = Number(input[1]);
 let razreditelSum = Number(input[2]);
 let hourWork = Number(input[3]);

 

 let materials = (nailonSum + 2) * nailon + ( (boqSum + boqSum * 0.1) * boq) + razreditelSum * razreditel + 0.4;

 let salary = (materials * 0.3) * hourWork;

 let final = salary + materials;

 console.log(final);

}
all(["10 ","11 ","4 ","8"]);