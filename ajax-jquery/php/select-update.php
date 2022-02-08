<?php 

    require_once "connect.php";

    $data = stripslashes(file_get_contents("php://input"));
    $idpelanggan = json_decode($data, true);

    $idpelanggan = $idpelanggan["idpelanggan"];

    $SQL = "SELECT * FROM tblpelanggan WHERE idpelanggan = $idpelanggan";
    $result = mysqli_query($connect, $SQL);

    $row = mysqli_fetch_assoc($result);

    echo json_encode($row);
?>