//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
//en este caso nos devolvera la edad menor a 18
const edad = [15, 16, 17, 18, 19, 20];

function verEdad(edad) {
  return edad < 18;
}

function Funcion() {
  document.getElementById("demo").innerHTML = edad.find(verEdad);
}