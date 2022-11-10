const cumple = new Date(1991,9,24)
const yearC = cumple.getFullYear()
const hoy = new Date().getFullYear();
const year =  hoy-yearC

new TypeIt(".multipleStrings", {
    strings: ["Hola,bienvenido", `Me llamao Javier díaz rayo, tengo ${year} años y soy programador y diseñador gráfico`],
    speed: 50,
    waitUntilVisible: false,
  }).go();

  

  
  