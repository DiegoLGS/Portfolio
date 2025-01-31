const controlarMenuHamburguesa = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        nav.classList.remove('hidden');
    });

    addEventListener("resize", () => {
        if(window.innerWidth <= 768) {
            nav.classList.add('hidden');
        }
    });
};