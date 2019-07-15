function dataHandling2(arr) {
    arr.splice(1,2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    arr.splice(4,1, 'Pria', 'SMA Internasional Metro'); 
    console.log(arr);
    
    var tanggal = '';
    for (var i = 0 ; i < arr.length ; i++) {
    }
    tanggal += arr[3];
    var tanggalSplit = tanggal.split('/');
    var bulan = Number(tanggalSplit[1]);
    switch(bulan) {
        case 01: bulan = 'Januari'; break;
        case 02: bulan = 'Februari'; break;
        case 03: bulan = 'Maret'; break;
        case 04: bulan = 'April'; break;
        case 05: bulan = 'Mei'; break;
        case 06: bulan = 'Juni'; break;
        case 07: bulan = 'Juli'; break;
        case 08: bulan = 'Agustus'; break;
        case 09: bulan = 'September'; break;
        case 10: bulan = 'Oktober'; break;
        case 11: bulan = 'November'; break;
        case 12: bulan = 'Desember'; break;
    }
    console.log(bulan);

    console.log(tanggalSplit)
    
    tanggalSplit.sort(function(a, b){return a < b});
    console.log(tanggalSplit);

    tanggalSplit.sort(function(a, b){return a > b});
    console.log(tanggalSplit)
    




}




var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */