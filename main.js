console.log('El numero será impar o par?')
var Numero = Number(prompt('Dime un numero'))
console.log(Numero)

if (isNaN (Numero)){
    console.log(' Este no es un numero')
}
else{

if(Numero%2==0){
    console.log('El ' +Numero+ ' es un número par')
}
else{
    console.log('El ' +Numero+ ' es un número impar')
}
}
