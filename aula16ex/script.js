var numeros = [1, 2]
function adicionar(){
    var numero = document.getElementById('num')
    var select = document.getElementById('select')
    if(numero.value.length == 0){
        window.alert('digite um numero')
    }
    else if(numero.value <= 100 && numero.value >= 1){
        var num_processado = Number(numero.value)
        if(numeros.indexOf(num_processado) == -1){
            numeros.push(num_processado)
            window.alert(`numero ${num_processado} adicionado`)
            select.innerHTML += `<option>`
        }
        else{
            window.alert(`O numero ${num_processado} já foi adicionado`)
        }
    }
    else{
        window.alert('numero inválido')
    }
}