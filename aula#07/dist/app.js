"use strict";
exports.__esModule = true;
var batman_1 = require("./batman");
var homiMorcego = new batman_1.Batman();
homiMorcego.setCodenome("Batman");
homiMorcego.setIdentidadesecreta("Bruce Wayne");
/*console.log(`O codenome do heroi é:
            ${homiMorcego.getCodenome()}
e a sua identidade secreta é:
            ${homiMorcego.getIdentidadesecreta()}.`)*/
homiMorcego.setPericia("Dinheiro");
homiMorcego.setPoder(5);
console.log("O " + homiMorcego.getCodenome() + " est\u00E1 enfrentando o " + homiMorcego.getRivalVez() + ". \nSeu super poder \u00E9 " + homiMorcego.getSuperPoder() + "\ne seu poder \u00E9 de " + homiMorcego.getPoder() + " e " + homiMorcego.getPericia() + ".");
//console.log(`O arquirival do Batman é o ${homiMorcego.getArqueRival()}`);
//console.log(homiMorcego.getPericia());
