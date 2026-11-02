var fajok = [
    { nev: "Jaguár", tipus: "allat", ikon: "bi-eye", leiras: "Amerika legnagyobb macskaféléje. Kiváló úszó, a víz közelében vadászik." },
    { nev: "Tukán", tipus: "allat", ikon: "bi-feather", leiras: "Hatalmas csőre gyümölcsszedésre és hőszabályozásra is jó. Magterjesztőként az erdő kertésze." },
    { nev: "Háromujjú lajhár", tipus: "allat", ikon: "bi-hourglass-split", leiras: "Rendkívül lassan mozog, szőrében algák élnek, amelyek zöldes álcát adnak neki." },
    { nev: "Nyílmérgező béka", tipus: "allat", ikon: "bi-droplet", leiras: "Élénk színe figyelmeztetés a ragadozóknak: a bőre mérgező anyagokat tartalmaz." },
    { nev: "Orangután", tipus: "allat", ikon: "bi-heart", leiras: "Borneó és Szumátra esőerdeiben él, a fán élő legnagyobb emlős." },
    { nev: "Kapokfa", tipus: "noveny", ikon: "bi-tree-fill", leiras: "A kiemelkedő fák egyike, 60 méter fölé is megnőhet, és számos faj otthona." },
    { nev: "Orchideák", tipus: "noveny", ikon: "bi-flower1", leiras: "Sok fajuk a fák ágain él, a nedvességet és a tápanyagot a levegőből veszi fel." },
    { nev: "Óriás tündérrózsa", tipus: "noveny", ikon: "bi-flower2", leiras: "Az Amazonas vizein úszó levelei akár két méternél is nagyobbra nőnek." },
    { nev: "Kancsóka", tipus: "noveny", ikon: "bi-funnel", leiras: "Rovarevő növény: kancsó alakú csapdájában emészti meg a zsákmányát." }
];

var lista = document.querySelector(".fajok");
var gombok = document.querySelectorAll(".szuro");

function loadFajok(tipus) {
    lista.innerHTML = "";
    for (var i = 0; i < fajok.length; i++) {
        if (tipus == "mind" || fajok[i].tipus == tipus) {
            var kategoria = fajok[i].tipus == "allat" ? "Állat" : "Növény";
            lista.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="faj-kartya">
                        <i class="bi ${fajok[i].ikon}"></i>
                        <span class="sorszam text-uppercase">${kategoria}</span>
                        <h3>${fajok[i].nev}</h3>
                        <p>${fajok[i].leiras}</p>
                    </div>
                </div>`;
        }
    }
}

function init() {
    loadFajok("mind");
    for (var i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener("click", function () {
            for (var j = 0; j < gombok.length; j++) {
                gombok[j].classList.remove("active");
            }
            this.classList.add("active");
            loadFajok(this.dataset.szuro);
        });
    }
}

init();