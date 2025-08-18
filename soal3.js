const siswa = [
  { nama: "Siti", umur: 18, nilai: 88 },
  { nama: "Budi", umur: 17, nilai: 90 },
];

// Filter siswa yang umur >= 17 dan nilai >= 70
const siswaLulus = siswa.filter(item => item.umur >= 17 && item.nilai >= 70);

// Ambil hanya kolom nama dan nilai
const hasil = siswaLulus.map(item => ({ nama: item.nama, nilai: item.nilai }));

// Tampilkan dalam bentuk tabel
console.table(hasil);

const siswaGagal = siswa.filter(item => item.umur < 17 || item.nilai < 70);

// Ambil hanya kolom nama dan nilai
const hasilGagal = siswaGagal.map(item => ({ nama: item.nama, nilai: item.nilai }));

// Tampilkan dalam bentuk tabel
console.table(hasilGagal);