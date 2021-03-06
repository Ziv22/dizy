const   express     = require("express"),
        router      = express.Router(),
        Activity    = require("../model/Activity"),
        User        = require("../model/User"),
        utils       = require("./utils")
        mongoose    = require('mongoose')

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
        foundUser.activities.participant.push(findingActivity)
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

        const getQuery = () =>{
            let query = {}
            query["$and"] = []
            if(city){
                query["$and"].push({"location.city":city})
            }
            if(name){
                const nameQuery = { "name": { "$regex": name, "$options": "i" } }
                query["$and"].push(nameQuery)
            }
            if(startDate  && !endDate){
                query["$and"].push({date:{"$gte":startDate}})
            }
            if(startDate && endDate){
                const dateQuery =  {"$and":[
                        {date:{
                            "$gte":startDate
                        }},
                        {date:{
                            "$lte":endDate
                        }}
                    ]}
                query["$and"].push(dateQuery)
            }
            if(!startDate && endDate){
                
                const dateQuery = {"$and":[
                        {date:{
                            "$gt":Date.now()
                        }},
                        {date:{
                            "$lte":endDate
                        }}
                    ]}
                query["$and"].push(dateQuery)
            }
            if(tags){
                const parsedTags =  JSON.parse(tags)
                let tagsQuery = {}
                tagsQuery["tags"] = {}
                tagsQuery.tags["$in"] = []
    
                parsedTags.forEach(t => {
                    tagsQuery.tags["$in"].push(mongoose.Types.ObjectId(t))
                })
                query["$and"].push(tagsQuery)
            }
            return query
        }
        const query = getQuery()
        const activities = await Activity.find(query)

        res.send(activities)
    }
    catch(err){ 
        res.send(`theres an error : ${err}`)
    }
})

module.exports = router