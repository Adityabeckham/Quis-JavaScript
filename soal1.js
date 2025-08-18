function klasifikasi(nama, umur, nilai) {
  // Konversi umur dan nilai ke Number
  umur = Number(umur);
  nilai = Number(nilai);

  // Tambah bonus +5 ke nilai
  nilai += 5;

  // Tentukan status pakai ternary
  let status = nilai >= 70 ? "Lulus" : "Tidak Lulus";

  // Tentukan grade pakai if
  let grade;
  if (nilai >= 90) {
    grade = "A";
  } else if (nilai >= 70) {
    grade = "B";
  } else if (nilai >= 50) {
    grade = "C";
  } else {
    grade = "D";
  }

  // Cetak hasil dengan template literal
  console.log(`Nama: ${nama}, Umur: ${umur}, Nilai Akhir: ${nilai}, Grade: ${grade}, Status: ${status}`);
}

// Contoh pemanggilan
klasifikasi("Budi", "18", "66");
