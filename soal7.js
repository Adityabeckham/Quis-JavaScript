const buku = [
  { judul: "Belajar JavaScript", tahun: 2020, stok: 5 },
  { judul: "Belajar Python", tahun: 2021, stok: 3 },
  { judul: "Belajar Java", tahun: 2019, stok: 0 },
  { judul: "Belajar C++", tahun: 1999, stok: 2 },
];

//Menambahkan properti status dan menandai lama/baru
let totalStok = 0;

for (let i = 0; i < buku.length; i++) {
  let b = buku[i];

  //Tambah properti status dengan ternary operator
  b.status = b.tahun > 0 ? "Ready" : "Habis";

  //Tandai buku lama/baru
  let umur = b.tahun >= 2020 ? "Baru" : "Lama";

  //Tampilkan informasi buku
  console.log(`Judul: ${b.judul}, | ${umur},  | Status: ${b.status}`);

  //Hitung total stok
  totalStok += b.stok;
}

// Tampilkan total stok
console.log(`Total stok buku: ${totalStok}`);

