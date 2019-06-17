// superclass---classe genérica
abstract class Hero{
    //atributos
    codenome:string;
    identidadesecreta:string;

    //construtor
    constructor() {}

    //get set
    getCodenome():string{
        return this.codenome;
    }
    setCodenome(codenome:string):void{
        this.codenome = codenome;
    }
    getIdentidadesecreta():string{
        return this.identidadesecreta;
    }
    setIdentidadesecreta(identidadesecreta:string):void{
        this.identidadesecreta = identidadesecreta;
    }
}
//interface - modelo, padrão
//Como fosse assinado um contrato, onde obriga-se a utilizar e implementar  aqueles recursos
interface Habilidades{
    superPoder?:string;
    pericia?:string;
    poder:number;
    rivalVez?:string;
    
    getFraqueza():string
}

export { Hero, Habilidades}
