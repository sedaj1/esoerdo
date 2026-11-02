let fogadalom = document.querySelector(".fogadalom");

function init() {
    fogadalom.addEventListener("click", togglePledge);
}

function togglePledge() {
    fogadalom.classList.toggle("aktiv");
    let cim = fogadalom.querySelector("strong");
    if (fogadalom.classList.contains("aktiv")) {
        cim.innerHTML = "Köszönjük, hogy megtetted!";
    } else {
        cim.innerHTML = "Fogadalmat teszek";
    }
}

init();