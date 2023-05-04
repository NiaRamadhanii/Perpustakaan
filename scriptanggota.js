function cekform2(){
    //buat varibel untuk menampung inputan
    idTransaksi = document.getElementById('ID')
    nama = document.getElementById('Nama')
    jenkel = document.getElementById('jenkel')
    if(idAnggota.value==''){
        alert('ID tidak boleh kosong');
        idAnggota.focus();
        return false;
    }else if(nama.value.length <= 2){
        alert('nama minimal 2 karakter');
        nama.focus();
        return false;
    }else if(jenkel.value ==''){
        alert('jenkel belum dipilih');
        jenkel.focus();
        return false;
    }else{
        alert('terima kasih telah mengisi form')
        return true;
    }
}