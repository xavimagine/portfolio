const cumple = new Date(1991,9,24)
const yearC = cumple.getFullYear()
const hoy = new Date().getFullYear();
const year =  hoy-yearC

new TypeIt(".multipleStrings", {
    strings: ["Hello, welcome", `My name is Javier Díaz Rayo, I am ${year} old  and I am a programmer and graphic designer`,
        `I studied a higher training degree in Development of multiplatform applications at I.E.S. Islas Filiponas in Madrid`,
        `I'm currently training in a bootcamp, I'm studying front-end and I would also like to train in the back-end part.`],
    speed: 50,
    waitUntilVisible: false,
  }).go();
