const   express     = require("express"),
        router      = express.Router(),
        Activity    = require("../model/Activity") 

router.post('/activity', async (req, res) =>{
    const   activity      = new Activity(req.body),
            saveActivity  = await activity.save()
    res.send(saveActivity)
})

router.get('/activity', (req, res)=>{
    res.send("Welcome to Activity route")
})

module.exports = router