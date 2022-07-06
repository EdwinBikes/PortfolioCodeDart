function descripcionPersona(p) {
  console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}
let persona = {
  nombre: 'Edwin',
  edad: 29,
  estatura: 170
}
descripcionPersona(persona);
