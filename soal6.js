function normalisasiInput(input) {
  // Trim spasi
  const trimmedInput = input.trim();

  // Cek jika kosong
  if (trimmedInput === "") {
    let nilai = undefined;
    console.log(nilai);
    return;
  }

  // Konversi ke angka
  const angka = Number(trimmedInput);

  // Cek validitas angka
  if (isNaN(angka)) {
    console.error("Input tidak valid");
    return;
  }

  // Jika valid, tambah 10 dan cetak
  console.log(angka + 10);
}

// Contoh penggunaan
normalisasiInput("  25  ");     // Output: 35
normalisasiInput("abc");        // Output: console.error("Input tidak valid")
normalisasiInput("");           // Output: undefined
normalisasiInput("   ");        // Output: undefined
normalisasiInput("100");        // Output: 110
