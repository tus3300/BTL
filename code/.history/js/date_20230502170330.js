const itemTacket = document.querySelectorAll('.item-tacket');

itemTacket.forEach((item) => {
    item.addEventListener("click" ,function(event){
        itemTacket.forEach((el) => el.classList.remove('active'));
        event.target.classList.add('active')
    })
}) 

  
const hourticket = document.querySelectorAll('.hour-ticket');

ckehourtit.forEach((item) => {
    item.addEventListener("click" ,function(event){
        hourticket.forEach((el) => el.classList.remove('active'));
        event.target.classList.add('active')
    })
}) 

  