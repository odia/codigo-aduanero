function puedeGravar(autoridad, impuesto) {

  // 2010 - Creación Comisión Bicameral - 99.3 de CN1994
  // Sí: 16 años después
  if (autoridad.esPoderEjecutivo() && impuesto.esPorDNU()) {

    // Diciembre 2018 - Presupuesto 2019
    if (cumpleCon755(autoridad, impuesto) &&
        // 2016 - Fallo Camaronera Patagónica
        cumpleConCamaronera(autoridad, impuesto) &&
        esNuevo(impuesto)) {

      return comisionBicameral.autoriza(impuesto);
    }
  }

  // CN 1853 - Art. 75
  return autoridad.esPoderLegislativo();
}

function cumpleConCamaronera(autoridad, impuesto) {
  return impuesto.tieneLimites() && autoridad.tienePautas(impuesto);
}

function esNuevo(impuesto) {
  return !impuesto.objeto.existeGravamen();
}

function cumpleCon755(autoridad, impuesto) {
  // Código Aduanero 1981 - Art. 755 (Decreto Ley)
  if (autoridad.esPoderEjecutivo() && impuesto.esAduanero()) {
    return maximizaValorAgregado(impuesto) || faltaGuita();
  }

  return false;
}

function maximizaValorAgregado(impuesto) {
  // un montón de condiciones oscuras
}

function faltaGuita() {
  // 1984 - Vuelta de la Democracia
  return poderLegislativo.hayEmergenciaEconomica();
}
