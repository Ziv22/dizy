const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
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

const newUser = {
    name: "Dizy",
    address: {
        country: "Israel",
        city: "Tel-aviv",
        street:"Alenby",
        number: "918",
        lat: 32.062916,
        lng: 34.773433
    },
    contactDetails: {
        phone:"0524355700",
        email:"yonatanbenezra1@gmail.com"
     },
    password: "DizyYo",
    interests: [], //reference to: activity-ids
    activites:{
        creator:[], //reference to: activity-ids
        participant: [] //reference to: activity-ids
}
}
const dummyUser = new User(newUser)
// dummyUser.save()
