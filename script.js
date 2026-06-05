// EX1
const semana = +prompt('Digite um número de 1 à 7')

switch (semana) {
    case 1:
        alert('Domingo');
        break;
    case 2:
        alert('Segunda-feira');
        break;
    case 3:
        alert('Terça-feira');
        break;
    case 4:
        alert('Quarta-feira');
        break;
    case 5:
        alert('Quinta-feira');
        break;
    case 6:
        alert('Sexta-feira');
        break;
    case 7:
        alert('Sábado');
        break;

    default:
        alert('ERRO, número não experado')
}
// EX2
const pedido = +prompt('Insira o código do produto(1 até 5)')
switch (pedido) {
    case 1:
        alert('Hambúrguer');
        break;
    case 2:
        alert('Batata Frita');
        break;
    case 3:
        alert('Refrigeranta');
        break;
    case 4:
        alert('Milk Shake');
        break;
    case 5:
        alert('Sorvete');
        break;
    default:
        alert('ERRO, número não encontrado')
}
// EX3
const n_1 = +prompt('Digite o primeiro número')
const n_2 = +prompt('Digite o segundo número')
const ope = prompt('Escolaha a operaçâo desejada(+ - / ou *)')
switch (ope) {
    case '+':
        alert(n_1 + n_2);
        break;
    case '-':
        alert(n_1 - n_2);
        break;
    case '/':
        alert(n_1 / n_2);
        break;
    case '*':
        alert(n_1 * n_2)
    default:
        alert('ERROR')
}
// EX4
const tur = prompt('Selecione (M; T; ou N) para ver o turno')
switch (tur) {
    case 'M':
        alert('Manhã');
        break;
    case 'T':
        alert('Tarde');
        break;
    case 'N':
        alert('Noite');
        break;
    default:
        alert('Erro encontrado')
}
// EX5
const mes = +prompt('Selecione um número de 1 à 12')
switch (mes) {
    case 1:
        alert('Jaeiro');
        break;
    case 2:
        alert('Fevereiero');
        break;
    case 3:
        alert('março');
        break;
    case 4:
        alert('Abril');
        break;
    case 5:
        alert('Maio');
        break;
    case 6:
        alert('Junho');
        break;
    case 7:
        alert('Julho');
        break;
    case 8:
        alert('Agosto')
        break;
    case 9:
        alert('Setembro');
        break;
    case 10:
        aleert('Outubro');
        break;
    case 11:
        alert('Novembro');
        break;
    case 12:
        alert('Dezembro');
        break;
    default:
        alert('Erro de digitação')
}