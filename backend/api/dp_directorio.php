<?php
// Configuración de CORS
header("Access-Control-Allow-Origin: *"); // Cambia esto si necesitas otro origen
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Si es una solicitud OPTIONS (preflight), responder inmediatamente
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200); // Responde con éxito para la solicitud preflight
    exit();
}


include '../db_directorio.php';

$sql = "SELECT id, puesto, nombre, apellidos, telefono, extension, correo FROM directorio WHERE oficina = 'D.P.'";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();
?>