const profil = { nama: "Andi", umur: 25, alamat: null };

// Cek properti dengan operator 'in'
console.log("alamat ada? " + ("alamat" in profil));
console.log("telepon ada? " + ("telepon" in profil));

// Tampilkan tipe data tiap properti
console.log(
  `typeof nama: ${typeof profil.nama}, typeof umur: ${typeof profil.umur}, typeof alamat: ${typeof profil.alamat}`
);

// Cek apakah alamat === null
if (profil.alamat === null) {
  console.log("Alamat belum diisi");
}

