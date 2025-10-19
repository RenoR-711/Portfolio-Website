// Add your javascript here
// Get the button
// Button referenzieren
const mybutton = document.getElementById("myTop");
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };  //Kein onclick="..." im HTML → keine CSP-Probleme.
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }
// Beim Scrollen prüfen, ob der Button sichtbar sein soll
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
});
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// Beim Klicken: nach oben scrollen
mybutton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// -----------------------------------------------------
// Mouse cursor gradient tracking
const btn = document.querySelector('.mouse-cursor');
if (btn) {
    // Nur einmal das BoundingRect holen und bei Mousemove aktualisieren
    document.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        // Prüfen, ob Maus innerhalb des Elements ist
        if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        ) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        } else {
            // Optional: Effekt entfernen, wenn außerhalb
            btn.style.setProperty('--x', `-9999px`);
            btn.style.setProperty('--y', `-9999px`);
        }
    });
}
//
const typeWriter = document.getElementById('typewriter-text');
const text = 'Lorem ipsum dolor sit amet.';
if (typeWriter) {
    typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length);
}
// -----------------------------------------------------
