var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
require('dotenv').config()


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse', upload.single('upfile'), (req,res)=>{
  let fileName = req.file.originalname;
  let fileType = req.file.mimetype;
  let fileSize = req.file.size;
  res.json({name: fileName, type: fileType, size: fileSize})
})