//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
//en este caso encuentra la edad mayor a 18
const edad = [15, 16, 17, 18, 19, 20];

edad.findIndex(verEdad);

function verEdad(edad) {
  return edad > 18;
}