var inicio = document.getElementById("txt_inicio")
var fim = document.getElementById("txt_fim")
var passo = document.getElementById("txt_passo")

var res =  document.getElementById("resultado")

function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Faltam dados'
    }
    else{
        res.innerHTML = 'contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('passo invalido, considerando passo 1')
            p = 1   
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                if(c != i){
                    res.innerHTML += ' > '    
                }
                res.innerHTML += c
            }
        }
        else if(i > f){
            for(let c = i; c >= f; c -= p){
                if(c != i){
                    res.innerHTML += ' > '    
                }
                res.innerHTML += c
            }
        }
        else{
            window.alert('inicio e fim iguais')
        }
    }
}