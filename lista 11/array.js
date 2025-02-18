alert(`Ex 1`)

let filmes = ["A viagem de Chihiro", "Ponyo", "Castelo animado"]
console.log(filmes[0])

console.log("")
alert(`Ex 2`)

let frutas = ["Maça", "Tomate", "Uva", "Banana", "Lichia"]
console.log(frutas[2])

console.log("")
alert(`Ex 3`)

let cor = ["Azul", "Vermelho", "Amarelo"]
cor.push("Verde");

for(let cont = 0; cont <= cor.length; cont++){
    console.log(cor[cont])
}

console.log("")
alert(`Ex 4`)

let num = ["12", "54", "324", "78"]
num.pop()

for(cont = 0; cont <= num.length; cont++){
    console.log(num[cont])
}

console.log("")
alert(`Ex 5`)

let animais = ["Cachorro", "Gato", "Pássaro"]
animais.shift()
for (cont = 0; cont < animais.length; cont++) {
    console.log(animais[cont])
}

console.log("")
alert(`Ex 6`)

let carros = ["Fusca", "Gol", "Civic", "Corolla"]
console.log("Quantidade de carros:", carros.length)

console.log("")
alert(`Ex 7`)

let num1 = []
num1.push(10, 20, 30)
num1.unshift(5)
num1.pop()
num1.shift()

for (cont = 0; cont < animais.length; cont++) {
    console.log("Array final:", num1[cont])
}
console.log("Tamanho do array:", num1.length)
