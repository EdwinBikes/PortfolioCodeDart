void main() {
  int tablas = 10;

  imprimirTablas(multiplo, cantidad) {
    for (int i = 1; i <= cantidad; i++) {
      int resultado = multiplo * i;

      print("$multiplo x  $i  =  $resultado");
    }
  }

  imprimirTablas(1, tablas);
  imprimirTablas(2, tablas);
  imprimirTablas(3, tablas);
}
