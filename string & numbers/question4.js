const x = 485;
const tahun = Math.floor(x/360);
const bulan = Math.floor((x%360)/30);
const hari = x%30
console.log('x = ' + tahun +'tahun ' + bulan + 'bulan ' + hari + 'hari');