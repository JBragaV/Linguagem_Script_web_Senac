//funções simples
function exibeMsg(msg:string):void {
    console.log(msg)
}

//call fn
exibeMsg('Hello Word');
let rec = 'TypeScript';
exibeMsg(`Uma outra mensagem da função seu ${rec}`)

//funções com paremetros(argumentos) opcionais
//funções com valor pafrão(default)===> os argumentos opcionais tem que ser delcarados ao funal dos argumentos obrigatoriamente.
function contador(inc:number = 1):void{
    let soma = 10;
    soma += inc;
    //console.log(inc)
    console.log(soma);
}

/*contador();
contador(5);
contador(10);*/

function msgCompleta(para1:string, para2:number = 1, para3?:string){
    let p3: string
    p3 = para3 || "Senac";
    console.log(`${para1} é fácil e eu já fiz ${para2} funções nessa bagaça!!!! ${p3}`)
}

//msgCompleta(rec,1);
//arrow function com expressões ternárias
let parOuImpar:(valor:number) => string;
parOuImpar = (valor) =>
    (valor % 2 == 0)?"Par" : "Impar";
console.log(parOuImpar(3));