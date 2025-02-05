
function jkp(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = jkp(1, 3);
console.log(numero);