/*¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. 
Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:
__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol. */

function createXmasTree(height) {
  let tree = "";
  const space = 2 * (height - 1) + 1;

  for (let i = 0; i < height; i++) {
    const starsQty = 2 * i + 1;
    const filling = "_".repeat((space - starsQty) / 2);
    tree = `${tree}${filling}${"*".repeat(starsQty)}${filling}\n`;
  }
  const filling = "_".repeat((space - 1) / 2);
  tree = `${tree}${filling}#${filling}\n`;
  tree = `${tree}${filling}#${filling}`;

  return tree;
}

const tree = createXmasTree(3);
