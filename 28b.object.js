let makanan = {
    bumbu : "",
    toping:"",
    nama_makanan:""
}

function tambah_toping(nama_toping, makanan) {
    makanan.toping = nama_toping;
}

function tambah_bumbu(nama_bumbu, makanan) {
    makanan.bumbu = nama_bumbu;
}

function nama_makanan(nama_makanan, makanan) {
    makanan.nama_makanan = nama_makanan;
}

nama_makanan("Nasi Goreng", makanan)
tambah_bumbu("Masako",makanan)
tambah_toping("Bakso Goreng",makanan)

console.log(makanan);