const envelope = document.getElementById("envelope");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", () => {

    // Empêche plusieurs clics
    if (envelope.classList.contains("open")) return;

    // Ouvre l'enveloppe
    envelope.classList.add("open");

    // Petit délai pour laisser jouer l'animation
    setTimeout(() => {

        // Fait disparaître l'écran d'accueil
        welcome.style.opacity = "0";
        welcome.style.transition = "1s";

        setTimeout(() => {

            welcome.style.display = "none";

            // Affiche l'invitation
            invitation.classList.remove("hidden");
            invitation.style.display = "flex";

            // Défilement fluide
            invitation.scrollIntoView({
                behavior: "smooth"
            });

        }, 1000);

    }, 1800);

});