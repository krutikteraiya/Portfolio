//toggle icon navbar
// let menuIcon = documentSelector('#menu-icon');
// let navbar = document.querySelector('navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
// }

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height ) {
            //Active Navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' +id+']').classList.add('active');
            });
        }

    });

    // sticky Header
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}