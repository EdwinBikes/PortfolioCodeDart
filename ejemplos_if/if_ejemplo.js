  let nota = 64;
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
  console.log("la nota $nota es igual al resultado $notaLetra");