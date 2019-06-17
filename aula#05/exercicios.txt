//exe#01

let soma = 190;
soma += 45;
console.log(`O resultado é ${soma}.`);

//exe#02

/*let aula = "TypeScript";
console.log(`Aula de ${aula}.`);
*/

//exe#03

function voto(idade:number):void{
    if( idade < 16){
        console.log(`Voce tem ${idade} anos. Voto proibido!!!!`);
    }else if(idade < 18 || idade > 70){
        console.log(`Voce tem ${idade} anos. Voto opcional!!!`);
    }else{
        console.log(`Voce tem ${idade} anos. Voto obrigatório!!!`)
    }
}
/*voto(15);
voto(16);
voto(18);
voto(71);*/

//exe#04

function niver(nome:String, mes:number, ano:number){
    let idade: number
    let mesAtual = 6;
    if(mesAtual < mes){
        console.log("vim aqui");
        idade = (2019 - ano)-1;
    }else{
        idade = (2019 - ano);
    }
    console.log(`${nome} tem ${idade} anos de idade. Mês de nascimento ${mes} ano ${ano}.`)
}
//niver("Jocimar", 11, 1982);

//exe#05

function operacao(a:number, b, c:number = 0){
    let resultado = a + b + c;
    if(c == 0){
        console.log(`O resultado da soma de ${a} + ${b} = ${resultado}`);
    }else{
        console.log(`O resultado da soma de ${a} + ${b} + ${c} = ${resultado}`);
    }
}

//operacao(1,2, 3);