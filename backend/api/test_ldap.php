<?php
$ldap_host = "wnd.inem.es";
$ldap_port = 389; // Puerto LDAP, generalmente 389

$ldap_conn = ldap_connect($ldap_host, $ldap_port);

if (!$ldap_conn) {
    die("Could not connect to LDAP server");
}

ldap_set_option($ldap_conn, LDAP_OPT_PROTOCOL_VERSION, 3);

if (ldap_bind($ldap_conn)) {
    echo "Connection to LDAP server successful";
} else {
    echo "Could not bind to LDAP server";
}

ldap_unbind($ldap_conn);
?>