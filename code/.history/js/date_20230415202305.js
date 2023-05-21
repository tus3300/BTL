const itemTacket = document.querySelectorAll('.li-tacket');

itemTacket.forEach((item) => {
    item.addEventListener("click" ,function(event){
        itemTacket.forEach((el) => el.classList.remove('active'));
        event.target.classList.add('active')
    })
}) 

  