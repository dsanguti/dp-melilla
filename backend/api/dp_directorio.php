<?php

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