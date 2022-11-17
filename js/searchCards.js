function filtrar() {
    const input = document.getElementById('floatingInput').value.toLowerCase();  
    const cards = document.getElementsByClassName('publicacion')
    
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector(".card-body h5.card-title")

        if(title.innerText.toLowerCase().indexOf (input) > -1){
            cards[i].style.display= ""
        }else{
            cards[i].style.display= "none"
        }
    
  }     
}