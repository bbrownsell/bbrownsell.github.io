const navBtn = document.getElementById('nav-open'); //gets navbtn
const navBar = document.querySelector('.navbar'); //selects navbar in css
const navClose = document.querySelector('.nav-close'); //selects closebtn
const navLinks = document.querySelectorAll('.nav-link');


navBtn.addEventListener('click', function(){ 
    navBar.classList.toggle('hide');
});

navClose.addEventListener('click', function() {
    navBar.classList.toggle('hide');
});

navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        navBar.classList.toggle('hide');
    })
})


