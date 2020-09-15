const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ActivitySchema = new Schema({
    name: String,
    isHappening: Boolean,
    name: String,
    image: String,
    date: Date,
    location: {
        country: String,
        city: String,
        street: String,
        lat: Number,
        lng: Number,
    },
    tags: [], //reference to: tag-ids
    creator: String, //Creator Id
    participants: [], //reference to: user-ids
    price: Number,
    participantLimit: Number
})

const Activity = mongoose.model("Activity", ActivitySchema)

module.exports = Activity
