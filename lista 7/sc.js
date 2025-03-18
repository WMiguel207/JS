alert(`Ex 1`)

let day = Number(prompt("Qual o numero correspondente ao dia da semana de hoje?"))

switch (day) {
    case 1:
        alert(`Domingo`)
        break
    case 2:
        alert(`Segunda - Feira`)
        break
    case 3:
        alert(`Terça - Feira`)
        break
    case 4:
        alert(`Quarta - Feira`)
        break
    case 5:
        alert(`Quinta - Feira`)
        break
    case 6:
        alert(`Sexta - Feira`)
        break
    case 7:
        alert(`Sabado`)
        break
    default:
        alert(`Mentiroso`)
}

alert(`Ex 2`)

let classy = Number(prompt("Insira uma idade especifica (5, 10, 15, 20, 30)"))

switch (classy) {
    case 5: alert(`Infantil A`)
        break
    case 10: alert(`Infantil B`)
        break
    case 15: alert(`Juvenil A`)
        break
    case 20: alert(`Juvenil B`)
        break
    case 30: alert(`Adulto`)
        break
    default: alert(`Idade invalida, insira 5, 10, 15, 20, ou 30`)
}

alert(`Ex 3`)

let tde = String(prompt("Qual seu horario de trabalho? (M, V ou N)"))
switch (tde) {
    case "M":
    case "m":
        alert(`Bom dia!`)
        break
    case "V":
    case "v":
        alert(`Boa tarde!`)
        break
    case "N":
    case "n":
        alert(`Boa noite!`)
        break
    default:
        alert("Turno inválido, insira M, V ou N")
}

alert(`Ex 4`)

let quest = Number(prompt("Escolha um numero de 1 a 5"))

switch (quest) {
    case 1:
        alert(`O corpo humano tem cerca de 37,2 trilhões de células.`)
        break
    case 2:
        alert(`Bananas são radioativas devido ao potássio-40, um isótopo natural.`)
        break
    case 3:
        alert(`Os polvos têm três corações: dois bombeiam sangue para as brânquias, e um para o resto do corpo.`)
        break
    case 4:
        alert(`A Terra não é uma esfera perfeita; ela tem formato de um esferoide oblato, ou seja, é ligeiramente achatada nos polos.`)
        break
    case 5:
        alert(`O mel nunca estraga; arqueólogos encontraram mel em tumbas egípcias com mais de 3.000 anos ainda comestível!`)
        break
    default:
        alert('Numero invalido; escolha de 1 a 5')
}
alert('Ex 5')

let estc = Number(prompt("Escolha um numero de 1 a 4, e veja a estação correspondente"))

switch (estc) {
    case 1:
        alert(`Primavera`)
        break
    case 2:
        alert(`Verão`)
        break
    case 3:
        alert(`Outono`)
        break
    case 4:
        alert(`Inverno`)
        break
    default:
        alert('Numero invalido; escolha de 1 a 4')
}