const   activity    = require("./server/routes/Activity.js"),
        user        = require("./server/routes/User.js"),
        interest    = require("./server/routes/Interest.js"),
        bodyParser  = require("body-parser"),
        mongoose    = require("mongoose"),
        express     = require("express"),
        path        = require('path'),
        app         = express(),
        port        = 3000

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',activity)
app.use('/',user)
app.use('/',interest)
mongoose.connect(`mongodb+srv://Dizy:L1BIMEdBG4M5aZa2@cluster0.rfzcn.azure.mongodb.net/DizyDB?retryWrites=true&w=majority`)

app.listen(process.env.PORT || port, function(){
    console.log(`Server is up and running on port: ${port}`)
})