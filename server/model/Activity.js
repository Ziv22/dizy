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
    creator: {type: String}, //Creator Id
    participants: [{type: Schema.Types.ObjectId, ref:"User"}], //reference to: user-ids
    price: Number,
    participantLimit: Number
})

const Activity = mongoose.model("Activity", ActivitySchema)

module.exports = Activity
// const newActivity1 = {
//     isHappening: true,
//     name: "hhhhhhh",
//     image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
//     date: "2019-03-25",
//     location: {
//         country: "Israel",
//         city: "tel aviv",
//         street: "ben yehuda",
//         number: "21",
//         lat: 30.986003,
//         lng: 34.932547
//     },
//     tags: [], //reference to: tag-ids
//     creator: "5f609283922ac53d044c4ff9", //Creator Id
//     participants: [], //reference to: user-ids
//     price: 20,
//     participantLimit: 5
// }
// const newActivity2 = {
//     isHappening: true,
//     name: "boogliboo",
//     image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
//     date: "2021-03-25",
//     location: {
//         country: "Israel",
//         city: "tel aviv",
//         street: "ben yehuda",
//         number: "21",
//         lat: 30.986003,
//         lng: 34.932547
//     },
//     tags: ["5f61b83104b82d44a4a8e14f", "5f61b83104b82d44a4a8e150", "5f61b83104b82d44a4a8e151", "5f61b83104b82d44a4a8e152", "5f61b83104b82d44a4a8e153", "5f61b83104b82d44a4a8e154"], //reference to: tag-ids
//     creator: "5f609283922ac53d044c4ff9", //Creator Id
//     participants: [], //reference to: user-ids
//     price: 20,
//     participantLimit: 5
// }
// const newActivity3 = {
//     isHappening: true,
//     name: "baglibagli",
//     image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
//     date: "2015-03-25",
//     location: {
//         country: "Israel",
//         city: "tel aviv",
//         street: "ben yehuda",
//         number: "21",
//         lat: 30.986003,
//         lng: 34.932547
//     },
//     tags: ["5f61b83104b82d44a4a8e14b", "5f61b83104b82d44a4a8e14c", "5f61b83104b82d44a4a8e14d", "5f61b83104b82d44a4a8e14e"], //reference to: tag-ids
//     creator: "5f609283922ac53d044c4ff9", //Creator Id
//     participants: [], //reference to: user-ids
//     price: 20,
//     participantLimit: 5
// }
// const newActivity4 = {
//     isHappening: true,
//     name: "kloom lo azoov",
//     image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
//     date: "2020-09-16",
//     location: {
//         country: "Israel",
//         city: "tel aviv",
//         street: "ben yehuda",
//         number: "21",
//         lat: 30.986003,
//         lng: 34.932547
//     },
//     tags: ["5f61b83104b82d44a4a8e14a", "5f61b83104b82d44a4a8e149", "5f61b83104b82d44a4a8e155"], //reference to: tag-ids
//     creator: "5f609283922ac53d044c4ff9", //Creator Id
//     participants: [], //reference to: user-ids
//     price: 20,
//     participantLimit: 5
// }
// const dummyactivity1 = new Activity(newActivity1)

// const dummyactivity2 = new Activity(newActivity2)

// const dummyactivity3 = new Activity(newActivity3)

// const dummyactivity4 = new Activity(newActivity4)
// dummyactivity1.save()
// dummyactivity2.save()
// dummyactivity3.save()
// dummyactivity4.save()