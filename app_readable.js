// -----------------Create a scroll navbar active changer --------------------
const navLinkEls = document.querySelectorAll('.nav__link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop - 200) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });

});

// -----------------Create Auto navbar scrolling-----------------
const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classlis.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    // -----------------Create a sticky navbar ---------------------
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 100)
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')


};
// -----------------Create a toggle changer --------------------
let menubar = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
menubar.onclick = () => {
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



// ----------------- Constant changing text --------------------
var typed = new Typed('.textline', {
    strings: ['Web Developer.', 'Python Developer.', 'MERN Stack Developer.', 'Professional Footballer.'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// -----------------------Contact Form-------------------------
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hegdeishan10@gmail.com",
        Password: "password",
        To: 'hegdeishan10@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact form enquiry",
        Body: "Full Name: " + document.getElementById("name").value
            + "<br> Email Address: " + document.getElementById("email").value
            + "<br> Contact No.: " + document.getElementById("phone").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully ")
    );
}

//Reset scroll top

history.scrollRestoration = "manual";

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});
