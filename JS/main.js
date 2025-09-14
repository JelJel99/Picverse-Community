// NAV BAR
let navBarLink = document.querySelectorAll(".nav-bar a");
let bodyId = document.querySelector("body").id;

for(let link of navBarLink){
    if(link.dataset.active == bodyId){
        link.classList.add("active")
    }
}

function toggleMenu() {
    const nav = document.querySelector('.nav-bar');
    nav.classList.toggle('show');
}