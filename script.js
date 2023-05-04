function cekform(){
    //buat varibel untuk menampung inputan
    idbuku = document.getElementById('ID')
    nama = document.getElementById('Nama')
    Penerbit = document.getElementById('Penerbit')
    pengarang = document.getElementById('Pengarang')
    if(idbuku.value==''){
        alert('ID tidak boleh kosong');
        idbuku.focus();
        return false;
    }else if(nama.value.length <= 3){
        alert('nama minimal 3 karakter');
        nama.focus();
        return false;
    }else if(Penerbit.value ==''){
        alert('Penerbit belum diisi');
        Penerbit.focus();
        return false;
    }else if(pengarang.value ==''){
        alert('Pengarang belum diisi');
        pengarang.focus();
        return false;
    }else{
        alert('terima kasih telah mengisi form')
        return true;
    }
}