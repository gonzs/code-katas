/*Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...
Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.
Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, 
va a crear una función para saber si su próximo movimiento es correcto o no ✅.
El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]
canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]
¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!*/

function canMouseEat(direction, game) {
  const getMousePosition = (place) => {
    let pos = [];
    place.some((row, i) => {
      const col = row.findIndex((e) => e === "m");
      if (col !== -1) {
        pos = [i, col];
        return;
      }
    });
    return pos;
  };

  const mousePosition = getMousePosition(game);

  return (
    (direction === "up" &&
      game[mousePosition[0] - 1]?.[mousePosition[1]] === "*") ||
    (direction === "down" &&
      game[mousePosition[0] + 1]?.[mousePosition[1]] === "*") ||
    (direction === "right" &&
      game[mousePosition[0]]?.[mousePosition[1] + 1] === "*") ||
    (direction === "left" &&
      game[mousePosition[0]]?.[mousePosition[1] - 1] === "*")
  );
}

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

const result1 = canMouseEat("up", room2);
const result2 = canMouseEat("down", room2);
const result3 = canMouseEat("right", room2);
