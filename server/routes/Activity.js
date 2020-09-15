const   express     = require("express"),
        router      = express.Router(),
        Activity    = require("../model/Activity"),
        User        = require("../model/User"),
        utils       = require("./utils")

router.post('/activity', async (req, res) =>{
    const   activity      = new Activity(req.body),
            saveActivity  = await activity.save()

    res.send(saveActivity)
})

router.put('/activity/:userId/:activityId', async (req ,res) =>{
    try{
        const   userId      = req.params.userId,
                activityId  = req.params.activityId

        const   foundUser   = utils.findUserById(userId)
        foundUser.activites.participant.push(activityId)
        const updatedUser = await foundUser.save()
        res.send(updatedUser)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/activity', (req, res)=>{
    res.send("Welcome to Activity route")
})

module.exports = router