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
        const   foundActivity   = await utlis.findActivityById(activityId)

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
        const activities = []
        let {startDate, endDate, tags, city, name }  = req.query
        
        // const foundActivity = await Activity.find({...req.query})
        // res.send(foundActivity)
       
        const getQuery = () =>{
            let query = `$and:[`
            if(city){
                query+= `{location.city=${city}},`
            }
            if(name){
                query += `{"name": { "$regex": ${name}, "$options": "i" },`
            }
            if(startDate  && !endDate){
                query += `{"date": $gt:{${startDate}}},`
            }
            if(startDate && endDate){
                query += `{$and:[{"date": {$gt:${startDate}}, {"date": {$lt:${endDate}}]},`
            }
            if(!startDate && endDate){
                query += `{$and:[{"date":  {$gt:${Date.now()}}, {"date": {$lt:${endDate}}]},`
            }
            query = query.slice(0,-1) + `]`
            return query
        }

        
        

        // const parsedTags =  JSON.parse(tags)
        // $and: [{"date": {$gt:startDate}, {"date": {$lt:endDate}]
        // $and: [{"date": {$gt:<<<<NOW>>>>}, {"date": {$lt:endDate}]
        // res.send(activities)
        res.send(getQuery())
    }
    catch(err){ 
        res.send(err)
    }
})

module.exports = router