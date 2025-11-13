<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Ungültige E-Mail-Adresse.");
    }

    $to      = "Renu711@hotmail.de";   // ← hier deine Adresse eintragen
    $subject = "Neue Nachricht von deiner Portfolio-Website";
    $body    = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.";
    } else {
        echo "Leider gab es ein Problem beim Senden der Nachricht. Bitte später nochmal versuchen.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>