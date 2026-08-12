const envelope = document.getElementById("envelope");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", () => {

    if (envelope.classList.contains("open")) return;

    // L'enveloppe s'éloigne en fondu (voir .envelope-wrap.open dans style.css)
    envelope.classList.add("open");

    // Le texte "Cliquez sur l'enveloppe" et le titre s'estompent en même temps
    setTimeout(() => {

        welcome.style.opacity = "0";

        setTimeout(() => {

            welcome.style.display = "none";

            invitation.classList.remove("hidden");
            invitation.style.display = "flex";

            // Fondu enchaîné fluide vers l'image d'invitation
            requestAnimationFrame(() => {
                invitation.classList.add("show");
            });

        }, 700);

    }, 500);

});
