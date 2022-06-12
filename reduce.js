//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
//en este caso resta todos los numeros
const numeros = [13, 57, 91];

document.getElementById("demo").innerHTML = numeros.reducir(Funci);

function Funci(total, num) {
  return total - num;
}