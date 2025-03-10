// Fungsi untuk menghitung hasil pengukuran
function calculateDiameter(mainScale, vernierScale) {
    return mainScale + (vernierScale * 0.01);  // Skala Vernier biasanya 0.01 mm
}

// Menangani form pengukuran diameter luar
document.getElementById('outer-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah halaman untuk reload saat form disubmit

    // Mengambil nilai input dari form
    var outerMainScale = parseFloat(document.getElementById('outer-main-scale').value);
    var outerVernierScale = parseFloat(document.getElementById('outer-vernier-scale').value);

    // Validasi input agar tidak kosong atau tidak valid
    if (isNaN(outerMainScale) || isNaN(outerVernierScale)) {
        alert("Mohon masukkan nilai yang valid untuk pengukuran diameter luar.");
        return;
    }

    // Menghitung diameter luar
    var outerDiameter = calculateDiameter(outerMainScale, outerVernierScale);
    // Menampilkan hasil perhitungan ke dalam elemen HTML
    document.getElementById('outer-result').innerHTML = "Diameter Luar: " + outerDiameter.toFixed(2) + " mm";
});

// Menangani form pengukuran diameter dalam
document.getElementById('inner-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah halaman untuk reload saat form disubmit

    // Mengambil nilai input dari form
    var innerMainScale = parseFloat(document.getElementById('inner-main-scale').value);
    var innerVernierScale = parseFloat(document.getElementById('inner-vernier-scale').value);

    // Validasi input agar tidak kosong atau tidak valid
    if (isNaN(innerMainScale) || isNaN(innerVernierScale)) {
        alert("Mohon masukkan nilai yang valid untuk pengukuran diameter dalam.");
        return;
    }

    // Menghitung diameter dalam
    var innerDiameter = calculateDiameter(innerMainScale, innerVernierScale);
    // Menampilkan hasil perhitungan ke dalam elemen HTML
    document.getElementById('inner-result').innerHTML = "Diameter Dalam: " + innerDiameter.toFixed(2) + " mm";
});
