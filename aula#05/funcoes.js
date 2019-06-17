//funções simples
function exibeMsg(msg) {
    console.log(msg);
}
//call fn
exibeMsg('Hello Word');
var rec = 'TypeScript';
exibeMsg("Uma outra mensagem da fun\u00E7\u00E3o seu " + rec);
//funções com paremetros(argumentos) opcionais
//funções com valor pafrão(default)===> os argumentos opcionais tem que ser delcarados ao funal dos argumentos obrigatoriamente.
function contador(inc) {
    if (inc === void 0) { inc = 1; }
    var soma = 10;
    soma += inc;
    //console.log(inc)
    console.log(soma);
}
/*contador();
contador(5);
contador(10);*/
function msgCompleta(para1, para2, para3) {
    if (para2 === void 0) { para2 = 1; }
    var p3;
    p3 = para3 || "Senac";
    console.log(para1 + " \u00E9 f\u00E1cil e eu j\u00E1 fiz " + para2 + " fun\u00E7\u00F5es nessa baga\u00E7a!!!! " + p3);
}
//msgCompleta(rec,1);
//arrow function com expressões ternárias
var parOuImpar;
parOuImpar = function (valor) {
    return (valor % 2 == 0) ? "Par" : "Impar";
};
console.log(parOuImpar(3));
