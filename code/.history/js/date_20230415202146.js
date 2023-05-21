const itemTacket = document.querySelectorAll('.item-tacket');

itemTacket.forEach((item) => {
    item.addEventListener("click" ,function(event){
        itemTacket.forEach((el) => el.classList.remove('active2'));
        event.target.classList.add('active')
    })
}) 

  