var resultado = document.getElementById('resultado')
var numero = document.getElementById('numero')

function tabuada(){
    var num = Number(numero.value)
    resultado.innerHTML = ''
    for(var c = 1; c <= 10; c++){
        resultado.innerHTML += `${c}x${num}=${num*c} <br>`
        resultado.style.border = 'solid black 1px'
    }
}
