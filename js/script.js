document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        console.log("hi!")
        console.log(document.querySelector('.header').classList)
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
//
// document.addEventListener("DOMContentLoaded", () => {
//     const features = document.querySelectorAll(".feature-item");
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("fade-in");
//             }
//         });
//     }, { threshold: 0.5 });
//
//     features.forEach(item => observer.observe(item));
// });
