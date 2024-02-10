


















let navbar2 = document.getElementById('navbar2')
let nav_logo = document.getElementById('nav-logo');

nav_logo.onmouseover = visibility =>{
    navbar2.style.visibility = 'visible';
}

navbar2.onmouseleave = (e)=>{
    navbar2.style.visibility = 'hidden';
}