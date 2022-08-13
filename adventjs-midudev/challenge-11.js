/* Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.
Mi cine favorito tiene dos posibilidades:
 • Entrada de un sólo uso: Cuesta 12$ por cada película.
 • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. 
    ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:
// Entrada normal: 12$ * 3 = 36$

// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.
shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜*/

function shouldBuyFidelity(times) {
  const TICKET_PER_UNIT = 12;
  const FIDELITY_CARD = 250;
  const DISC_AMOUNT = 0.75;

  const ticketsCost = TICKET_PER_UNIT * times;
  let fidelityCost = FIDELITY_CARD;

  for (let i = 1; i < times + 1; i++) {
    fidelityCost += TICKET_PER_UNIT * Math.pow(DISC_AMOUNT, i);
  }

  return ticketsCost >= fidelityCost;
}

[1, 100].forEach((times) => console.log(shouldBuyFidelity(times)));
