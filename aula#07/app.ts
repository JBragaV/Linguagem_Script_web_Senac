import { Batman } from "./batman";

let homiMorcego = new Batman();
homiMorcego.setCodenome("Batman");
homiMorcego.setIdentidadesecreta("Bruce Wayne");
/*console.log(`O codenome do heroi é:
            ${homiMorcego.getCodenome()}
e a sua identidade secreta é:
            ${homiMorcego.getIdentidadesecreta()}.`)*/

homiMorcego.setPericia("Dinheiro");
homiMorcego.setPoder(5);
console.log(`O ${homiMorcego.getCodenome()} está enfrentando o ${homiMorcego.getRivalVez()}. 
Seu super poder é ${homiMorcego.getSuperPoder()}
e seu poder é de ${homiMorcego.getPoder()} e ${homiMorcego.getPericia()}.` )
//console.log(`O arquirival do Batman é o ${homiMorcego.getArqueRival()}`);
//console.log(homiMorcego.getPericia());