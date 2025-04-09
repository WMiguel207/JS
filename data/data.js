let dataAtual = new Date()
console.log(dataAtual)

let dia = dataAtual.getDate()
let mes = dataAtual.getMonth()
let ano = dataAtual.getFullYear()
console.log (`${dia}/${mes+1}/${ano}`)

let horas = dataAtual.getHours()
let min = dataAtual.getMinutes()
console.log(`${horas}:${min}`)