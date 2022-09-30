const centena = String(prompt('Coloque a Centena'))
if (centena.length != 3){
    alert('Não é Centena')
}
else if (centena.length == 3){
    return (
    parseFloat(
    centena
    .split()
    .reverse()
    .join())
}

  