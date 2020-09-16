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

        const   foundUser       = await utils.findUserById(userId)
        const   findingActivity = await utils.findActivityById(activityId)
        
        foundUser.activites.participant.push(findingActivity)
        findingActivity.participants.push(foundUser)

        
        await foundUser.save()
        const updatedActivity = await findingActivity.save()

        res.send(updatedActivity)
    }
    catch(err){
        res.send(err)
    }
})

router.delete('/activity/:activityId', async (req, res) =>{
    try{
        const activityId            = req.params.activityId
        const foundActivity         = await utils.findActivityById(activityId)
        foundActivity.isHappening   = false
        const deletedActivity       = await foundActivity.save()
        res.send(deletedActivity)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/activity', async (req, res)=>{
    try{
        let {startDate, endDate, tags, city, name }  = req.query
        // const parsedTags =  JSON.parse(tags)
        const getQuery = () =>{
            let query = {}
            query["$and"] = []
            if(city){
                query["$and"].push({"location.city":city})
            }
            if(name){
                query["$and"].push({name})
            }
            if(startDate  && !endDate){
                query["$and"].push({date:{"$gte":startDate}})
            }
            if(startDate && endDate){
                query["$and"].push(
                    {"$and":[
                        {date:{
                            "$gte":startDate
                        }},
                        {date:{
                            "$lte":endDate
                        }}
                    ]})
            }
            if(!startDate && endDate){
                query["$and"].push(
                    {"$and":[
                        {date:{
                            "$gt":Date.now()
                        }},
                        {date:{
                            "$lte":endDate
                        }}
                    ]})
            }
            return query
        }
        const query = getQuery()
        const activities = await Activity.find(query)

        res.send(activities)
    }
    catch(err){ 
        res.send(err)
    }
})

module.exports = router