// FUNCTIONS

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//   VARIABLES
const soccer =[
    {
        squad: "Inter",
        point: 0,
        foul: 0,
    },
    {
        squad: "Milan",
        point: 0,
        foul: 0,
    },
    {
        squad: "Palermo",
        point: 0,
        foul: 0,
    }
]

let newSoccer = []


for(let i = 0; i < soccer.length; i++){
    let soccerSquad = soccer[i]
    soccerSquad.point = getRndNumber(1,114)
    soccerSquad.foul = getRndNumber(1,20) 
    const newSoccerSquad= {

    };
    newSoccerSquad.newSquad = soccerSquad.squad
    newSoccerSquad.newFoul = soccerSquad.foul
    newSoccer.push(newSoccerSquad)
}

console.log(newSoccer)