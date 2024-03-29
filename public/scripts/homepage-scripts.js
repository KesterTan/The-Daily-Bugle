const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle the navlinks out
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        // Use index to allow for delay between each link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle(`toggle`);
    });
}

navSlide();
