function ubah24jam(waktu12) {
  const [waktu, ampm] = waktu12.split(' ');

  let [jam, menit, detik] = waktu.split(':');

  if (jam === '12') {
    jam = '00';
  }

  if (ampm === 'PM') {
    jam = parseInt(jam, 10) + 12;
  }

  return jam + ':' + menit +':'+ detik;
}

console.log(ubah24jam('12:00:00 AM'));
console.log(ubah24jam('02:20:23 PM'));
console.log(ubah24jam('12:00:43 PM'));
console.log(ubah24jam('12:00:56 AM'));