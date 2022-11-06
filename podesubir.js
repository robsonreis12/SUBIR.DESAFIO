////EXERCÍCIO 1 ////

function podeSubir(altura, comAcompanhante){

if (altura > 1.4 && altura < 2.0) {
    return true;
} else if (altura < 1.4 && comAcompanhante >= 1.0 ) {
    return true;
} else { 
    return false;
}
}
console.log (podeSubir(1.4, 1.00))

////////////////////////////////////////////

//// EXERCÍCIO 2 ////

function podeSubir2(altura){

if (altura > 1.4 && altura < 2.00) {
    return 'Acesso autorizado';
} else if (altura < 1.4 && altura >= 1.0 ) {
    return 'Acesso autorizado com acompanhante';
} else { 
    return 'Acesso negado';
}
}
console.log (podeSubir2(1.3))

