// // // alert('spodkasçdjaçd');
// // // variável que varea
// // // let
// // // constante NÂO varea
// // // const
// // // variável que varea
// // // var
// // // let nome = 'Guilherme';
// // // let vorname = ' Strhaller ';
// // // const age = 6767676767676;
// // // alert(nome + vorname + age);

// // // let num1 = +prompt('Digite um número: ');
// // // let num2 = +prompt('Digite outro número: ');
// // // if (num2 != 0) {
// // //   alert(num1 + num2);
// // //   alert(num1 - num2);
// // //   alert(num1 * num2);
// // //   alert(num1 / num2);
// // // }
// // // else{
// // //     alert('BUUUUUUUUUUUUUUUUUUUUUUUUUUUURRO!!!!!!!!!!!!!!')
// // // }

// // // const nome = prompt('Name und Vorname');
// // // alert('Hallo, '+nome+'!');
// // // if(nome == 'Zé'){
// // //     alert('Du bist Zé');
// // // }
// // // console.log('HALLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')



// // // EX1 e EX5
// // let age = prompt('Digite sua idade');

// // if (age >= 18) {
// //   alert(' Você é maior de idade');
// //   alert('Você pode votar')
// // } else {
// //   alert('Você é menor de idade');
// //   alert('Você não pode votar')
// // }
// // // EX2
// // let grade = prompt('Digite sua nota escolar');
// // if(grade < 7){
// //     alert('Você está reprovado')
// // }
// // if(grade >=7 && grade <= 10){
// //     alert('Você está aprovado')
// // }
// // else{
// //     alert('Você está reprovado')
// // }
// // // EX3
// // let vm = prompt('Digite a velocidade média do veículo (não é necessário a unidade)');
// // if (vm >= 80) {
// //   alert('Você foi multado');
// // }
// // else{
// //     alert('Você não foi multado')
// // }
// // // EX4
// // let num = prompt('Digite um número')
// // if(num <0 ){
// //     alert('Esse é um número negativo')
// // }
// // else{
// //     alert('Esse é um número  positivo')
// // }
// // // EX6
// // let produto = prompt('Valor da compra')
// // if(produto >= 100){
// //     alert('Você ganhou desconto')
// // }
// // else{
// //     alert('Não ganhou desconto')
// // }
// // // EX7
// // let temp = prompt('Qual é a temperatura atual?')
// // if(temp <= 0){
// //     alert('Estupidamente frio')
// // }
// // if(temp > 0 && temp <= 10){
// //     alert('Bem frio')
// // }
// // if(temp > 10 && temp <= 15){
// //     alert('Está frio ainda')
// // }
// // if(temp > 15 && temp <= 25){
// //     alert('Dá para aguentar')
// // }
// // if(temp > 25 && temp <= 30){
// //     alert('Está bom heim')
// // }
// // if(temp > 30){
// //     alert('Agora está muito quente')
// // }
// // // EX8
// // let code = prompt('Digite a senha correta')
// // if(code = 1234){
// //     alert('Passagem liberada')
// // }
// // else{
// //     alert('Passagem negada')
// // }
// // // EX9
// // let meta = prompt('Valor vendido pelo funcionário')
// // if(meta >= 5000){
// //     alert('Meta alcançada')
// // }
// // else{
// //     alert('Venda mais')
// // }

// // // EX1
// // const nota = prompt('Digite sua nota')
// // const freq = prompt('Digite a sua frequência')
// // if(nota >= 7  &&(freq >= 75)){
// //     alert('Aluno aprovado')
// // }
// // else{
// //     alert('Aluno reprovado')
// // }
// // // EX2
// // const id = prompt('Digite sua idade')
// // const con = prompt('Tem convite?(1 = sim. 0 = nâo)')
// // if(id >= 18 && (con == 1)){
// //     alert('Entrada permitida')
// // }
// // else{
// //     alert('Acesso negado')
// // }
// // // EX3
// // const val = prompt('Valor da compra')
// // const cup = prompt('Tem cupon? (sim = 1. não = 0)')
// // if(val >= 200 && (cup == 1) ){
// //     alert('Desconto aprovado')
// // }
// // else{
// //     alert('Desconto negado')
// // }
// // // EX4
// // const adm = prompt('Nome de usuario')
// // const s = prompt('Senha do usuario')
// // if(adm == 'admin' && (s == '1234')){
// //     alert('Acesso aprovado')
// // }
// // else{
// //     alert('Acesso negado. Senh ou usuario errado')
// // }
// // // EX5
// // const idade = prompt('Digite sua idade')
// // const r = prompt('Informe sua renda mensal')
// // if(idade >= 60 || (r <= 1500)){
// //     alert('Benefício aprovado')
// // }
// // else{
// //     alert('Benefício negado')
// // }
// // EX1
// const nota = prompt('Digite sua nota de 0 a 10')
// if(nota >= 9 && (nota <= 10)){
//     alert('EXCELENTE!!')
// }
// else if(nota >= 7 && (nota < 9)){
//     alert('Bom')
// }
// else if(nota >= 5 && (nota < 7)){
//     alert('RECUPERAÇÃO!!!!!!!!!!!!')
// }
// else{
//     alert('REPROVADOOOOOOOOOOOOOOOOO')
// }
// // EX2
// const id = prompt('Informe sua idade')
// if(id >= 0 && (id <= 12)){
//     alert('Criança')
// }
// else if(id >= 14 && (id <= 17)){
//     alert('Adolescente')
// }
// else if(id >= 18 && (id <= 59)){
//     alert('Adulto')
// }
// else if(id >= 60 && (id <= 120)){
//     alert('VELHOOOOOOOO')
// }
// // EX3
// const n = prompt ('Digite um número inteiro')
// if(n % 2 == 0 ){
//     alert('Par')
// }
// else{
//     alert('Ímpar')
// }
// // EX4
// const n1 = 10
// const n2 = '10'
// if(n1 == n2){
//     alert('Eles são iguais, pois os tipos são convertidos para igualar.')
// }
// else{
//     alert('liaifhpsdf')
// }
// // EX5
// const n3 = 10
// const n4 = '10'
// if(n3 === n4){
//     alert('Eles são iguais')
// }
// else{
//     alert('Não são iguais, pois Os tipos são mantidos e avaliados como diferentes. ')
// }
// // EX6
// const adm = prompt('Nome de usuário')
// const code = prompt('Informe sua senha')
// if(adm == 'efras' && code == 0209){
//     alert('Login correto')
// }
// else if(adm != 'efras' && code != 0209){
//     alert('Senha e usuário não encontrados')
// }
// else{
//     alert('Algo de errado não está certo')
// }
// // EX7
// const pro = prompt('Valor do produto')
// if(pro >= 0 && (pro <= 500)){
//     alert('Básico')
// }
// else if(pro >= 501 && (pro <= 999)){
//     alert('Intermediário')
// }
// else if(pro > 999){
//     alert('PREMIUM')
// }
// else{
//     alert('TRASHHHHHHHHHHHH')
// }
// // EX8
// const nA = prompt('Digite um número')
// const nB = prompt('Digite outro número')
// if(nA == nB){
//     alert('Iguais')
// }
// else if (nA > nB){
//     alert('Primeiro é maior')
// }
// else if(nA < nB){
//     alert('Segundo é maior')
// }
// // EX9
// const val = prompt('Valor da compra')
// if(val > 1000){
//     alert('Desconto de 20%')
// }
// else if (val <= 1000 && val > 500){
//     alert('Deconto de 10%')
// }
// else{
//     alert('Sem desconto, pague tudo')
// }