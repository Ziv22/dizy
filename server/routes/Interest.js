const   express     = require("express"),
        router      = express.Router(),
        Interest    = require("../model/intersest.js")

        router.get('/interests', async (req, res)=>{
            const interests = await Interest.find({})
            res.send(interests)
        })
        
        module.exports = router