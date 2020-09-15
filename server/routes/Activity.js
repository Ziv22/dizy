const express   = require("express")
const router    = express.Router()

router.get('/activity', (req, res)=>{
    res.send("Welcome to Activity route")
})

module.exports = router