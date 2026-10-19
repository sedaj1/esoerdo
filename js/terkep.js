const regiok = [
    {
        nev: "Amazonas-medence",
        koordinata: "3° D, 60° Ny",
        terkep: "https://www.openstreetmap.org/export/embed.html?bbox=-75%2C-15%2C-45%2C5&layer=mapnik",
        leiras: "A világ legnagyobb összefüggő esőerdeje Dél-Amerika északi felén terül el. Az Amazonas és több ezer mellékfolyója szeli át, a terület nagy része Brazíliához tartozik.",
        mutatok: [["esőerdő területe", "~5,5 M km²"], ["érintett ország", "9"], ["ismert fafaj", "~16 000"]],
        fajok: ["jaguár", "rózsaszín folyamidelfin", "hárpia", "nyílméregbéka"]
    },
    {
        nev: "Kongó-medence",
        koordinata: "0°, 22° K",
        terkep: "https://www.openstreetmap.org/export/embed.html?bbox=12%2C-6%2C30%2C5&layer=mapnik",
        leiras: "Afrikában az Egyenlítő mentén húzódik, és az Amazonas után a második legnagyobb esőerdő. A Kongó folyó vízhozama is csak az Amazonasé mögött marad el.",
        mutatok: [["esőerdő területe", "~2 M km²"], ["érintett ország", "6"], ["növényfaj", "~10 000"]],
        fajok: ["bonobo", "erdei elefánt", "okapi", "nyugati gorilla"]
    },
    {
        nev: "Borneó és Szumátra",
        koordinata: "1° É, 114° K",
        terkep: "https://www.openstreetmap.org/export/embed.html?bbox=95%2C-6%2C120%2C8&layer=mapnik",
        leiras: "Délkelet-Ázsia két nagy szigetén él a világ egyik legrégebbi esőerdeje. Az olajpálma-ültetvények sok helyen kiszorították az eredeti erdőt.",
        mutatok: [["Borneó területe", "740 000 km²"], ["ország Borneón", "3"], ["növényfaj Borneón", "~15 000"]],
        fajok: ["orangután", "szumátrai tigris", "szumátrai orrszarvú", "nagyorrú majom"]
    },
    {
        nev: "Madagaszkár",
        koordinata: "18° D, 48° K",
        terkep: "https://www.openstreetmap.org/export/embed.html?bbox=42%2C-26%2C51%2C-12&layer=mapnik",
        leiras: "A sziget keleti partján maradt meg az esőerdő. Az itt élő fajok nagy része máshol a Földön nem fordul elő, ezért különösen sérülékeny.",
        mutatok: [["a sziget területe", "587 000 km²"], ["ország", "1"], ["endemikus fajok aránya", "~90%"]],
        fajok: ["indri", "ujjasmaki", "fosa", "Parson-kaméleon"]
    }
];

const lista = document.querySelector("#regiok");
const terkep = document.querySelector("#terkep");
const kepalairas = document.querySelector("#kepalairas");
const nev = document.querySelector("#nev");
const leiras = document.querySelector("#leiras");
const mutatok = document.querySelector("#mutatok");
const fajok = document.querySelector("#fajok");
let gombok;

function loadList() {
    for (let i = 0; i < regiok.length; i++) {
        lista.innerHTML += `<button type="button" class="regio d-flex align-items-baseline gap-3 w-100 text-start"><span class="nr">0${i + 1}</span><span><span class="d-block fw-semibold">${regiok[i].nev}</span><small>${regiok[i].koordinata}</small></span></button>`;
    }
    gombok = lista.querySelectorAll(".regio");
}

function showRegion(index) {
    const regio = regiok[index];
    terkep.src = regio.terkep;
    kepalairas.innerHTML = `${index + 1}. ábra. ${regio.nev}, ${regio.koordinata}. Térkép: OpenStreetMap.`;
    nev.innerHTML = regio.nev;
    leiras.innerHTML = regio.leiras;
    fajok.innerHTML = regio.fajok.join(", ");
    mutatok.innerHTML = "";
    for (let i = 0; i < regio.mutatok.length; i++) {
        mutatok.innerHTML += `<div class="adatsor d-flex justify-content-between align-items-baseline gap-3"><dt>${regio.mutatok[i][0]}</dt><dd>${regio.mutatok[i][1]}</dd></div>`;
    }
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].classList.remove("active");
    }
    gombok[index].classList.add("active");
}

function init() {
    loadList();
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener("click", function () {
            showRegion(i);
        });
    }
    showRegion(0);
}

init();