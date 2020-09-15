const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ActivitySchema = new Schema({
    isHappening: Boolean,
    name: String,
    image: String,
    date: Date,
    location: {
        country: String,
        city: String,
        street: String,
        number: String,
        lat: Number,
        lng: Number,
    },
    tags: [{type: Schema.Types.ObjectId, ref:"Interest"}], //reference to: tag-ids
    creator: String, //Creator Id
    participants: [{type: Schema.Types.ObjectId, ref:"User"}], //reference to: user-ids
    price: Number,
    participantLimit: Number
})

const Activity = mongoose.model("Activity", ActivitySchema)

module.exports = Activity
