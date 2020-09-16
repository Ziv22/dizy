const user = new User()
const render = new Render()

const geoApi = 'https://api.opencagedata.com/geocode/v1/google-v3-json?'
const geoApiKey = 'key=ac11ef55b14243e994013f4b5df1beac'
const getGeoLocation = async function(country, city, street, number) {
    const apiParams = `address=${number}+${street}%2C+${city}+%2C+${country}`
    const apiRequest = await $.get(`${geoApi}${apiParams}&${geoApiKey}`) 
    const objToSend = { lat: apiRequest.results[0].geometry.location.lat, 
        lng: apiRequest.results[0].geometry.location.lng
    }
    return objToSend
}

const loadPage = function() {
    render.renderContainerFluid('#log-in-template')
}

const loadLoggedIn = async function() {
    // await user.searchActivity({ tags: user.interests })
    const activities = [
        {
            _id: "5f60bdf5258a5c2fb0a7a287",
              tags: [],
              participants: [],
              isHappening: true,
              name: 'Gogoim',
              image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
              date: "1970-01-01T00:00:00.000Z",
              location: {
                country: "Israel",
                city: "Nili",
                street: "oren",
                number: "119",
                lat: 31.965329,
                lng: 35.050868
              },
              creator: "5f609283922ac53d044c4ff9",
              price: 34,
              participantLimit: 17,
        },
        {
            _id: "5f60bdf5258a5c2fb0a7a287",
              tags: [],
              participants: [],
              isHappening: true,
              name: 'Gogoim',
              image: "https://i.ytimg.com/vi/0JV5NSyp5HY/hqdefault.jpg",
              date: "1970-01-01T00:00:00.000Z",
              location: {
                country: "Israel",
                city: "Nili",
                street: "oren",
                number: "119",
                lat: 31.965329,
                lng: 35.050868
              },
              creator: "5f609283922ac53d044c4ff9",
              price: 34,
              participantLimit: 17,
        }
    ]
    render.renderToContent('#my-profile-template', [user])
    render.renderActivities('#search-activities-template', '.creator-activities-container', user.activities.creator)
    render.renderActivities('#search-activities-template', '.participant-activities-container', user.activities.participant)
}

$('.container-fluid').on('click', '.new-user', function() {
    render.renderContainerFluid('#sign-up-template')
})

$('.container-fluid').on('click', '#next-sign-up', async function() {
    const   firstName = $('#fname').val(),
            lastName = $('#lname').val(),
            country = $('#country').val(),
            city = $('#city').val(),
            street = $('#street').val(),
            number = $('#number').val(),
            phone = $('#phone').val(),
            email = $('#email-signup').val(),
            password = $('#password-signup').val()
    
    const   address = await getGeoLocation(country, city, street, number)
    address['country'] = country
    address['city'] = city
    address['street'] = street
    address['number'] = number
    newUserObject = { firstName, lastName, address, contactDetails: {phone, email}, password, interests: []}
    user.saveUserDetails(newUserObject)
    const allInterests = await user.getAllInterests()
    render.renderContainerFluid('#interest-template', allInterests)
})

$('.container-fluid').on('click', '#submit-sign-up', async function() {
    $('.interestCard:checked').each(function(){
        newUserObject.interests.push($(this).val())
    })
    user.createUser(newUserObject)
    render.renderContainerFluid('#welcome-page-template', user)
})

$('.container-fluid').on('click', '#log-in-submit', async function() {
    const   email = $('#email-login').val(),
            password = $('#password-login').val()
    const newUser = await user.getUser(email, password)
    if(newUser) {
        render.renderContainerFluid('#welcome-page-template', user)
        loadLoggedIn()
    }
    else {
        render.renderLogInError()
    }
})

// $('.container-fluid').on('click', '.join-activity', async () => {
//     const activityId = $(this).closest('.activity').data().id
//     user.enrollToActivity(activityId)
//     render.renderContent('#welcome-page-template', user)
// })


// $('.container-fluid').on('click', '#search-button', function(){
//     render.renderDivContent('#search-activities-template')
// })
loadPage()