"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longitudCirculo = exports.areaCirculo = exports.duplicarNumero = void 0;
function duplicarNumero(numero) {
    return numero * 2;
}
exports.duplicarNumero = duplicarNumero;
var PI = 3.1416;
function areaCirculo(radio) {
    return PI * radio * radio;
}
exports.areaCirculo = areaCirculo;
function longitudCirculo(radio) {
    return PI * radio * 2;
}
exports.longitudCirculo = longitudCirculo;
