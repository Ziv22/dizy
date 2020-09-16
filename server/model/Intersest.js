const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InterestSchema = new Schema({
    tagName: String,
    imgUrl: String
})

const Interest = mongoose.model("Interest", InterestSchema)

module.exports = Interest

// const newInterest1 = {
//     tagName: "Outdoors & Adventure",
//     imgUrl: "https://i.pinimg.com/originals/63/25/48/6325481d9a1e3000260727e19ca03759.jpg"
// }
// const newInterest2 = {
//     tagName: "Tech",
//     imgUrl: "https://www.tech-il.co.il/wp-content/uploads/2020/06/tech-indusrty-370x250.jpg"
// }
// const newInterest3 = {
//     tagName: "Family",
//     imgUrl: "https://ec.europa.eu/social/BlobServlet?mode=displayPicture&photoId=11068"
// }
// const newInterest4 = {
//     tagName: "Health & Wellness",
//     imgUrl: "https://www.srpriscanwokorie.com/wp-content/uploads/2020/03/Do-not-misuse-your-health.jpg"
// }
// const newInterest5 = {
//     tagName: "Sports & Fitness",
//     imgUrl: "https://www.vmcdn.ca/f/files/halifaxtoday/images/sports/071818-sports-equipment-recreation-gym-fitness-adobestock_190038155.jpeg;w=960"
// }
// const newInterest6 = {
//     tagName: "Learning",
//     imgUrl: "https://i0.wp.com/reachinghighernh.org/wp-content/uploads/2018/07/competency-portfolio-learning.png?fit=460%2C300&ssl=1"
// }
// const newInterest7 = {
//     tagName: "Photography",
//     imgUrl: "https://lh3.googleusercontent.com/proxy/aHznBtRnzq7aBGAtN7cSx6z6CJm8k5KkJZvRjdqYstP-gLsKKFVdo9z26R1btpB35aG6HdpWILp3YR3uTZrqDHBKk7KaxMxHgZ9BMFTeGoFS1UUR2aaL__yvj1ZLltF_Z25PePIe5gzxojigO1o2CfV_QevBTcjR"
// }
// const newInterest8 = {
//     tagName: "Food & Drink",
//     imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/15/ba/51/45/table-food-drink.jpg"
// }
// const newInterest9 = {
//     tagName: "Writing",
//     imgUrl: "https://venture-lab.org/wp-content/uploads/2019/11/writing.jpg"
// }
// const newInterest10 = {
//     tagName: "Language & Culture",
//     imgUrl: "https://s3.amazonaws.com/marstranslation.aws.bucket/default/0004/93/2de0040ba64e2863417cfe551196e1e5cb68606d.jpeg"
// }
// const newInterest11 = {
//     tagName: "Music",
//     imgUrl: "https://www.jananews.com/wp-content/uploads/2019/11/p07gq3kw.jpg"
// }
// const newInterest12 = {
//     tagName: "Movements",
//     imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJLQf319fy1WyPeafJ7N0WJR4RugK8vC7zlg&usqp=CAU"
// }
// const newInterest13 = {
//     tagName: "Film",
//     imgUrl: "https://college.unc.edu/files/2020/05/film1.jpg"
// }
// const newInterest14 = {
//     tagName: "LGBTQ",
//     imgUrl: "https://www.thetrevorproject.org/wp-content/uploads/2020/06/Supporting-Black-LGBTQ-Youth-Mental-Health-hp-revised-1880x840.png"
// }
// const newInterest16 = {
//     tagName: "Games",
//     imgUrl: "https://store.ubi.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dwa966a139/landings/2020/uplayplus_games/images_uplayplus_hero.jpg"
// }
// const newInterest17 = {
//     tagName: "Beliefs",
//     imgUrl: "https://www.eruptingmind.com/wp-content/uploads/Beliefs.png"
// }
// const newInterest18 = {
//     tagName: "Arts",
//     imgUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-large.jpg"
// }
// const newInterest19 = {
//     tagName: "Books",
//     imgUrl: "https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
// }
// const newInterest20 = {
//     tagName: "Pets",
//     imgUrl: "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/p960x960/101953422_1395642073955354_529263399637352448_o.jpg?_nc_cat=110&_nc_sid=e3f864&_nc_ohc=JsuIHHKPKTMAX_RD6aO&_nc_ht=scontent.fhfa1-1.fna&tp=6&oh=2163303150a086abacb96528747cc965&oe=5F875361"
// }

// const dummyInterest1 = new Interest(newInterest1)
// const dummyInterest2 = new Interest(newInterest2)
// const dummyInterest3 = new Interest(newInterest3)
// const dummyInterest4 = new Interest(newInterest4)
// const dummyInterest5 = new Interest(newInterest5)
// const dummyInterest6 = new Interest(newInterest6)
// const dummyInterest7 = new Interest(newInterest7)
// const dummyInterest8 = new Interest(newInterest8)
// const dummyInterest9 = new Interest(newInterest9)
// const dummyInterest10 = new Interest(newInterest10)
// const dummyInterest11= new Interest(newInterest11)
// const dummyInterest12 = new Interest(newInterest12)
// const dummyInterest13 = new Interest(newInterest13)
// const dummyInterest14 = new Interest(newInterest14)
// const dummyInterest15 = new Interest(newInterest16)
// const dummyInterest16 = new Interest(newInterest17)
// const dummyInterest17 = new Interest(newInterest18)
// const dummyInterest18 = new Interest(newInterest19)
// const dummyInterest19 = new Interest(newInterest20)

// dummyInterest1.save()
// dummyInterest2.save()
// dummyInterest3.save()
// dummyInterest4.save()
// dummyInterest5.save()
// dummyInterest6.save()
// dummyInterest7.save()
// dummyInterest8.save()
// dummyInterest9.save()
// dummyInterest10.save()
// dummyInterest11.save()
// dummyInterest12.save()
// dummyInterest13.save()
// dummyInterest14.save()
// dummyInterest15.save()
// dummyInterest16.save()
// dummyInterest17.save()
// dummyInterest18.save()
// dummyInterest19.save()












