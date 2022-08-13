/* Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱
A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.
La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, 
se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.
Si no se encuentra, se devuelve null.
Veamos unos ejemplos:
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
El resultado tiene que ser un array con dos números.
Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔? */

function sumPairs(numbers, result) {
  while (numbers.length !== 0) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[0] + numbers[j] === result) {
        return [numbers[0], numbers[j]];
      }
    }
    numbers.shift();
  }

  return null;
}

const testCases = [
  { numbers: [3, 5, 7, 2], result: 10 },
  { numbers: [-3, -2, 7, -5], result: 10 },
  { numbers: [2, 2, 3, 1], result: 4 },
  { numbers: [6, 7, 1, 2], result: 8 },
  { numbers: [0, 2, 2, 3, -1, 1, 5], result: 6 },
];

testCases.forEach((el) => {
  const result = sumPairs(el.numbers, el.result);
  console.log(result);
});
