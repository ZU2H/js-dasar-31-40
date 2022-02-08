<?php 

    require_once "connect.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data, true);

    $idpelanggan = $idpelanggan["idpelanggan"];
    
    if (!empty($idpelanggan)) {
        $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = $idpelanggan";
        if ($result = mysqli_query($connect, $sql)) {
            echo "Berhasil";
        } else { echo "Gagal"; }
    } else { echo "Data Tidak Dipilih"; }
    

?>