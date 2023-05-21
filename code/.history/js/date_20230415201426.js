const itemTacket = document.querySelectorAll('.item-tacket');

itemTacket.forEach((item,index) => {
    item.addEventListener("click" ,function(event){
        item.target.classList.add('active')
    })
}) 
alert('fewfwe')
  