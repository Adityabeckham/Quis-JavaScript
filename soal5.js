const rapor ={
    nama : "Andi",
    mapel: ["Matematika","Fisika","Kimia"],
    nilai: [85, "90", 70], // Campuran tipe data string dan number
}

//konversi nilai ke Number,hitung rata-rata(2 angka dibelakang koma)
rapor.nilai = rapor.nilai.map(Number);
const rataRata = (rapor.nilai.reduce((a, b) => a + b, 0) / rapor.nilai.length).toFixed(2);

if (rataRata >= 85) {
    console.log(`Rata-rata: ${rataRata} - Predikat: A`);
} else if (rataRata >= 70) {
    console.log(`Rata-rata: ${rataRata} - Predikat: B`);
} else if (rataRata >= 50) {
    console.log(`Rata-rata: ${rataRata} - Predikat: C`);
} else {
    console.log(`Rata-rata: ${rataRata} - Predikat: D`);
}

//Tampilkan semua informasi dengan template literal nama, mapel, nilai, rata-rata
console.log(`\nInformasi Rapor:\nNama: ${rapor.nama}\nMata Pelajaran: ${rapor.mapel.join(", ")}\nNilai: ${rapor.nilai.join(", ")}\nRata-rata Nilai: ${rataRata}`);