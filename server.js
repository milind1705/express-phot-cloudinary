const express= require('express');
const cloudinary = require('cloudinary')
require("dotenv").config()

const app = express();
const upload = require('./multer/multer')

require("./multer/cloudinary")

//app.engine('hbs', exphbs({defaultLayout: 'main'}))
app.use(express.json())
.use(express.urlencoded({ extended: true}))

app.set('view engine', 'hbs')

app.get('/', (req, res)=> {
    res.render('home')
})

app.post('/upload', upload.single('image'),async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    res.send(result)
})

app.listen(4444, () => {
    console.log('server is started')
})