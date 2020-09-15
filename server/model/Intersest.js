const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InterestSchema = new Schema({
    tagName: String
})

const Interest = mongoose.model("Interest", InterestSchema)

module.exports = Interest