const alas = prompt ('Apa alas kaki anda?(sandal/sepatu)');
const warna = prompt ('Apa warna alas anda?(merah/biru)');
const harga = prompt ('Apa harga alas anda murah?(mahal/murah)');

switch(true) {
    case (alas === 'sandal' && warna==='biru' && harga ==='murah'):
        console.log('Sandal Biru memang murah');
    break;

    case (alas === 'sepatu' && warna==='merah' && harga ==='mahal'):
     console.log('Sandal merah memang mahal');
    break;

    default:
         console.log('sepatu biru memang mahal');

}
