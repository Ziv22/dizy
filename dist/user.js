class User {

    constructor() {
        this.id = ''
        this.name = ''
        this.address = {}
        this.contactDetails = {}
        this.password = ''
        this.activities = {}
        this.searchedActivities = []
    }

    saveUserDetails(userObj) {
        this.id = userObj['_id'] || ''
        this.name = userObj.name
        this.address = userObj.address
        this.contactDetails = userObj.contactDetails
        this.password = userObj.password
        this.activities = userObj.activities
    }
    /*making a get request to the server with the email & password 
    parameters and saved the user id that comes from the DB */
    async getUser(email, password) {
        const userInDb = await $.get(`/user/${email}/${password}`)
        if(userInDb.name === 'Error') {
            return false
        }
        saveUserDetails(userInDb)
        return true
    }

    /*making a post request to the server with all the data from 
    the user and saves it to the user variables */
    async createUse(userObj)  {
        saveUserDetails(userObj)
        const newUsrInDb = await $.post('/user', userObj)
        this.id = newUsrInDb['_id']
    }

    /*gets updated user object and sends a put request to the server 
    according to the user id and updates the user's variables. */
    UpdateUserData(updatedUserObject) {

    }

    /*making a post request to the server with the activities details 
    and saves it in the activities creator array */
    async createActivity(activityObj) {
        const newActivity = await $.post('/activity', activityObj)
        this.activities.creator.push(newActivity) 
    }

    /*making a put request to the server and saves the activity in the 
    user's activities praticipant array*/
    async enrollToActivity(activityId) {
        const newActivity = await $.ajax({
            method: 'PUT',
            url: `/activity/${this.id}/${activityId}`
        })
        this.activities.participant.push(newActivity)
    }

    /*sends a get request to the server  with the required details and 
    returns an array of the activities results  */
    searchActivity(searchObj) {

    }

}