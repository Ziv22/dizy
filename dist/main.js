const user = new User()
const render = new Render()

const geoApi = 'https://api.opencagedata.com/geocode/v1/google-v3-json?address='
const geoApiKey = 'key=ac11ef55b14243e994013f4b5df1beac'
const getGeoLocation = function(country, city, street, number) {
    const apiParams = `${number}+${street}%2C+${city}+%2C+${country}`
    $.get(`${geoApi}${apiParams}&${geoApiKey}`, function(geoLocation){
        const objToSend = { lat: geoLocation.geometry.location.lat, 
            lng: geoLocation.geometry.location.lng
        }
        return objToSend
    })
    
}

const loadPage = function() {
    render.renderContent('#log-in-template')
}

$('.container-fluid').on('click', '.sign-up', function() {
    render.renderContent('#sign-up-template')
})

$('.container-fluid').on('click', '.sign-up-submit', async function() {
    const   firstName = $('#first-name').val(),
            lastName = $('#first-name').val(),
            country = $('#country').val(),
            city = $('#city').val(),
            street = $('#street').val(),
            number = $('#number').val(),
            phone = $('#phone').val(),
            email = $('#email').val(),
            password = $('#password').val(),
            interests = $('#interests').val()

    const   address = getGeoLocation(country, city, street, number),
            contactDetails = {phone, email},
            newUserObject = {firstName, lastName, address, contactDetails, password, interests}
    
    await user.createUser(newUserObject)
    render.renderContent('#welcome-page-template', user)
})

$('.container-fluid').on('click', '.log-in-submit', async function() {
    const   email = $('#email').val(),
            password = $('#password').val()
    await user.getUser(email, password)
    render.renderContent('#welcome-page-template', user)
})

loadPage()