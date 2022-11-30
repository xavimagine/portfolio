function filtrar() {
    const input = document.getElementById('floatingInput').value.toLowerCase();  
    const cards = document.getElementsByClassName('publicacion')
    
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector(".card-body h5.card-title")
        if(title.innerText.toLowerCase().indexOf (input) > -1){
          cards[i].classList.remove('filtro')
        }else{
          cards[i].classList.add('filtro')
        }
  }     
}