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
    try {
        const userEmail = req.params.email
        const userPassword = req.params.password
        const findUserByEmailAndPassword = User.find({ $and: [{ "contactDetails.email": userEmail }, { password: userPassword }] })

        const user = await findUserByEmailAndPassword
        res.send(user)
    }
    catch (err) {
        res.send(err)
    }
})

router.put('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const updatedData = req.body
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData)
        const savedUpdatedUser = await updatedUser.save()
        res.send(savedUpdatedUser)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router