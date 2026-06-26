document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("mainPostForm");
    const messageInput = document.getElementById("message");
    const counter = document.getElementById("counter");

    // Gestione contatore caratteri
    if (messageInput) {
        messageInput.addEventListener("input", () => {
            const remaining = 500 - messageInput.value.length;
            counter.textContent = `${remaining} characters remaining`;
        });
    }

    // Gestione invio form
    if (form) {
        form.addEventListener("submit", function(e) {
            // Qui andrebbe la logica AJAX per inviare il messaggio 
            // senza ricaricare la pagina. 
            // Per ora, assicura che il form sia valido.
            console.log("Inviando messaggio...");
        });
    }
});
