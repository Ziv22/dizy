const express = require("express"),
    router = express.Router(),
    User = require("../model/User")

router.post('/user', async (req, res) => {
    const user = new User(req.body),
        saveUser = await user.save()

    res.send(saveUser)
})

router.get('/user', (req, res) => {
    res.send("Welcome to User route")
})

module.exports = router