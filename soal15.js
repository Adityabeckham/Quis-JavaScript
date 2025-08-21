const data = [
  { nama: "Ani",  nilai: { mtk: "80", ipa: 90,   ing: 70 } },
  { nama: "Budi", nilai: { mtk: 60,   ipa: "55", ing: null } },
  { nama: "Cici", nilai: { mtk: 95,   ipa: 87,   ing: 88 } }
];

// Inisialisasi akumulasi nilai dan jumlah siswa
const total = { mtk: 0, ipa: 0, ing: 0 };
const jumlahSiswa = data.length;

// Normalisasi dan akumulasi
data.forEach(siswa => {
  const n = siswa.nilai;
  const mtk = Number(n.mtk) || 0;
  const ipa = Number(n.ipa) || 0;
  const ing = Number(n.ing) || 0;

  // Update nilai siswa (jika ingin lihat hasil normalisasi)
  siswa.nilai = { mtk, ipa, ing };

  // Akumulasi
  total.mtk += mtk;
  total.ipa += ipa;
  total.ing += ing;
});

// Hitung rata-rata per mapel
const rata2 = {
  mtk: (total.mtk / jumlahSiswa).toFixed(2),
  ipa: (total.ipa / jumlahSiswa).toFixed(2),
  ing: (total.ing / jumlahSiswa).toFixed(2)
};

// Cari mapel tersulit (rata-rata terendah)
let tersulit = "mtk";
let minRata = rata2.mtk;

for (let mapel in rata2) {
  if (Number(rata2[mapel]) < Number(minRata)) {
    minRata = rata2[mapel];
    tersulit = mapel;
  }
}

// Output
console.log(`Rata-rata: MTK=${rata2.mtk}, IPA=${rata2.ipa}, ING=${rata2.ing}`);
console.log(`Tersulit: ${tersulit.toUpperCase()}`);

// Tabel ringkasan
console.table(rata2);
