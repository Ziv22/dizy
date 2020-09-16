const   Activity    = require("../model/Activity"),
        User        = require("../model/User") 

const findUserById = async userId =>{
    return await User.findById(userId)
}

const findActivityById = async activityId =>{
    return await Activity.findById(activityId)
}

module.exports = {findUserById , findActivityById}