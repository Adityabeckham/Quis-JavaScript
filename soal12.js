const siswa = [
  { nama: 'Budi', nilai: 65 },
  { nama: 'Ani', nilai: 80 },
  { nama: 'Siti', nilai: 72 },
  { nama: 'Tono', nilai: 60 },
  { nama: 'Rina', nilai: 90 },
  { nama: 'Joko', nilai: 68 }
];

// 1. Tambahkan nilai bonus 5 untuk yang nilainya < 70
siswa.forEach(bonus => {
  if (bonus.nilai < 70) {
    bonus.nilai += 5;
  }
})

// 2. Urutkan descending tanpa sort()
for (let i = 0; i < siswa.length - 1; i++) {
  for (let j = i + 1; j < siswa.length; j++) {
    if (siswa[j].nilai > siswa[i].nilai) {
      // Tukar posisi
      let temp = siswa[i];
      siswa[i] = siswa[j];
      siswa[j] = temp;
    }
  }
}

// 3. Ambil 3 teratas dan tampilkan
const top3 = siswa.slice(0, 3).map(s => ({
  nama: s.nama,
  nilaiAkhir: s.nilai
}));

console.log("Top 3:");
console.table(top3);

