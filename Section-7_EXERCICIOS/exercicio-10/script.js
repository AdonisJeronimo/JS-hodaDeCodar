function imprimirPar(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

imprimirPar(10);
imprimirPar(100);
