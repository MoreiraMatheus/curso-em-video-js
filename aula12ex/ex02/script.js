var data = new Date()
var ano = data.getFullYear()
var nascimento_pessoa = document.getElementById('txtano')
var res = document.querySelector('div#res')
var img = document.createElement('img')

function verificar(){
    if(nascimento_pessoa.value.length == 0 || nascimento_pessoa.value > ano){
        alert('digite um valor válido')
    }
    else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento_pessoa.value)
        var genero = ''
        if (sexo[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                // menino
                img.setAttribute('src', 'img/menino.jpg')
            }
            else if(idade < 18){
                // rapaz
                img.setAttribute('src', 'img/rapaz.png')
            }
            else if(idade < 50){
                // homem
                img.setAttribute('src', 'img/homem.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }
        else if(sexo[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                // menina
                img.setAttribute('src', 'img/menina.jpg')
            }
            else if(idade < 18){
                // moça
                img.setAttribute('src', 'img/moca.png')
            }
            else if(idade < 50){
                // mulher
                img.setAttribute('src', 'img/mulher.jpg')
            }
            else{
                // idosa
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `Você é ${genero} com ${Number.parseInt(idade)} anos`
        res.appendChild(img)
    }
}