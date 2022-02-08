let daftar = [
    {nama: "Rehan", sains: 92, bahasa: 92, matematika: 92},
    {nama: "Alul", sains: 94, bahasa: 82, matematika: 90},
    {nama: "Kaori", sains: 71, bahasa: 91, matematika: 82},
    {nama: "Ricardo", sains: 93, bahasa: 97, matematika: 92},
];

let nama = ["Rehan", "Alul", "Kaori", "Ricardo"];
let ismun = ["Abdul", "Alireza", "Harun"];
let num = [1, 2, 3, 4, 5];
// nama.push("Musk", "Abi")

// console.log(daftar[1].nama);
// console.log(nama);
console.log(nama.concat(ismun));

// console.log(nama.slice(2, 6));

// ismun.forEach(function (a) {
//     console.log(a);
// });

// nama.forEach((a) => console.log(a));

// daftar.filter(function(a) {
//     if (a.sains >= 80) console.log(a.nama);
// });

// daftar.filter((a) => (a.sains >= 80 && a.matematika >= 80 ? console.log(a.nama) : null));
let getsum = function (total, num) {
    return total + Math.round(num);

}

console.log(num.reduce(getsum));