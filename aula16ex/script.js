var numeros = []
function adicionar(){
    var numero = document.getElementById('num')
    var select = document.getElementById('select')
    if(numero.value.length == 0){
        window.alert('digite um numero')
    }
    else if(numero.value <= 100 && numero.value >= 0){
        var num_processado = Number(numero.value)
        if(numeros.indexOf(num_processado) == -1){
            numeros.push(num_processado)
            select.innerHTML += `<option>${num_processado}</option>`
        }
        else{
            window.alert(`O numero ${num_processado} já foi adicionado`)
        }
    }
    else{
        window.alert('numero inválido')
    }
    numero.value = ''
    numero.focus()
}

function analisar(){
    if(numeros.length == 0){
        window.alert('Adicione numeros primeiro')
    }
    else{
        var resultado = document.getElementById('resultado')
        var resultado_title = document.getElementById('resultado-title')
        resultado_title.style.display = 'block'
        resultado.innerHTML = ''

        resultado.innerHTML += `<p>Total de numeros cadastrados: ${numeros.length}</p>`

        resultado.innerHTML += `<p>O maior numero informado foi: ${Math.max(...numeros)}</p>`

        resultado.innerHTML += `<p>O menor numero informado foi: ${Math.min(...numeros)}</p>`

        var soma = 0
        for(var c = 0; c < numeros.length; c++){
            soma += numeros[c]
        }
        resultado.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`

        var media = soma/numeros.length
        resultado.innerHTML += `<p>a média dos valores é: ${media}</p>`
    }
}