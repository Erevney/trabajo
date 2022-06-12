let gente = [
    {nombre: "Johnatan", edad: 65},
    {nombre: "Joseph", edad: 2},
    {nombre: "Jotaro", edad: 13},
    {nombre: "Josuke", edad: 3},
    {nombre: "Giorno", edad: 25},
    {nombre: "Jolyne", edad: 1},
    {nombre: "Johnny", edad: 1},
    {nombre: "Josuke", edad: 43},
]

let adultos = gente.filter(persona => persona.edad >= 18)

console.log(adultos);
