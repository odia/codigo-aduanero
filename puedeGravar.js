function puedeGravar(autoridad, impuesto) {

  // Código Aduanero 1981 - Art. 755 (Decreto Ley)
  if (autoridad.esPoderEjecutivo() && impuesto.esAduanero()) {

    return maximizaValorAgregado(impuesto) || faltaGuita();
  }

  // CN 1853 - Art. 75
  return autoridad.esPoderLegislativo();
}

function maximizaValorAgregado(impuesto) {
  // un montón de condiciones oscuras
}

function faltaGuita() {
  // Demasiado nunca es suficiente
  return poderEjecutivo.faltaGuita();
}
