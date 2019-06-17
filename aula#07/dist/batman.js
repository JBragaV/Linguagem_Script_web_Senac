"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var hero_base_1 = require("./hero-base");
var Batman = /** @class */ (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super.call(this) || this;
    }
    //Gets
    Batman.prototype.getRivalVez = function () {
        if (this.rivalVez == null) {
            return "Coringa";
        }
        else {
            return this.rivalVez;
        }
    };
    Batman.prototype.getFraqueza = function () {
        return "coringa";
    };
    Batman.prototype.getArqueRival = function () {
        return 'Coringa';
    };
    Batman.prototype.getPericia = function () {
        return "As pericias do " + _super.prototype.getCodenome.call(this) + " \u00E9: " + this.pericia;
    };
    Batman.prototype.getPoder = function () {
        if (this.poder == null) {
            return 0;
        }
        else {
            return this.poder;
        }
    };
    Batman.prototype.getSuperPoder = function () {
        if (this.superPoder == null) {
            return "não tem super poder";
        }
        else {
            return this.superPoder;
        }
    };
    //Sets
    Batman.prototype.setPericia = function (pericia) {
        this.pericia = pericia;
    };
    Batman.prototype.setSuperPoder = function (superPoder) {
        this.superPoder = superPoder;
    };
    Batman.prototype.setRivalVez = function (rival) {
        this.rivalVez = rival;
    };
    Batman.prototype.setPoder = function (poder) {
        this.poder = poder;
    };
    return Batman;
}(hero_base_1.Hero));
exports.Batman = Batman;
