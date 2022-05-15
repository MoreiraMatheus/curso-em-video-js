var numeros = [1, 2]
function adicionar(){
    var numero = document.getElementById('num')
    if(numero.value.length == 0){
        // numero = Number(numero)
        window.alert('digite um numero')
    }
    else if(numero.value <= 100 && numero.value >= 1){
        window.alert(numeros)
        if(nume){
            numeros.push(numero.value)
            window.alert(`numero ${numero.value} adicionado`)
        }
    }
    else{
        window.alert('numero inválido')
    }
}