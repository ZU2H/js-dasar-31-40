$(document).ready(function () {
    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function () {
        // e.preventDefault();

        id = $("#inputId").val();
        pelanggan = $("#inputPelanggan").val();
        alamat = $("#inputAlamat").val();
        telp = $("#inputTelp").val();

        $("#inputId").val("");
        $("#inputPelanggan").val("");
        $("#inputAlamat").val("");
        $("#inputTelp").val("");

        if (id == "") {
        insertData();
        } else {
        selectUpdate();
        }
    });

    $("#btn-tambah").click(function () {
        // e.preventDefault();
        $("#title").html("<p>Tambah Data</p>");
        $("#inputId").val("");
        $("#inputPelanggan").val("");
        $("#inputAlamat").val("");
        $("#inputTelp").val("");
    });

    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("Yakin")) {
            deleteData(id);
        }
    });

    $("tbody").on("click", ".btn-ubah", function () {
        let id = $(this).attr("data-id");
        $("#title").html("<p>Ubah Data</p>");
        selectUpdate(id);
    });

    function selectData() {
        $.ajax({
        type: "get",
        url: "php/select.php",
        chace: false,
        dataType: "json",
        success: function (response) {
            let out = "";
            let no = 1;
            $.each(response, function (key, val) {
            out += `<tr>
                        <th scope='row'>${no++}</th>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                        <td><button type="button" class="btn btn-danger btn-del" data-id="${val.idpelanggan}">DEL</button></td>
                        <td><button type="button" class="btn btn-warning btn-ubah" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${val.idpelanggan}">UBAH</button></td>
                    </tr>`;
            });
            $("#load-data").html(out);
        },
        });
    }

    function insertData(params) {
        let dataPelanggan = {
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp,
        };

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            chace: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                $("#message").html(`<p>${response}</p>`);
            },
        });
        selectData();
    }

    function deleteData(id) {
        let idPelanggan = {
            idpelanggan: id
        };

        $.ajax({
            type: "pos",
            url: "php/delete.php",
            chace: false,
            data: JSON.stringify(idPelanggan),
            success: function (response) {
                $("#message").html(`<p>${response}</p>`);
            },
        });
    }

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan: id
        };

        $.ajax({
            type: "pos",
            url: "php/select-update.php",
            chace: false,
            data: JSON.stringify(idpelanggan),
            success: function (response) {
                let data = JSON.parse(response);
                
                $("#inputId").val(data.idpelanggan);
                $("#inputPelanggan").val(data.pelanggan);
                $("#inputAlamat").val(data.alamat);
                $("#inputTelp").val(data.telp);
            },
        });
    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan: id,
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp,
        };

        $.ajax({
            type: "pos",
            url: "php/update.php",
            chace: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                $("#message").html(`<p>${response}</p>`);
            },
        });
        selectData();
    }

    selectData();
});
