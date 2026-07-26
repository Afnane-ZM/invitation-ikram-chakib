const envelope = document.getElementById("envelope");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", () => {

    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    // Lorsque la lettre est sortie
    setTimeout(() => {

        envelope.classList.add("fade-out");

    }, 1500);

    // Puis on affiche l'invitation
    setTimeout(() => {

        welcome.style.opacity = "0";

        setTimeout(() => {

            welcome.style.display = "none";

            invitation.classList.remove("hidden");
            invitation.style.display = "flex";

            requestAnimationFrame(() => {
                invitation.classList.add("show");
            });

        }, 600);

    }, 2400);

});
