const fs = require('fs');
const path = 'source/images/posts/diving-deeper/';
const toDelete = [
  'ens1.png',
  'ens3.png',
  'ens7.png',
  '9ens.png',
  '8ens.png',
  '7ens.png',
  '6ens.png',
  '5ens.png',
  '4ens.png',
  '3ens.png',
  '3ensnew.png',
  '11ens.png',
  '1ens.png',
  '1mdapps.png',
  '2ens.png',
  '2mapproved.png',
  '2mback.png',
  '2mclose.png',
  '2mmakerdao.png',
  '2mprocess.png',
  '2msuccess.png'
]

function deleter() {
  fs.readdirSync(path).forEach(file => {
    if(toDelete.includes(file)) {
      fs.unlinkSync(path+file)
      console.log(`${file} deleted successfully`)
    }
  })
}
deleter();