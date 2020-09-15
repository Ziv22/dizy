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
        const   userId          = req.params.userId
        const   activityId      = req.params.activityId

        const   foundUser       = utils.findUserById(userId)
        const   foundActivity   = utlis.findActivityById(activityId)

        foundUser.activites.participant.push(foundUser)
        foundActivity.participants.push(foundActivity)
        
        await foundUser.save()
        const updatedActivity = await foundActivity.save()

        res.send(updatedActivity)
    }
    catch(err){
        res.send(err)
    }
})

router.delete('/activity/:activityId', async (req, res) =>{
    try{
        const activityId            = req.params.activityId
        const foundActivity         = utils.findActivityById(activityId)
        foundActivity.isHappening   = false
        const deletedActivity       = await foundActivity.save()
        res.send(deletedActivity)
    }
    catch(err){
        res.send(err)
    }
})


router.get('/activity', (req, res)=>{
    res.send("Welcome to Activity route")
})

module.exports = router