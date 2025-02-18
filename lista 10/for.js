alert(`Ex 1`)

for (let num = 1; num <= 30; num++){
    console.log(num)
}

console.log("")
alert(`Ex 2`)

for (let num1 = 30; num1 >= 1; num1--){
    console.log(num1)
}

console.log("")
alert(`Ex 3`)

for (let cont = 1; cont <= 5; cont++){
    let opc = Number(prompt("Escolha um numero"))
    if(opc >= 50){
        console.log("Acima da media")
    }else{
        console.log ("Abaixo da media")
    }
}

console.log("")
alert(`Ex 4`)

let escolha = Number(prompt("Escolha um numero:"))
for (let mult = 1; mult <= 10; mult++){
    let result = (mult*escolha)
    console.log(result)
}


console.log("")
alert(`Ex 5`)

for (let escolha1 = Number(prompt("Escolha o numero de patinhos:")); escolha1 > 1; escolha1--){
    console.log(escolha1, "patinhos foram passear")
        console.log("Além das montanhas, para brincar")
        console.log("A mamãe gritou: Quá, quá, quá, quá")
        console.log("Mas só", escolha1 - 1, "patinhos voltaram de lá.")
        console.log("")
}
        console.log("1 patinho foi passear")
        console.log("Além das montanhas, para brincar")
        console.log("A mamãe gritou: Quá, quá, quá, quá")
        console.log("Mas nenhum patinho voltou de lá.")
        console.log("")
        console.log ("A mamãe patinha foi procurar")
        console.log("Além das montanhas")
        console.log("Na beira do mar")
        console.log("A mamãe gritou: Quá, quá, quá, quá")
        console.log("E todos os patinhos voltaram de lá.")
        
console.log("")
alert(`Ex 6`)

for(let cont1 = 1; cont1<=10; cont1++){
    idade = Number(prompt("Escreva uma idade:"))
    if(idade >= 18){
        console.log("A idade selecionada é de maior!")
    }else{
        console.log("A idade selecionada é de menor! Faltam", 18-idade, "anos para a maioridade")
    }
}

console.log("")
alert(`Ex 7; Eleição`)
alert(`Bem-vindo ao programa eleitoral de Booleanopoly`)
let opc1 = String(prompt("Gostaria de cadastrar seu voto?").toLowerCase())

if(opc1 == "s"){
    let opc2 = String(prompt("Já tem conhecimento dos candidatos presidentes de Booleanopoly?").toLowerCase())
    if(opc2 == "n"){
        alert(`1- Aline Silva; 34 anos; Bolsas de estudo e hackathons mensais para incentivar a programação.`)
        alert(`2- Bruno Costa; 42 anos; Sistema de mentoria e "Vale-Código" para capacitação em TI.`)
        alert(`3- Carlos Lima; 29 anos: Ensino de programação desde o ensino fundamental e hubs de inovação em bairros carentes.`)
    }
    alert(`ATENÇÃO: Após cadastrado, seu voto não pode ser alterado!`)
    alert(`1- Aline Silva; 2- Bruno Costa; 3- Carlos Lima; 4- Voto rm branco; 5- Voto nulo`)
    for (let confirmacao = "n"; confirmacao == "n";){
        voto = Number(prompt("Digite seu voto agora"))
        if (voto == 1) {
            alert(`Você escolheu "1- Aline Silva";`)
            confirmacao = prompt("Você tem certeza de sua escolha?").toLowerCase()
            if (confirmacao == "s") {
                alert("Voto confirmado para Aline Silva!")
            } else {
                alert("Voto cancelado.")

            }
        } else if (voto == 2) {
            alert(`Você escolheu "2- Bruno Costa";`)
            confirmacao = prompt("Você tem certeza de sua escolha?").toLowerCase()
            if (confirmacao == "s") {
                alert("Voto confirmado para Bruno Costa!")
            } else {
                alert("Voto cancelado.")

            }
        } else if (voto == 3) {
            alert(`Você escolheu "3- Carlos Lima";`)
            confirmacao = prompt("Você tem certeza de sua escolha?").toLowerCase()
            if (confirmacao == "s") {
                alert("Voto confirmado para Carlos Lima!")
            } else {
                alert("Voto cancelado.")
    
            }
        } else if (voto == 4) {
            alert("Você escolheu votar em BRANCO.")
            confirmacao = prompt("Você tem certeza de sua escolha?").toLowerCase()
            if (confirmacao == "s") {
                alert("Voto em branco confirmado!")
            } else {
                alert("Voto cancelado.")

            }
        } else if (voto == 5) {
            alert("Você escolheu votar NULO.")
            confirmacao = prompt("Você tem certeza de sua escolha?").toLowerCase()
            if (confirmacao == "s") {
                alert("Voto nulo confirmado!")
            } else {
                alert("Voto cancelado.")

            }
        } else {
            alert("Opção inválida! Por favor, escolha um número entre 1 e 5.")
        }
    }
}
alert(`Tenha um bom dia!`)