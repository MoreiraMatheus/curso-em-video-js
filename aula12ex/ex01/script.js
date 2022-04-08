var momento_atual = new Date()
hora_atual = momento_atual.getHours()

var cor_da_tarde = '#ff4500'
var cor_da_manha = '#16163b'

var foto_manha = ''
var foto_tarde = ''
var foto_noite = ''

var atualiza_hora = document.getElementById('hora')
var comprimento = document.getElementById('comprimento')
var cor_de_fundo = document.getElementsByTagName('body')[0]

atualiza_hora.innerHTML += `${hora_atual} horas`
if(hora_atual < 12){
    comprimento.innerHTML = 'Bom dia!'
}
else if(hora_atual < 18){
    comprimento.innerHTML = 'Boa tarde!'
    cor_de_fundo.style.background = cor_da_tarde
}
else{
    comprimento.innerHTML = 'Boa noite!'
    cor_de_fundo.style.background = cor_da_manha
}