function puedeGravar(autoridad, impuesto) {

  // 2010 - Creación Comisión Bicameral - 99.3 de CN1994
  // Sí: 16 años después
  if (autoridad.esPoderEjecutivo() && impuesto.esPorDNU()) {

    if (cumpleCon755(autoridad, impuesto)) {
      return comisionBicameral.autoriza(impuesto);
    }
  }

  // CN 1853 - Art. 75
  return autoridad.esPoderLegislativo();
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
