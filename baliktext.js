function balikTeks(teks) {
    return teks.split('').reverse().join('');
}

// Contoh penggunaan
let kalimat = "Belajar Pemrograman";
let hasil = balikTeks(kalimat);

console.log("Asli   : " + kalimat);
console.log("Dibalik: " + hasil);