var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyy = today.getFullYear();
var dd1 = today.getDate()+1;
var dd2 = today.getDate()-1;

console.log('hari ini tanggal ' + dd + '-'+ mm + '-' + yyy);
console.log('besok tanggal ' + dd1 + '-'+ mm + '-' + yyy);
console.log('besok tanggal ' + dd2 + '-'+ mm + '-' + yyy);
