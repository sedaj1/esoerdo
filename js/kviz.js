const kerdesek = [
    {
        kerdes: "Melyik a világ legnagyobb trópusi esőerdője?",
        valaszok: ["Kongói esőerdő", "Amazóniai esőerdő", "Borneói esőerdő"],
        helyes: 1
    },
    {
        kerdes: "Hol találhatók főleg a trópusi esőerdők?",
        valaszok: ["A sarkkörök közelében", "A sivatagok szélén", "Az Egyenlítő környékén"],
        helyes: 2
    },
    {
        kerdes: "Hogy hívják az esőerdő fáinak sűrű, összefüggő felső szintjét?",
        valaszok: ["Lombkoronaszint", "Aljnövényzet", "Talajszint"],
        helyes: 0
    },
    {
        kerdes: "Melyik állat él az amazóniai esőerdőben?",
        valaszok: ["Jegesmedve", "Koala", "Jaguár"],
        helyes: 2
    },
    {
        kerdes: "Mi az esőerdők pusztulásának egyik fő oka?",
        valaszok: ["Az erdőirtás", "A túl sok csapadék", "A sok madár"],
        helyes: 0
    }
];

const form = document.querySelector("#kvizForm");
const kerdesekDoboz = document.querySelector(".kerdesek");
const eredmeny = document.querySelector(".eredmeny");

function init() {
    let html = "";

    for (let i = 0; i < kerdesek.length; i++) {
        html += `
            <div class="card kerdes mb-4">
                <div class="card-body">
                    <h2>${i + 1}. ${kerdesek[i].kerdes}</h2>`;

        for (let j = 0; j < kerdesek[i].valaszok.length; j++) {
            html += `
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="k${i}" id="k${i}v${j}" value="${j}">
                        <label class="form-check-label" for="k${i}v${j}">${kerdesek[i].valaszok[j]}</label>
                    </div>`;
        }

        html += `
                </div>
            </div>`;
    }

    kerdesekDoboz.innerHTML = html;
}

function kiertekeles(e) {
    e.preventDefault();

    const kartyak = document.querySelectorAll(".kerdes");
    let pont = 0;

    for (let i = 0; i < kerdesek.length; i++) {
        if (!document.querySelector(`input[name="k${i}"]:checked`)) {
            eredmeny.innerHTML = "Válaszolj minden kérdésre!";
            return;
        }
    }

    ujrakezdes();

    for (let i = 0; i < kerdesek.length; i++) {
        const valasztott = document.querySelector(`input[name="k${i}"]:checked`);
        const helyesLabel = document.querySelector(`label[for="k${i}v${kerdesek[i].helyes}"]`);

        if (Number(valasztott.value) === kerdesek[i].helyes) {
            pont++;
            kartyak[i].classList.add("jo");
        } else {
            kartyak[i].classList.add("rossz");
            helyesLabel.classList.add("helyes");
        }
    }

    let uzenet = "Próbáld újra!";

    if (pont === kerdesek.length) {
        uzenet = "Hibátlan, igazi esőerdő-szakértő vagy!";
    } else if (pont >= 3) {
        uzenet = "Szép munka!";
    }

    eredmeny.innerHTML = `${pont} / ${kerdesek.length} pont – ${uzenet}`;
}

function ujrakezdes() {
    const kartyak = document.querySelectorAll(".kerdes");
    const helyesek = document.querySelectorAll(".helyes");

    for (let i = 0; i < kartyak.length; i++) {
        kartyak[i].classList.remove("jo", "rossz");
    }

    for (let i = 0; i < helyesek.length; i++) {
        helyesek[i].classList.remove("helyes");
    }

    eredmeny.innerHTML = "";
}

form.addEventListener("submit", kiertekeles);
form.addEventListener("reset", ujrakezdes);

init();