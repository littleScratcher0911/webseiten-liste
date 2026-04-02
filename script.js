document.addEventListener("keydown", function(event) {
    // Prüfen, ob die Meta-Taste (Command auf Mac, Ctrl auf Windows) und "p" gedrückt werden
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "p") {
        event.preventDefault(); // Verhindert z.B. das Öffnen der Browser-Standardfunktion für `Cmd + B`
        window.location="https://jyrfuv.mimo.run/code.html";
        // Hier kannst du eine Aktion ausführen, z.B. eine Funktion aufrufen
    }
});
