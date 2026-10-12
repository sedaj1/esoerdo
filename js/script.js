let navLinks = document.querySelectorAll(".navbar .nav-link");
let menu = document.querySelector("#mainMenu");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }
        navLinks[i].classList.add("active");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
}