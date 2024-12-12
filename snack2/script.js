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

let squadFoul = []

for(let i = 0; i < soccer.length; i++){
    let soccerSquad = soccer[i]
    soccerSquad.point = getRndNumber(1,114)
    soccerSquad.foul = getRndNumber(1,20)   
    squadFoul.push(soccerSquad.squad, soccerSquad.foul)
}

console.log(squadFoul)