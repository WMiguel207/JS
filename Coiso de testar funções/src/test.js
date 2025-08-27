function inteiro(num1, num2, num3){
    return(num1*num2*num3)
}

function divisao(div1, div2){
    if(div1 == 0||div2 == 0){
        return "Não é possível dividir por 0"
    }else{
    return (div1/div2)
    }
}

function celsiusFahrenheit(temp){
    return (temp*1.8)+32
}
function fahrenheitCelsius(temp){
    return (temp-32)*5/9
}
function media(nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3
}

function contar(string){
    return (string.length)
}

function calcular(numero1, numero2, operacao){
    switch (operacao){
        case "+":
            return numero1+numero2
        case "-":
            return numero1-numero2
        case "*":
            return numero1*numero2
        case "/":
            return numero1/numero2
        default:
            return "Operação inválida"
    }
}