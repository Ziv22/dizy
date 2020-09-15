const   express     = require("express"),
        router      = express.Router(),
        User        = require("../model/User") 

router.get('/user', (req, res)=>{
    res.send("Welcome to User route")
})

module.exports = router