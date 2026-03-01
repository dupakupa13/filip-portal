let games = [
    ["Minecraft", "Gra survivalowa, w której budujesz i eksplorujesz świat z bloków."],
    ["GTA V", "Gra akcji w otwartym świecie z misjami i trybem online."],
    ["FIFA 26", "Symulator piłki nożnej z realistyczną grafiką i trybem kariery."],
    ["Manhunt", "Mroczna gra akcji oparta na skradaniu i brutalnym klimacie."],
    ["Fortnite", "Dynamiczna gra battle royale z budowaniem i trybem online."]
];

let ciekawostki = [
    "Minecraft jest jedną z najlepiej sprzedających się gier w historii.",
    "GTA V zarobiło miliardy dolarów w pierwszych dniach sprzedaży.",
    "Seria FIFA po FIFA 23 zmieniła nazwę na EA Sports FC.",
    "Manhunt było jedną z najbardziej kontrowersyjnych gier swoich czasów.",
    "Fortnite organizuje koncerty znanych artystów w grze."
];

function pokazgre(list) {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = "<strong>" + list[i][0] + "</strong><br>" + list[i][1];
        lista.appendChild(div);
    }
}

document.getElementById("szukaj").addEventListener("input", function() {
    let wyszukaj = this.value.toLowerCase();
    let wyszukane = [];

    for (let i = 0; i < games.length; i++) {
        if (games[i][0].toLowerCase().includes(wyszukaj)) {
            wyszukane.push(games[i]);
        }
    }

    pokazgre(wyszukane);
});

function zaloguj() {
    const login = document.getElementById("login").value;
    const powitanie = document.getElementById("powitanie");

    if (login === "") {
        powitanie.textContent = "Uzupełnij login!";
        powitanie.style.color = "red";
    } else {
        powitanie.textContent = "Witaj " + login + "!";
        powitanie.style.color = "green";
    }
}

function losowe() {
    let losowe = Math.floor(Math.random() * ciekawostki.length);
    document.getElementById("losowaciekawostka").textContent = ciekawostki[losowe];
}



function zmientlo() {

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
pokazgre(games);
losowe();