  let tablas = 10;
  imprimirTablas(multiplo, cantidad){
    for (let i = 1; i <= cantidad; i++) {
      let resultado = multiplo * i;
      console.log("$multiplo x  $i  =  $resultado");
    }
  }
  imprimirTablas(1, tablas);
  imprimirTablas(2, tablas);
  imprimirTablas(3, tablas);