//exe#01
var soma = 190;
soma += 45;
console.log("O resultado \u00E9 " + soma + ".");
//exe#02
/*let aula = "TypeScript";
console.log(`Aula de ${aula}.`);
*/
//exe#03
function voto(idade) {
    if (idade < 16) {
        console.log("Voce tem " + idade + " anos. Voto proibido!!!!");
    }
    else if (idade < 18 || idade > 70) {
        console.log("Voce tem " + idade + " anos. Voto opcional!!!");
    }
    else {
        console.log("Voce tem " + idade + " anos. Voto obrigat\u00F3rio!!!");
    }
}
/*voto(15);
voto(16);
voto(18);
voto(71);*/
//exe#04
function niver(nome, mes, ano) {
    var idade;
    var mesAtual = 6;
    if (mesAtual < mes) {
        console.log("vim aqui");
        idade = (2019 - ano) - 1;
    }
    else {
        idade = (2019 - ano);
    }
    console.log(nome + " tem " + idade + " anos de idade. M\u00EAs de nascimento " + mes + " ano " + ano + ".");
}
//niver("Jocimar", 11, 1982);
//exe#05
function operacao(a, b, c) {
    if (c === void 0) { c = 0; }
    var resultado = a + b + c;
    if (c == 0) {
        console.log("O resultado da soma de " + a + " + " + b + " = " + resultado);
    }
    else {
        console.log("O resultado da soma de " + a + " + " + b + " + " + c + " = " + resultado);
    }
}
//operacao(1,2, 3);
