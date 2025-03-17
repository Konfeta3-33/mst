document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuLinks = document.querySelectorAll(".menu a")

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }

    menuLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    function toggleMenu() {
        burger.classList.toggle("cross");
        menu.classList.toggle("open");
        overlay.classList.toggle("show");

    }

    burger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu)

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("open");
            burger.classList.remove("cross");
            overlay.classList.remove("show")
        });
    });
});
