const mediaMobile = window.matchMedia("(max-width: 768px)");

const areaPrincipal = document.querySelector("main");
const botaoMenu = document.getElementById("btn-mobile");
const iconeMenu = botaoMenu.querySelector("i");
const menuMobile = document.getElementById("navbar");
const linksMenu = document.querySelectorAll("#menu a");

function controlarDesfoque(elemento) {
    elemento.classList.toggle("desfoque");
}

function controlarMenu(botaoMenu) {
    if (iconeMenu.classList.contains("fa-bars")) {
        iconeMenu.classList.replace("fa-bars", "fa-x");
    } else {
        iconeMenu.classList.replace("fa-x", "fa-bars");
    }

    controlarDesfoque(areaPrincipal);

    menuMobile.classList.toggle("active");
}

function fecharMenu() {
    if (!mediaMobile.matches) { return; }

    iconeMenu.classList.replace("fa-x", "fa-bars");

    controlarDesfoque(areaPrincipal);

    menuMobile.classList.remove("active");
}

botaoMenu.addEventListener("click", function () { controlarMenu(this); });

linksMenu.forEach(link => {
    link.addEventListener("click", fecharMenu);
});

mediaMobile.addEventListener("change", (e) => {
    if (!e.matches) {
        menuMobile.classList.remove("active");
        areaPrincipal.classList.remove("desfoque");

        iconeMenu.classList.replace("fa-x", "fa-bars");
    }
});