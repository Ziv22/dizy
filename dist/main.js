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

const loadPage = async function() {
    await user.getAllInterests()
    render.renderContent('#create-activity-template', '.container-fluid', [user])
    
}

const loadLoggedIn = async function() {
    await user.searchActivity({ tags: user.interests })
    render.renderContent('#welcome-page-template', '.container-fluid', [user])
}

$('.container-fluid').on('click', '#log-in-submit', async function() {
    const   email = $('#email-login').val(),
            password = $('#password-login').val()
    const newUser = await user.getUser(email, password)   
    if(newUser) {
        loadLoggedIn()
    }
    else {
        render.renderLogInError()
    }
})

$('.container-fluid').on('click', '.new-user', function() {
    render.renderContent('#sign-up-template' ,'.container-fluid')
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
    render.renderContent('#interest-template', '.container-fluid', user.allInterests)
})

$('.container-fluid').on('click', '#submit-sign-up', async function() {
    $('.interestCard:checked').each(function(){
        newUserObject.interests.push($(this))
    })
    user.createUser(newUserObject)
    loadLoggedIn()
})



$('.container-fluid').on('click', '#submit-activity', async () => {
    const newActivityObj = {}
    newActivityObj.name = $('#new-activity-title').val()
    newActivityObj.image = $('#new-activity-image').val()
    newActivityObj.date = $('#new-activity-date').val()
    const country = $('#new-activity-country').val()
    const city = $('#new-activity-city').val()
    const street = $('#new-activity-street').val()
    const number = $('#new-activity-number').val()
    const location = await getGeoLocation(country, city, street, number)
    newActivityObj['location'] = {country, city, street, number, location}
    newActivityObj.isHappening = true
    newActivityObj.tags = [...$("#new-activity-tag :selected")]
    for(let t in newActivityObj.tags){ newActivityObj.tags[t] = $(newActivityObj.tags[t]).val() }
    newActivityObj.creator = user.id
    newActivityObj.price = $('#new-activity-price').val()
    newActivityObj.participantsLimit = $('#new-activity-participants').val()
    user.createActivity(newActivityObj)
    render.renderActivitiyAdded(newActivityObj)
})


// $('.container-fluid').on('click', '#search-button', function(){
//     render.renderDivContent('#search-activities-template')
// })
loadPage()