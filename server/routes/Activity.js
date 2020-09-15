const   express     = require("express"),
        router      = express.Router(),
        Activity    = require("../model/Activity") 

router.get('/activity', (req, res)=>{
    res.send("Welcome to Activity route")
})

module.exports = router