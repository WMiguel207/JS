let cont = "s"
let placarPl = 0
let placarPc = 0
function jkp(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

alert(`Bem-vindo ao JOKEMPÔ`)
alert(`Escolha entre 1, 2 ou 3`)
alert(`1- Pedra`)
alert(`2- Papel`)
alert(`3- Tesoura`)

do {

    alert(`O placar atual está ${placarPl} x ${placarPc}`)
    let player = Number(prompt())
    if (player == 1) {
        player = "Pedra"
    } else if (player == 2) {
        player = "Papel"
    } else if (player == 3) {
        player = "Tesoura"
    }
    const pc = ["Pedra", "Papel", "Tesoura"][Math.floor(Math.random() * 3)]

    alert(`Você escolheu ${player}`)
    alert(`O oponente escolheu ${pc}`)

    if (player == pc) {
        alert(`Ocorreu um empate, ambos escolheram ${player}`)
        alert(`Sem pontos!`)
    } else if ((player == "Pedra" && pc == "Tesoura") || (player == "Tesoura" && pc == "Papel") || (player == "Papel" && pc == "Pedra")) {
        alert(`Você ganhou! Você jogou ${player}, e o oponente jogou ${pc}`)
        placarPl++
    } else {
        alert(`Você perdeu, Você jogou ${player}, e o oponente jogou ${pc}`)
        placarPc++
    }
    cont = prompt("Deseja continuar?(s/n)").toLowerCase()
} while (cont == "s")

alert(`O jogo terminou!`)
if(placarPc==placarPl){
    alert(`O placar final está empatado em ${placarPl} x ${placarPc}`)
}else if(placarPl>placarPc){
    alert(`O placar final está ${placarPl} x ${placarPc}`)
    alert(`Você ganhou por ${placarPl-placarPc} pontos`)
}else{
    alert(`O placar final está ${placarPc} x ${placarPl}`)
    alert(`O oponente ganhou por ${placarPc-placarPl} pontos`)
}
