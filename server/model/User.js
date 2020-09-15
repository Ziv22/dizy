const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    address: {
        country: String,
        city: String,
        street:String,
        lat: Number,
        lng: Number
    },
    contactDetails: {
        phone:String,
        email:String
     },
    password: String,
    interests: [], //reference to: activity-ids
    activites:{
        creator:[], //reference to: activity-ids
        participant: [] //reference to: activity-ids
}
})

const User = mongoose.model("User", UserSchema)

module.exports = User
