const keranjang = {
    user : "Siti",
    item :  [
        { nama : "Pensil", qty : "2", harga : 1500},
           
        { nama : "Buku", qty : "1", harga : "5000"}, 
    ],
    voucher : undefined
}

//Konversi  qty dan harga ke Number
for (let i = 0; i < keranjang.item.length; i++) {
    let barang = keranjang.item[i];
    barang.qty = Number(barang.qty);
    barang.harga = Number(barang.harga);
}

//Toal = jumlah harga * qty
let total = 0;
for (let i = 0; i < keranjang.item.length; i++) {
    let barang = keranjang.item[i];
    total += barang.harga * barang.qty;
}

//Jika voucher !== undefined && voucher !== null -> diskon 10% gunakan *=
if (keranjang.voucher !== undefined && keranjang.voucher !== null) {
    total *= 0.9; // Diskon 10%
}

//Total Bayar : Rp..
console.log(`Total Bayar : Rp.${total}`);