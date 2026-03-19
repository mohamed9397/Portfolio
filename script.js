
    let hour = new Date().getHours();
    
    if (hour < 12) {
        alert("Bonjour et bienvenue sur mon portfolio ");
    } else if ( hour < 18) {
        alert("Bon après-midi et bienvenue sur mon portfolio ");
    } else {
        alert("Bonsoir et bienvenue sur mon portfolio ") ;
    }
  
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (nom === '' || email === '' || message === '') {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }
    
 alert("Merci pour votre message ! Je vous recontacterai bientôt.");
    contactForm.reset();
});

let backs = document.getElementById('back-to-top');

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
        backs.classList.add("show");
    } else {
        backs.classList.remove("show");
    }
});

backs.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let theme = document.getElementById("theme-sombre");
const body = document.body;


const Themo = localStorage.getItem("theme");
if (Themo === "dark") {
    body.classList.add("dark-mode");
}

theme.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

document.querySelectorAll(a[href^="#"]).forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });        }
    });
});

let tog = document.getElementById("menus");
let navmenu = document.querySelector(".nav-menu");

tog.onclick = function() {
    navmenu.classList.toggle("active");
}

let observerOptions = {
    threshold: 0.1
};

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll(".section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
});
