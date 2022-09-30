const Sexo = Number(prompt('1 para Homem e 2 para Mulher ?'))
const Altura = Number(prompt('Sua altura'))
const Peso = Number(prompt('Seu Peso'))

if (Sexo==1){
    var PesoIdeal = Peso*Altura-58
}
else if(Sexo==2){
    var PesoIdeal = Peso*Altura-44
}
alert(PesoIdeal)