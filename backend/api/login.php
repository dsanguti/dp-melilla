<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

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

$ldap_bind = @ldap_bind($ldap_conn, "{$username}@{$domain}", $password);

if ($ldap_bind) {
    echo json_encode(['success' => true, 'message' => 'Login successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
}

ldap_unbind($ldap_conn);
?>