const cumple = new Date(1991,9,24)
const yearC = cumple.getFullYear()
const hoy = new Date().getFullYear();
const year =  hoy-yearC

new TypeIt(".multipleStrings", {
    strings: ["Hola,bienvenido", `Me llamo Javier díaz rayo, tengo ${year} años y soy programador y diseñador gráfico.`,
            `Estudié un grado formativo superior de Desarrollo  de aplicaciones multiplataforma en I.E.S Islas Filiponas de madrid.`,
          'Actualmente me estoy formador en un bootcamp,estoy estudiando front-end y me gustaria tambien formarme en la parte back-end.'],
    speed: 50,
    waitUntilVisible: false,
  }).go();


  
  

  
  