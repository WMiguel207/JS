
function jkp(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

alert (`Bem-vindo ao JOKEMPÔ`)
alert (`Escolha entre 1, 2 ou 3`)
alert (`1- Pedra`)
alert (`2- Papel`)
alert (`3- Tesoura`)
let player = Number(prompt())
if(player == 1){
    player = "Pedra"
}else if (player == 2){
    player = "Papel"
}else if (player == 3){
    player = "Tesoura"
}
const pc = ["Pedra", "Papel", "Tesoura"] [Math.floor(Math.random() * 3)]

alert(`Você escolheu ${player}`)
alert(`O oponente escolheu ${pc}`)

if (player == pc){
    alert(`Ocorreu um empate, ambos escolheram ${player}`)
}else if ((player == "Pedra" && pc == "Tesoura") || (player == "Tesoura" && pc == "Papel") || (player == "Papel" && pc =="Pedra")){
    alert (`Você ganhou! Você jogou ${player}, e o oponente jogou ${pc}`)} else {
    alert(`Você perdeu, Você jogou ${player}, e o oponente jogou ${pc}`)
}