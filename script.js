document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('.page1, .page2, .page3');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                if (section.classList.contains('page1')) {
                    header.style.backgroundColor =  'rgb(220, 50, 118)';
                } else if (section.classList.contains('page2')) {
                    header.style.backgroundColor = 'rgb(9, 14, 105)';
                } else if (section.classList.contains('page3')) {
                    header.style.backgroundColor = 'rgb(81, 52, 14)';
                }
            }
        });
    });
});

function toggleNavbar() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
}

let cherry1 = document.getElementById('cherry1');
let pinkw1 = document.getElementById('pinkw1');
let pinkw2 = document.getElementById('pinkw2');

 window.addEventListener('scroll', () => {
    let value = window.scrollY;

    cherry1.style.right = value * -0.5 + 'px';
    pinkw1.style.right = value * -3 + 'px';
    pinkw2.style.left = value * -3 + 'px';
 });