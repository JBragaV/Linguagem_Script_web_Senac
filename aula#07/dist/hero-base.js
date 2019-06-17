"use strict";
exports.__esModule = true;
// superclass---classe genérica
var Hero = /** @class */ (function () {
    //construtor
    function Hero() {
    }
    //get set
    Hero.prototype.getCodenome = function () {
        return this.codenome;
    };
    Hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    Hero.prototype.getIdentidadesecreta = function () {
        return this.identidadesecreta;
    };
    Hero.prototype.setIdentidadesecreta = function (identidadesecreta) {
        this.identidadesecreta = identidadesecreta;
    };
    return Hero;
}());
exports.Hero = Hero;
