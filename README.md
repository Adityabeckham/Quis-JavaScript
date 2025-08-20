LEARN QUIS JAVASCRIPT

Quis JAVASCRIPT by Ruang Belajar 

🧩 Soal 1 — Klasifikasi Umur & Nilai
Deskripsi:
 Buat program yang menerima nama (string), umur (string/number), dan nilai (string/number).
 Tugas:
Konversi umur & nilai ke Number.


Tambah bonus +5 ke nilai pakai +=.


Tentukan status (ternary): Lulus jika nilai ≥ 70, selain itu Tidak Lulus.


Gunakan if untuk grade:


A: ≥ 90, B: 70–89, C: 50–69, D: < 50


Cetak dengan template literal semua info.


Contoh:
Input: nama="Budi", umur="18", nilai="66"
Output:
Nama: Budi, Umur: 18, Nilai Akhir: 71, Grade: B, Status: Lulus


🧩 Soal 2 — Hari Ujian
Deskripsi:
 Buat variabel hariUjian (1–7). Tampilkan nama hari menggunakan switch.
 Jika di luar rentang, tampilkan error dengan console.error.
Contoh:
Input: hariUjian=3
Output: "Rabu"


🧩 Soal 3 — Filter Siswa Dewasa Lulus
Deskripsi:
 Diberi array siswa (object {nama, umur, nilai} minimal 5 item).
 Tugas:
Cetak hanya siswa yang (nilai ≥ 70 && umur ≥ 17).


Tampilkan dalam bentuk tabel console.table hanya kolom nama dan nilai.


Contoh (ringkas):
Output table:
| nama | nilai |
|----- |------ |
| Siti | 88    |
| Budi | 90    |


🧩 Soal 4 — Cek Properti & Tipe Data
Deskripsi:
 Diberi object profil = { nama, umur, alamat: null }.
 Tugas:
Gunakan operator in untuk memeriksa apakah alamat dan telepon ada.


Tampilkan tipe data tiap properti dengan typeof, perhatikan perbedaan null dan undefined.


Jika alamat === null, cetak "Alamat belum diisi".


Contoh:
Output:
alamat ada? true
telepon ada? false
typeof nama: string, typeof umur: number, typeof alamat: object
Alamat belum diisi


🧩 Soal 5 — Skor Rata-rata Mapel
Deskripsi:
 Buat object rapor:
{
  nama: "Andi",
  mapel: ["Matematika","Fisika","Kimia"],
  nilai: [80, "90", 70] // campuran string & number
}

Tugas:
Konversi seluruh nilai ke Number, hitung rata-rata (2 angka di belakang koma).


Jika rata-rata ≥ 85 → "Predikat: A", 70–84.99 → "B", 50–69.99 → "C", selain itu "D".


Contoh:
Output:
Rata-rata: 80.00, Predikat: B


🧩 Soal 6 — Normalisasi Input
Deskripsi:
 Diberi input dari prompt (anggap string) yang bisa berisi spasi kosong, angka tidak valid, atau kosong.
 Tugas:
Jika input kosong ("") → set undefined.


Jika setelah Number() hasilnya NaN → gunakan console.error("Input tidak valid").


Jika valid, tambahkan 10 lalu cetak nilai akhir.


Contoh:
Input: "  25  "
Output: 35


🧩 Soal 7 — Katalog Buku Sederhana
Deskripsi:
 Buat array of objects buku = [{judul, tahun, stok}, ...].
 Tugas:
Tambah properti status (ternary): "Ready" bila stok > 0, selain itu "Habis".


Gunakan if untuk menandai buku lama bila tahun < 2000.


Cetak setiap buku dalam format template literal:
 "Judul: X | (Lama/Baru) | Status: Ready/Habis"


Tampilkan ringkasan total stok.


Contoh:
Judul: Dilan | Baru | Status: Ready
Judul: Algoritma | Lama | Status: Habis
Total stok: 7


🧩 Soal 8 — Validasi Keranjang Belanja
Deskripsi:
 Buat object keranjang:
{
  user: "Siti",
  items: [
    {nama:"Pensil", qty:"2", harga:1500},
    {nama:"Buku",   qty:1,    harga:"5000"}
  ],
  voucher: undefined
}

Tugas:
Konversi qty dan harga ke Number.


Total = Σ (qty * harga).


Jika voucher ada (voucher !== undefined && voucher !== null) → diskon 10% (gunakan *=).


Cetak: "Total Bayar: RpX".


Contoh:
Output: Total Bayar: Rp8000


🧩 Soal 9 — Pemetaan Hari Kerja/Libur
Deskripsi:
 Buat fungsi kategoriHari(hariKe) yang mengembalikan:
"Kerja" untuk Senin–Jumat,


"Akhir Pekan" untuk Sabtu/Minggu,


selain itu "Tidak valid".
 Gunakan switch di dalamnya. Uji untuk 1–7 dan cetak semua hasil.


Contoh:
1 → Kerja
6 → Akhir Pekan
8 → Tidak valid


🧩 Soal 10 — Rekap Kehadiran
Deskripsi:
 Diberi array hadir = [true, false, true, "true", 1, 0, null].
 Tugas:
Anggap nilai hadir hanya true/false. Normalisasi tiap item:


"true" → true


angka 1 → true, 0 → false


null/undefined → false


Hitung total hadir & absen. Cetak ringkasannya.


Contoh:
Output: Hadir: 4, Absen: 3


🧩 Soal 11 — Login Sangat Sederhana
Deskripsi:
 Buat object akun = { username: "admin", password: "123" }.
 Tugas:
Ambil input (anggap 2 string).


Gunakan perbandingan ketat (===) untuk validasi.


Jika salah satu kosong ("") → console.error("Field kosong").


Jika cocok → "Login berhasil", jika tidak → "Login gagal".


Contoh:
Input: "admin", "123" → Login berhasil


🧩 Soal 12 — Ranking Kelas
Deskripsi:
 Diberi array of objects siswa berisi {nama, nilai}.
 Tugas:
Tambahkan nilaiBonus 5 poin untuk yang nilainya di bawah 70 (pakai +=).


Urutkan descending tanpa sort() (gunakan loop dan logika perbandingan).


Tampilkan 3 teratas dengan console.table.


Contoh:
Top 3:
| nama | nilaiAkhir |


🧩 Soal 13 — Detektor Tipe Campuran
Deskripsi:
 Diberi array campur = [123, "456", true, null, undefined, {a:1}, [1,2]].
 Tugas:
Cetak baris per elemen:


nilai, typeof, dan kategori ringkas:


"angka", "teks", "boolean", "null", "undefined", "array", "object".


(Hint: Array.isArray() untuk bedakan array dari object.)


Contoh:
123 → number → angka
"456" → string → teks
null → object → null


🧩 Soal 14 — Generator Kode Tiket
Deskripsi:
 Buat fungsi yang menerima {nama, event, hari(1–7)}:
Nama tiket: ${event}-${inisialNama}-${kodeHari}


inisialNama = huruf pertama nama (uppercase).


kodeHari dari switch: Senin=SN, Selasa=SL, … Minggu=MG.


Jika nama/event kosong → error.


Kembalikan object { tiket, valid: true/false }.


Contoh:
Input: {nama:"budi", event:"JSConf", hari:1}
Output: {tiket:"JSConf-B-SN", valid:true}


🧩 Soal 15 — Analitik Nilai Per Mapel
Deskripsi:
 Struktur:
const data = [
  {nama:"Ani", nilai:{mtk:"80", ipa:90, ing:70}},
  {nama:"Budi", nilai:{mtk:60,     ipa:"55", ing:null}},
  {nama:"Cici", nilai:{mtk:95,     ipa:87,   ing:88}}
];

Tugas:
Normalisasi seluruh nilai ke Number, null/undefined dihitung 0.


Hitung rata-rata tiap mapel (mtk, ipa, ing).


Tentukan mapel tersulit (rata-rata terendah).


Tampilkan ringkasan dengan console.log dan console.table.


Contoh:
Rata-rata: MTK=78.33, IPA=77.33, ING=52.67
Tersulit: ING


