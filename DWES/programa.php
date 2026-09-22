<?php

$nombre = $_POST["nombre"];

if (empty($nombre)) {
    echo "El nombre está vacío";
} else {
    echo "Bienvenido " . $nombre;
}

echo "<br>Hola mundo";

?>