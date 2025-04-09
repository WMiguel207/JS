let cont = 0
let intervalo

function iniciarCont(){
    intervalo = setInterval(function(){
    cont++
    console.log ("contador: "+cont)
}, 1000)
}

function pararCont(){
    clearInterval(intervalo)
}

iniciarCont()