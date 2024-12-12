const bikes = [
    {
        name:"Pinarello",
        weight: 1800,
    },
    {
        name:"Madone",
        weight: 1600,
    },
    {
        name:"Canyon",
        weight: 2000,
    }
]
let numMin = bikes[0].weight; 
let bikeMin= "";

for(let i = 0; i < bikes.length; i++){
   let bike = bikes[i]
   
   if(bike.weight <= numMin){
    numMin = bike.weight
    bikeMin = bike.name
   }   
}
const result = `La bici con peso minore è ${bikeMin} e pesa ${numMin}g`
console.log(result)