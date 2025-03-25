document.getElementById('menu-toggle').addEventListener('click', function () {
    var navbar = document.getElementById('navbar-sticky');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".none");
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".none-right");
    hiddenElements.forEach((el) => observer.observe(el));
});