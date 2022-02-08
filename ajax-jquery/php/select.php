<?php 

    require_once "connect.php";

    $SQL = "SELECT * FROM tblpelanggan";
    $result = mysqli_query($connect, $SQL);

    if (mysqli_num_rows($result) > 0) {
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) { $data[] = $row; }
    }
    
    echo json_encode($data);
?>