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

const newActivity1 = {
    isHappening: true,
    name: "Gogoim",
    image: "https://lh3.googleusercontent.com/proxy/u-ISTiQHvvRAKp7nBAD9QHhvVlzEAZ3DjiNVSi-9aFHzJDz-I5rs0AtXIG4BZLmq4xQf8cObhAR3ip3IMN2GUxASwoV1pPOdKQ",
    date: 17/09/2020,
    location: {
        country: "Israel",
        city: "Nili",
        street: "oren",
        number: "119",
        lat: 31.965329,
        lng:  35.050868,
    },
    tags: [], //reference to: tag-ids
    creator: "5f609283922ac53d044c4ff9", //Creator Id
    participants: [], //reference to: user-ids
    price: 34,
    participantLimit: 17
}

const newActivity2 = {
    isHappening: true,
    name: "Soccer-cooking",
    image: "https://noemptychairs.files.wordpress.com/2011/09/0418110891_thumb.jpg?w=640",
    date: 21/09/2020,
    location: {
        country: "Israel",
        city: "Hod Hasharon",
        street: "Moshe sharet",
        number: "12",
        lat: 32.162620,
        lng: 34.886691,
    },
    tags: [], //reference to: tag-ids
    creator: "5f609283922ac53d044c4ff9", //Creator Id
    participants: [], //reference to: user-ids
    price: 75,
    participantLimit: 4
}
const newActivity3 = {
    isHappening: true,
    name: "midrahov",
    image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
    date: 17/09/2020,
    location: {
        country: "Israel",
        city: "Herzliya",
        street: "541",
        lat: 32.161825, 
        lng:  34.837624,
    },
    tags: [], //reference to: tag-ids
    creator: "5f609283922ac53d044c4ff9", //Creator Id
    participants: [""], //reference to: user-ids
    price: 10,
    participantLimit: 10
}
const newActivity4 = {
    isHappening: true,
    name: "Muminim",
    image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
    date: 17/09/2020,
    location: {
        country: "Israel",
        city: "Yeruham",
        street: "tzvi borenshtein",
        lat: 30.986003,
        lng:  34.932547,
    },
    tags: [], //reference to: tag-ids
    creator: "5f609283922ac53d044c4ff9", //Creator Id
    participants: ["5f609283922ac53d044c4ff9"], //reference to: user-ids
    price: 10,
    participantLimit: 10
}
const newActivity5 = {
    isHappening: true,
    name: "Masheoo",
    image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
    date: 17/09/2020,
    location: {
        country: "Israel",
        city: "Yeruham",
        street: "tzvi borenshtein",
        lat: 30.986003,
        lng:  34.932547,
    },
    tags: [], //reference to: tag-ids
    creator: "5f609283922ac53d044c4ff9", //Creator Id
    participants: ["5f609283922ac53d044c4ff9"], //reference to: user-ids
    price: 10,
    participantLimit: 10
}

const dummyActivity1 = new Activity(newActivity1)
const dummyActivity2 = new Activity(newActivity2)
const dummyActivity3 = new Activity(newActivity3)



dummyActivity1.save()
dummyActivity2.save()
dummyActivity3.save()

