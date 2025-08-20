const akun = { username : "admin", password : "123" };

// Ambik input (anggap 2 string)
const inputUsername = "admin";
const inputPassword = "123";

//Gunakan perbandingan ketat (===) untuk validasi
if (inputUsername === akun.username && inputPassword === akun.password) {
    console.log("Login Berhasil");

// Jika salah satu kosong ("") => console.error("Field Kosong")
} else if (inputUsername === "" || inputPassword === "") {
    console.error("Field Kosong");
} else {
    console.error("Login Gagal");
}

