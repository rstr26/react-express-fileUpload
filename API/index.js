var express = require('express')
var cors = require('cors')
var parser = require('body-parser')
var multer = require('multer')
var port = 3001

var api = express()
var upload = multer({dest: 'uploads/'})

api.use(cors())
api.use(parser.json())


api.post('/test', upload.single('file'), (req, res) => {
    console.log(req.file)
    res.send({message: 'success'})
})


api.listen(port, () => console.log('listening on port ' + port))