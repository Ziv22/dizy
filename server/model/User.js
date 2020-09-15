const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    address: {
        country: String,
        city: String,
        street:String,
        number: String,
        lat: Number,
        lng: Number
    },
    contactDetails: {
        phone:String,
        email:String
     },
    password: String,
    interests: [{type: Schema.Types.ObjectId, ref:"Activity"}], //reference to: activity-ids
    activites:{
        creator:[{type: Schema.Types.ObjectId, ref:"Activity"}], //reference to: activity-ids
        participant: [{type: Schema.Types.ObjectId, ref:"Activity"}] //reference to: activity-ids
}
})

const User = mongoose.model("User", UserSchema)

module.exports = User
