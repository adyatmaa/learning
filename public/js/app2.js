// document.addEventListener("DOMContentLoaded", function () {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.remove('none');
//                 entry.target.classList.add('show');
//             }
//         });
//     });

//     document.querySelectorAll('.none').forEach(section => {
//         observer.observe(section);
//     });
// });

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
