const hadir = [true, false, true, "true", 1, 0, null];

const hasil = hadir.map(item => {
  if (item === "true") return true;
  if (item === 1) return true;
  if (item === 0 || item === null || item === undefined) return false;
  return item; // true / false asli
});

const totalHadir = hasil.filter(item => item === true).length;
const totalAbsen = hasil.length - totalHadir;

console.log(`Hadir: ${totalHadir}, Absen: ${totalAbsen}`);

 