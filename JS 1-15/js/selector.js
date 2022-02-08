const HARI = 1;
let hasil;

switch (HARI) {
    case 1:
        hasil = "Ahad";
        break;
    case 2:
        hasil = "Senin";
        break;
    case 3:
        hasil = "Selasa";
        break;
    case 4:
        hasil = "Rabu";
        break;
    case 5:
        hasil = "Kamis";
        break;
    case 6:
        hasil = "Jum'at";
        break;
    case 7:
        hasil = "Sabtu";
        break;
    default:
        hasil = "Bumi hanya tujuh hari tidak seperti mars";
        break;
}

console.log(hasil);

const BULAN = "April";
let hasil;

switch (BULAN) {
    case "Januari":
        hasil = 1;
        break;
    default:
        hasil = "Bumi hanya dua belas bulan tidak seperti mars";
}