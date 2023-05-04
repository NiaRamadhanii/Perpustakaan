function cekform(){
    //buat varibel untuk menampung inputan
    idAnggota = document.getElementById('ID')
    idBuku = document.getElementById('ID')
    nama = document.getElementById('Nama') 
    jurusan = document.getElementById('jurusan')
    TglPinjam = document.getElementById('TglPinjam')
    if(idTransaksi.value==''){
        alert('ID tidak boleh kosong');
        idTransaksi.focus();
        return false;
    }if(idBuku.value==''){
        alert('ID tidak boleh kosong');
        idBuku.focus();
        return false;
    }else if(nama.value.length <= 2){
        alert('nama minimal 2 karakter');
        nama.focus();
        return false;
    }else if(TglPinjam.value ==''){
        alert('TglPinjam belum diisi');
        TglPinjam.focus();
        return false;
    }else{
        alert('terima kasih telah mengisi form')
        return true;
    }
}