    const cump = new Date(1991,9,24)
    const yC = cump.getFullYear()
    const fecha = new Date().getFullYear();
    const yearE =  fecha-yC

    const ed = document.getElementById("edad")
    ed.innerText= yearE
