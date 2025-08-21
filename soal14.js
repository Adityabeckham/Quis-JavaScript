function buatTiket({ nama, event, hari }) {
  // Validasi input
  if (!nama || !event) {
    return {
      tiket: null,
      valid: false
    };
  }

  // Inisial nama (huruf pertama, kapital)
  const inisialNama = nama[0].toUpperCase();

  // Mapping kode hari
  const kodeHariMap = {
    1: "SN", // Senin
    2: "SL", // Selasa
    3: "RB", // Rabu
    4: "KM", // Kamis
    5: "JM", // Jumat
    6: "SB", // Sabtu
    7: "MG"  // Minggu
  };

  const kodeHari = kodeHariMap[hari];

  // Jika hari tidak valid (di luar 1–7)
  if (!kodeHari) {
    return {
      tiket: null,
      valid: false
    };
  }

  // Format nama tiket
  const tiket = `${event}-${inisialNama}-${kodeHari}`;

  return {
    nama,
    event,
    tiket,
    valid: true
  };
}

// Contoh penggunaan
console.log(buatTiket({ nama: "budi", event: "JSConf", hari: 1 }));
console.log(buatTiket({ nama: "", event: "HackFest", hari: 5 }));

