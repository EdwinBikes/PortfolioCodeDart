function calcularNota(nota) {
    let notaLetra = "";
    if (nota >= 90) {
      notaLetra = "A";
    } else {
      if (nota >= 80) {
        notaLetra = "B";
      } else {
        if (nota >= 70) {
          notaLetra = "C";
        } else {
          if (nota >= 60) {
            notaLetra = "D";
          } else {
            (nota < 50);
            notaLetra = "F";
          }
        }
      }
    }
    console.log("El resultado " + nota +" la nota seria " + notaLetra);
};
  calcularNota(50);
  calcularNota(75);
  calcularNota(63);
  calcularNota(91);
  calcularNota(88);
