<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include '../../db_dp-melilla.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        throw new Exception("No data received");
    }

    $id = $data['id'];
    $puesto = $data['puesto'];
    $nombre = $data['nombre'];
    $apellidos = $data['apellidos'];
    $telefono = $data['telefono'];
    $extension = $data['extension'];
    $correo = $data['correo'];

    $sql = "UPDATE directorio SET puesto=?, nombre=?, apellidos=?, telefono=?, extension=?, correo=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssi", $puesto, $nombre, $apellidos, $telefono, $extension, $correo, $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        throw new Exception("Database update failed: " . $stmt->error);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
} finally {
    $conn->close();
}
?>