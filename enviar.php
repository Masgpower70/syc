<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destino = "saavedra80725@gmail.com"; // REEMPLAZA esto con tu correo real
    $contenido = "Nombre: $nombre\nCorreo: $correo\nAsunto: $asunto\nMensaje:\n$mensaje";
    $cabeceras = "From: $correo";

    if (mail($destino, $asunto, $contenido, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
