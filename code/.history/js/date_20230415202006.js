const itemTacket = document.querySelectorAll('.item-tacket');

itemTacket.forEach((item,index) => {
    item.addEventListener("click" ,function(event){
        i.forEach((el) => el.classList.remove('active2'));
        event.target.classList.add('active')
    })
}) 

  