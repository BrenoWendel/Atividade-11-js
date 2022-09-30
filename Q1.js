const ValorProduto = Number(prompt('Digite o Valor'))
var NovoValorProduto = ValorProduto - (ValorProduto*0.15)
        
if(NovoValorProduto>=500){
    var JulgandoValor = 'caro'
}    
else if (NovoValorProduto<=500) {
    var JulgandoValor ='Barato'
}
alert(NovoValorProduto)
alert(JulgandoValor)