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
    render.renderContent('#log-in-template')
}

$('.container-fluid').on('click', '.new-user', function() {
    render.renderContent('#sign-up-template')
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
    render.renderContent('#interest-template', allInterests)
})

$('.container-fluid').on('click', '#submit-sign-up', async function() {
    $('.interestCard:checked').each(function(){
        newUserObject.interests.push($(this).val())
    })
    user.createUser(newUserObject)
    render.renderContent('#welcome-page-template', user)
})

$('.container-fluid').on('click', '#log-in-submit', async function() {
    const   email = $('#email-login').val(),
            password = $('#password-login').val()
    const newUser = await user.getUser(email, password)
    if(newUser) {
        render.renderContent('#welcome-page-template', user)
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


$('.container-fluid').on('click', '#search-button', function(){
    render.renderDivContent('#search-activities-template')
})
loadPage()