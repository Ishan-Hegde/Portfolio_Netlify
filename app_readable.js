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

var typed = new Typed('.textline', {
    strings: ['Web Developer.', 'Python Developer.', 'MERN Stack Developer.', 'Professional Footballer.'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});
// 3D Room Graphics
const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${y * 4 + 75}deg)
        rotateZ(${-x * 12 + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);

// Contact Form
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