// Program Hitung Diskon

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, resolve);
    });
}

async function program() {

    let pilihan1, pilihan2, pilihan3;
    let jumlah1, jumlah2, jumlah3;

    let namaBarang1, namaBarang2, namaBarang3;
    let harga1, harga2, harga3;

    console.log("=== DAFTAR BARANG ===");
    console.log("1. Buku   - Rp25000");
    console.log("2. Pulpen - Rp10000");
    console.log("3. Tas    - Rp150000");
    console.log("4. Sepatu - Rp300000");
    console.log("5. Jaket  - Rp200000");
    console.log("--------------------------------");

    // Input barang
    pilihan1 = parseInt(await tanya("Pilih barang ke-1 (1-5): "));
    jumlah1 = parseInt(await tanya("Jumlah barang ke-1: "));

    pilihan2 = parseInt(await tanya("Pilih barang ke-2 (1-5): "));
    jumlah2 = parseInt(await tanya("Jumlah barang ke-2: "));

    pilihan3 = parseInt(await tanya("Pilih barang ke-3 (1-5): "));
    jumlah3 = parseInt(await tanya("Jumlah barang ke-3: "));

    // Barang 1
    switch (pilihan1) {
        case 1:
            namaBarang1 = "Buku";
            harga1 = 25000;
            break;
        case 2:
            namaBarang1 = "Pulpen";
            harga1 = 10000;
            break;
        case 3:
            namaBarang1 = "Tas";
            harga1 = 150000;
            break;
        case 4:
            namaBarang1 = "Sepatu";
            harga1 = 300000;
            break;
        case 5:
            namaBarang1 = "Jaket";
            harga1 = 200000;
            break;
    }

    // Barang 2
    switch (pilihan2) {
        case 1:
            namaBarang2 = "Buku";
            harga2 = 25000;
            break;
        case 2:
            namaBarang2 = "Pulpen";
            harga2 = 10000;
            break;
        case 3:
            namaBarang2 = "Tas";
            harga2 = 150000;
            break;
        case 4:
            namaBarang2 = "Sepatu";
            harga2 = 300000;
            break;
        case 5:
            namaBarang2 = "Jaket";
            harga2 = 200000;
            break;
    }

    // Barang 3
    switch (pilihan3) {
        case 1:
            namaBarang3 = "Buku";
            harga3 = 25000;
            break;
        case 2:
            namaBarang3 = "Pulpen";
            harga3 = 10000;
            break;
        case 3:
            namaBarang3 = "Tas";
            harga3 = 150000;
            break;
        case 4:
            namaBarang3 = "Sepatu";
            harga3 = 300000;
            break;
        case 5:
            namaBarang3 = "Jaket";
            harga3 = 200000;
            break;
    }

    // Menghitung total
    let total1 = harga1 * jumlah1;
    let total2 = harga2 * jumlah2;
    let total3 = harga3 * jumlah3;

    let totalBelanja = total1 + total2 + total3;

    // Menghitung diskon
    let diskon = 0;

    if (totalBelanja >= 300000) {
        diskon = totalBelanja * 10 / 100;
    } else if (totalBelanja >= 100000) {
        diskon = totalBelanja * 5 / 100;
    } else if (totalBelanja >= 50000) {
        diskon = totalBelanja * 3 / 100;
    }

    // Total bayar
    let totalBayar = totalBelanja - diskon;

    // Menampilkan hasil
    console.log("\n=== PROGRAM HITUNG DISKON ===");
    console.log("Barang 1 :", namaBarang1, "x", jumlah1, "=", total1);
    console.log("Barang 2 :", namaBarang2, "x", jumlah2, "=", total2);
    console.log("Barang 3 :", namaBarang3, "x", jumlah3, "=", total3);
    console.log("--------------------------------");

    console.log("Total Belanja : Rp" + totalBelanja);

    if (diskon > 0) {
        console.log("Diskon        : Rp" + diskon);
        console.log("Total Bayar   : Rp" + totalBayar);
    } else {
        console.log(
            "Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan"
        );
    }

    rl.close();
}

program();