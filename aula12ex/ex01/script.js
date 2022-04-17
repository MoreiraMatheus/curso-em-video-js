var momento_atual = new Date()
hora_atual = momento_atual.getHours()

var cor_da_manha = '#95adb9'
var cor_da_tarde = '#de712c'
var cor_da_noite = '#1e3360'

var atualiza_hora = document.getElementById('hora')
var comprimento = document.getElementById('comprimento')
var cor_de_fundo = document.getElementsByTagName('body')[0]
var img = document.getElementById('img')

atualiza_hora.innerHTML += `${hora_atual} horas`
if(hora_atual < 12){
    comprimento.innerHTML = 'Bom dia!'
    img.src = 'img/manha.jpg'
    cor_de_fundo.style.background = cor_da_manha
}
else if(hora_atual < 18){
    comprimento.innerHTML = 'Boa tarde!'
    img.src = 'img/tarde.jpg'
    cor_de_fundo.style.background = cor_da_tarde
}
else{
    comprimento.innerHTML = 'Boa noite!'
    img.src = 'img/noite.jpg'
    cor_de_fundo.style.background = cor_da_noite
}