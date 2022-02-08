if (true) {
    console.log("Kondisi dalam keadaan true");
} else {
    console.log("kondisi dalam keadaan false");
}

let nilai = 60;
let standard = 80;
let maksimal = 100;
let minimal = 0;
let lulus = "LULUS";
let mengulang = "MENGULANG";
let peringatan = "PEMALSUAN NILAI";

if (nilai >= minimal && nilai <= maksimal){``
    if (nilai >= standard) {
        console.log(lulus);
    } else {
        console.log(mengulang);
    }
} else {
    console.log(peringatan);
}
