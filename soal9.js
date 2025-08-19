function kategoriHari(hariKe) {
  switch (hariKe) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Kerja";
    case 6:
    case 7:
      return "Akhir Pekan";
    default:
      return "Tidak valid";
  }
}

// Uji untuk 1–7 dan cetak semua hasil
for (let i = 1; i <= 8; i++) {
  console.log(i + " → " + kategoriHari(i));
}
