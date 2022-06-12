//Map es una función que te permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados.
//en este caso se transforman la lista de los nombres a una lista de string

const Jojos = [
    { nombre: "Johnatan", apellido: "Joestar"},
    { nombre: "Joseph",   apellido: "Joestar"},
    { nombre: "Jotaro",   apellido: "Kujo"},
    { nombre: "Josuke",   apellido: "Higashikata"},
    { nombre: "Giorno", apellido: "Giovanna"},
    { nombre: "Jolyne",   apellido: "Kujo"},
    { nombre: "Johnny",   apellido: "Joestar"},
    { nombre: "Josuke",   apellido: "Higashikata"}
    ];
    
  function generarNombre({ nombre, apellidos }) {
    return `${nombre} ${apellidos}`;
    }
  
  const nombres = Jojos.map(generarNombre);
  
  console.log(nombres); //["Johnatan Joestar", "Joseph Joestar", "Jotaro Kujo", "Josuke Higashikata", "Giorno Giovanna", "Jolyne Kujo", "Johnny Joestar"; "Josuke Higashikata"]