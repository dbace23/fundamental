const d = new Date()
const months= ['janauri', ' febuari', 'maret', 'mei', 'juni','juli', 'agustus', 'september', 'october','november','december']
const monthNOw=  d.getMonth()
let month = ''
 // console.log( ' Saat ini bulan' + (monthNOw+1) + ' : ' + months [monthNOw]);

 if (monthNOw ==0)
  month = 'januari'
 else if (monthNOw ===1)
  month = 'febuari'
  else if (monthNOw ===2)
  month = 'maret'
  else if (monthNOw ===3)
  month = 'april'
  else if (monthNOw ===4)
  month = 'mei'
  else if (monthNOw ===5)
  month = 'juni'
  else if (monthNOw ===6)
  month = 'juli'
  else if (monthNOw ===7)
  month = 'agustus'
  else if (monthNOw ===8)
  month = 'september'
  else if (monthNOw ===9)
  month = 'october'
  else if (monthNOw ===10)
  month = 'november'
  else if (monthNOw ===11)
  month = 'maret'
  else month = 'desember'
 
  console.log( ' Saat ini bulan ' + (monthNOw+1) + ' : ' + month)