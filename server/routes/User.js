const { update } = require("../model/User")

const express = require("express"),
    router = express.Router(),
    User = require("../model/User")

router.post('/user', async (req, res) => {
    const user = new User(req.body),
        saveUser = await user.save()

    res.send(saveUser)
})

router.get('/user/:email/:password', async (req, res) => {
        const userEmail = req.params.email
        const userPassword = req.params.password
        const findUserByEmailAndPassword = User.findOne({ $and: [{ "contactDetails.email": userEmail }, { password: userPassword }] })
        findUserByEmailAndPassword.exec(function(err, user) {   
            if (err) {
                res.send(err)
            } else{
                res.send(user)
            }
        })
})

router.put('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const updatedData = req.body
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new : true })
        const savedUpdatedUser = await updatedUser.save()
        res.send(savedUpdatedUser)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router