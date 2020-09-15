const   activity    = require("./server/routes/Activity.js"),
        user        = require("./server/routes/User.js"),
        bodyParser  = require("body-parser"),
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


app.listen(process.env.PORT || port, function(){
    console.log(`Server is up and running on port: ${port}`)
})