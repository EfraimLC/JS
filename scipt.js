// // alert('spodkasçdjaçd');
// // variável que varea
// // let
// // constante NÂO varea
// // const
// // variável que varea
// // var
// // let nome = 'Guilherme';
// // let vorname = ' Strhaller ';
// // const age = 6767676767676;
// // alert(nome + vorname + age);

// // let num1 = +prompt('Digite um número: ');
// // let num2 = +prompt('Digite outro número: ');
// // if (num2 != 0) {
// //   alert(num1 + num2);
// //   alert(num1 - num2);
// //   alert(num1 * num2);
// //   alert(num1 / num2);
// // }
// // else{
// //     alert('BUUUUUUUUUUUUUUUUUUUUUUUUUUUURRO!!!!!!!!!!!!!!')
// // }

// // const nome = prompt('Name und Vorname');
// // alert('Hallo, '+nome+'!');
// // if(nome == 'Zé'){
// //     alert('Du bist Zé');
// // }
// // console.log('HALLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')



// // EX1 e EX5
// let age = prompt('Digite sua idade');

// if (age >= 18) {
//   alert(' Você é maior de idade');
//   alert('Você pode votar')
// } else {
//   alert('Você é menor de idade');
//   alert('Você não pode votar')
// }
// // EX2
// let grade = prompt('Digite sua nota escolar');
// if(grade < 7){
//     alert('Você está reprovado')
// }
// if(grade >=7 && grade <= 10){
//     alert('Você está aprovado')
// }
// else{
//     alert('Você está reprovado')
// }
// // EX3
// let vm = prompt('Digite a velocidade média do veículo (não é necessário a unidade)');
// if (vm >= 80) {
//   alert('Você foi multado');
// }
// else{
//     alert('Você não foi multado')
// }
// // EX4
// let num = prompt('Digite um número')
// if(num <0 ){
//     alert('Esse é um número negativo')
// }
// else{
//     alert('Esse é um número  positivo')
// }
// // EX6
// let produto = prompt('Valor da compra')
// if(produto >= 100){
//     alert('Você ganhou desconto')
// }
// else{
//     alert('Não ganhou desconto')
// }
// // EX7
// let temp = prompt('Qual é a temperatura atual?')
// if(temp <= 0){
//     alert('Estupidamente frio')
// }
// if(temp > 0 && temp <= 10){
//     alert('Bem frio')
// }
// if(temp > 10 && temp <= 15){
//     alert('Está frio ainda')
// }
// if(temp > 15 && temp <= 25){
//     alert('Dá para aguentar')
// }
// if(temp > 25 && temp <= 30){
//     alert('Está bom heim')
// }
// if(temp > 30){
//     alert('Agora está muito quente')
// }
// // EX8
// let code = prompt('Digite a senha correta')
// if(code = 1234){
//     alert('Passagem liberada')
// }
// else{
//     alert('Passagem negada')
// }
// // EX9
// let meta = prompt('Valor vendido pelo funcionário')
// if(meta >= 5000){
//     alert('Meta alcançada')
// }
// else{
//     alert('Venda mais')
// }

// EX1
const nota = prompt('Digite sua nota')
const freq = prompt('Digite a sua frequência')
if(nota >= 7  &&(freq >= 75)){
    alert('Aluno aprovado')
}
else{
    alert('Aluno reprovado')
}
// EX2
const id = prompt('Digite sua idade')
const con = prompt('Tem convite?(1 = sim. 0 = nâo)')
if(id >= 18 && (con == 1)){
    alert('Entrada permitida')
}
else{
    alert('Acesso negado')
}
// EX3
const val = prompt('Valor da compra')
const cup = prompt('Tem cupon? (sim = 1. não = 0)')
if(val >= 200 && (cup == 1) ){
    alert('Desconto aprovado')
}
else{
    alert('Desconto negado')
}
// EX4
const adm = prompt('Nome de usuario')
const s = prompt('Senha do usuario')
if(adm == 'admin' && (s == '1234')){
    alert('Acesso aprovado')
}
else{
    alert('Acesso negado. Senh ou usuario errado')
}
// EX5
const idade = prompt('Digite sua idade')
const r = prompt('Informe sua renda mensal')
if(idade >= 60 || (r <= 1500)){
    alert('Benefício aprovado')
}
else{
    alert('Benefício negado')
}