function hitungBonus() {

    let namaPelanggan =
        document.getElementById("namaPelanggan").value;

    let namaProduk =
        document.getElementById("namaProduk").value;

    let hargaProduk =
        parseInt(document.getElementById("hargaProduk").value);

    let jumlahPembelian =
        parseInt(document.getElementById("jumlahPembelian").value);

    // Validasi
    if (
        namaPelanggan === "" ||
        namaProduk === "" ||
        isNaN(hargaProduk) ||
        isNaN(jumlahPembelian)
    ) {
        alert("Semua input wajib diisi!");
        return;
    }

    // Perhitungan
    let totalBelanja = hargaProduk * jumlahPembelian;

    let potongan = 0;

    if (totalBelanja >= 400000) {
        potongan = 50000;
    }

    let totalBayar = totalBelanja - potongan;

    // Output
    document.getElementById("hasilNama").innerHTML =
        namaPelanggan;

    document.getElementById("hasilProduk").innerHTML =
        namaProduk;

    document.getElementById("hasilBelanja").innerHTML =
        "Rp " + totalBelanja.toLocaleString("id-ID");

    document.getElementById("hasilPotongan").innerHTML =
        "Rp " + potongan.toLocaleString("id-ID");

    document.getElementById("hasilBayar").innerHTML =
        "Rp " + totalBayar.toLocaleString("id-ID");

    document.getElementById("hasil").style.display = "block";
}

function resetForm() {

    document.getElementById("namaPelanggan").value = "";
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("jumlahPembelian").value = "";

    document.getElementById("hasil").style.display = "none";
}