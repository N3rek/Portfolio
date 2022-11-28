submit = document.getElementById('submit');
coucou = document.getElementById('coucou');
click_pas = document.getElementById('click_pas');


document.body.addEventListener('click', function(event){
    console.log(event.clientY);
    console.log(event.clientX);
})

click_pas.addEventListener('mouseover', function(){
    click_pas.style.left = 1 + Math.floor(600 * Math.random()) + "px";
    click_pas.style.top = 1 + Math.floor(600* Math.random()) + "px";
})