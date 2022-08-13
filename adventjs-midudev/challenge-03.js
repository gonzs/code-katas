/* El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. 
¡Y acaba con la travesura del Grinch! */

function isValid(letter) {
  let giftsQty = 0;
  let openParenthesisQty = 0;
  let index = 0;
  let charsInsideQty = 0;

  const prohibitedChars = ["[", "]", "{", "}"];
  for (const char of prohibitedChars) {
    if (letter.includes(char)) return false;
  }

  for (const char of letter.trim()) {
    if (
      (char === " " || index === letter.length - 1) &&
      openParenthesisQty === 0
    )
      giftsQty++;

    if (char !== "(" && char !== ")" && openParenthesisQty > 0)
      charsInsideQty++;

    if (char === "(") {
      openParenthesisQty++;
    }

    if (char === ")") {
      openParenthesisQty--;
      if (openParenthesisQty < 0) return false;
      else if (openParenthesisQty === 0 && charsInsideQty === 0) return false;
      else charsInsideQty = 0;
    }

    index++;
  }

  if (openParenthesisQty > 0) return false;

  return true;
}

const test1 = isValid("bici coche (balón) bici coche peluche");
const test2 = isValid("(muñeca) consola bici");
const test3 = isValid("bici coche (balón bici coche");
const test4 = isValid("peluche (bici [coche) bici coche balón");
const test5 = isValid("(peluche {) bici");
const test6 = isValid("()  bici");
