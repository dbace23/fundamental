const berat = prompt ('Masukan berat dalam kg');
const tinggi = prompt ('Masukan berat dalam m');
const imt = (berat/ Math.pow(tinggi,2)) ;

if (imt <= 18.5) {
    console.log ('Berat:' + berat + 'm' + ' & tinggi:' + tinggi + 'm');
    console.log ('imt anda: '+ imt + ',      Berat badan kurang');
}
else if (imt >= 18.5 && imt <= 24.9) {
    console.log ('Berat:' + berat + 'm' + ' & tinggi:' + tinggi + 'm');
    console.log('imt anda: '+ imt + ',      Berat badan anda ideal');
}
else if (imt >= 25.0 && imt <= 29.9) {
    console.log ('Berat:' + berat + 'm' + ' & tinggi:' + tinggi + 'm');
    console.log('imt anda: '+ imt + ',      Berat badan anda berlebih');
}
else if (imt >= 30.0 && imt <= 39.9) {
    console.log ('Berat:' + berat + 'm' + ' & tinggi:' + tinggi + 'm');
    console.log('imt anda: '+ imt + ',      Berat badan anda sangat berlebih');
}
else {
    console.log ('Berat:' + berat + 'm' + ' & tinggi:' + tinggi + 'm');
    console.log('imt anda: '+ imt + ',      Anda obesitas')
}
