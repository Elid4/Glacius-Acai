const navbar = document.getElementById("navbar-principal");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add("nav-hidden");
    } else {
        navbar.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop;
});