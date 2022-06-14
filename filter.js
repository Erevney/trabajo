//filter() en JavaScript. El método filter() toma una función callback y llama a esa función para cada elemento sobre el que itera dentro del arreglo de destino.
//en este caso de uso se filtra las personas por edades y muestra a los adultos
let gente = [
    {nombre: "Johnatan", edad: 20},
    {nombre: "Joseph", edad: 18},
    {nombre: "Jotaro", edad: 17},
    {nombre: "Josuke", edad: 16},
    {nombre: "Giorno", edad: 15},
    {nombre: "Jolyne", edad: 20},
    {nombre: "Johnny", edad: 19},
    {nombre: "Josuke", edad: 19},
]

let adultos = gente.filter(persona => persona.edad >= 18)

console.log(adultos);
