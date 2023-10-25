var isAlienSorted = function (palabras, orden) {
  //  Mapa del diccionario alienigena
  var mapa_diccionario = new Map();
  for (let i = 0; i < orden.length; i++) {
    mapa_diccionario.set(orden[i], i);
  }

  // Función para comparar palabras
  var comparar = function (palabra1, palabra2) {
    const longitud = Math.min(palabra1.length, palabra2.length);
    for (let i = 0; i < longitud; i++) {
      if (
        mapa_diccionario.get(palabra1[i]) < mapa_diccionario.get(palabra2[i])
      ) {
        return true;
      }
      if (
        mapa_diccionario.get(palabra1[i]) > mapa_diccionario.get(palabra2[i])
      ) {
        return false;
      }
    }
    return palabra1.length <= palabra2.length;
  };

  // Revisar el orden de las palabras
  for (let i = 1; i < palabras.length; i++) {
    if (comparar(palabras[i - 1], palabras[i]) === false) {
      return false;
    }
  }
  return true;
};

/*
// Datos de prueba
var palabras = ["hello", "leetcode"];
var orden = "hlabcdefgijkmnopqrstuvwxyz";

// Llamada a la función y salida en consola
console.log(isAlienSorted(palabras, orden)); // Debería imprimir 'true'
*/
