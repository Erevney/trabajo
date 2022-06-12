let gente = [
    {nombre: "Johnatan", edad: 65},
    {nombre: "Joseph", edad: 2},
    {nombre: "Jotaro", edad: 13},
    {nombre: "Josuke", edad: 3},
    {nombre: "Giovanna", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let adultos = gente.filter(persona => persona.edad >= 18)

console.log(adultos);