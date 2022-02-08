<?php 

    require_once "connect.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data, true);

    $pelanggan = $dataPelanggan["pelanggan"];
    $alamat = $dataPelanggan["alamat"];
    $telp = $dataPelanggan["telp"];
    
    if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {
        $sql = "INSERT INTO tblpelanggan VALUES('', '$pelanggan', '$alamat', '$telp')";
        if ($result = mysqli_query($connect, $sql)) {
            echo "Berhasil";
        } else { echo "Gagal"; }
    } else { echo "Data Kosong"; }
    

?>