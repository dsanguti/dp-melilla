<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

// Obtener los datos enviados por el cliente
$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

// Validar los datos de entrada
if (empty($username) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Username and password are required']);
    exit;
}

// Conexión al servidor LDAP
$ldap_host = 'wnd.inem.es';
$ldap_port = 389; // Puerto LDAP, generalmente 389
$domain = 'sepe.es';

$ldap_conn = ldap_connect("ldap://{$ldap_host}");

if (!$ldap_conn) {
    echo json_encode(['success' => false, 'message' => 'Could not connect to LDAP server']);
    exit;
}

ldap_set_option($ldap_conn, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ldap_conn, LDAP_OPT_REFERRALS, 0);

// Intentar autenticar con LDAP
$ldap_bind = @ldap_bind($ldap_conn, "{$username}@{$domain}", $password);

if ($ldap_bind) {
    // Si la autenticación LDAP es exitosa, buscamos los datos del usuario en la base de datos

    try {
        // Conexión a la base de datos MySQL (Asegúrate de configurar tu conexión)
        $pdo = new PDO('mysql:host=localhost;dbname=dp-melilla', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Consulta para obtener los datos del usuario
        $sql = "SELECT directorio, becas, ratel, observatorio, uci, personal, sanciones, empleo, prestaciones, admin 
                FROM users WHERE username = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Asignar perfiles
        if ($user) {
            
            // Si el usuario existe, usamos los datos de la base de datos
            $profiles = [
                'directorio' => $user['directorio'] ?? 'consulta',
                'becas' => $user['becas'] ?? 'consulta',
                'ratel' => $user['ratel'] ?? 'consulta',
                'observatorio' => $user['observatorio'] ?? 'sin acceso',
                'uci' => $user['uci'] ?? 'sin acceso',
                'personal' => $user['personal'] ?? 'sin acceso',
                'sanciones' => $user['sanciones'] ?? 'sin acceso',
                'empleo' => $user['empleo'] === 'sin acceso' ? 'sin acceso' : 'consulta', // Verifica si es 'sin acceso'
                'prestaciones' => $user['prestaciones'] === 'sin acceso' ? 'sin acceso' : 'consulta', // Verifica si es 'sin acceso'
                'admin' => $user['admin'] ?? 'sin acceso'
            ];
        } else {
            // Si el usuario no existe, asignamos los valores predeterminados
            $profiles = [
                'directorio' => 'consulta',
                'becas' => 'consulta',
                'ratel' => 'consulta',
                'observatorio' => 'sin acceso',
                'uci' => 'consulta',
                'personal' => 'sin acceso',
                'sanciones' => 'sin acceso',
                'empleo' => 'consulta',
                'prestaciones' => 'consulta',
                'admin' => 'sin acceso'
            ];
        }

        // Respuesta de éxito con los perfiles
        echo json_encode([
            'success' => true,
            'message' => 'Login successful',
            'profiles' => $profiles
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }

} else {
    // Si la autenticación LDAP falla
    echo json_encode([
        'success' => false,
        'message' => 'Invalid username or password'
    ]);
}

ldap_unbind($ldap_conn);
?>
