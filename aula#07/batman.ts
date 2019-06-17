import {Hero, Habilidades} from "./hero-base";

class Batman extends Hero implements Habilidades{
    superPoder?: string;
    pericia?: string;
    poder: number;
    rivalVez?: string;
    
    
    constructor(){
        super();
    }
    //Gets
    getRivalVez():string{
        if(this.rivalVez == null){
            return "Coringa";
        }else{
            return this.rivalVez
        }
    }
    getFraqueza(): string {
        return "coringa";
    }
    getArqueRival():string{
        return 'Coringa';
    }
    getPericia():string{
        return `As pericias do ${super.getCodenome()} é: ${this.pericia}` 
    }
    getPoder():number{
        if(this.poder == null){
            return 0;
        }else{
            return this.poder;
        }
    }
    getSuperPoder():string{
        if(this.superPoder == null){
            return "não tem super poder";
        }else{
            return this.superPoder;
        }
    }
    //Sets
    setPericia(pericia:string){
        this.pericia = pericia;
    }
    setSuperPoder(superPoder:string){
        this.superPoder = superPoder;
    }
    setRivalVez(rival:string){
        this.rivalVez = rival;
    }
    setPoder(poder:number){
        this.poder = poder;
    }
}

export { Batman }