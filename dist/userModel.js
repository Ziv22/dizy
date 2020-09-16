class User {

    saveUserDetails = (userObj) => {
        this.firstName = userObj.firstName
        this.lastName = userObj.lastName
        this.address = userObj.address
        this.contactDetails = userObj.contactDetails
        this.password = userObj.password
        this.interests = userObj.interests 
        this.activities = userObj.activities || { creator: [], participant: [] }
    }
    /*making a get request to the server with the email & password 
    parameters and saved the user id that comes from the DB */
    getUser = async (email, password) => {
        const userInDb = await $.get(`/user/${email}/${password}`)
        if(userInDb) {
            this.saveUserDetails(userInDb)
            this.id = userInDb['_id']
            return true
        } else { 
            return false  
        }          
    }
    

    /*making a post request to the server with all the data from 
    the user and saves it to the user variables */
    createUser = async (userObj) => {
        const newUsrInDb = await $.post('/user', userObj)
        this.id = newUsrInDb['_id']
    }

    /*gets updated user object and sends a put request to the server 
    according to the user id and updates the user's variables. */
    updateUserData = async function(updatedUserObject) {
        const updatedUser = await $.ajax({
            method: 'PUT',
            url: `/user/${this.id}`,
            data: updatedUserObject
        })
    }

    /*making a post request to the server with the activities details 
    and saves it in the activities creator array */
    createActivity = async (activityObj) => {
        activityObj.creator = this.id
        const newActivity = await $.post('/activity', activityObj)
        // this.activities.creator.push(newActivity) 
    }

    /*making a put request to the server and saves the activity in the 
    user's activities praticipant array*/
    enrollToActivity= async (activityId) => {
        const newActivity = await $.ajax({
            method: 'PUT',
            url: `/activity/${this.id}/${activityId}`
        })
        
        this.activities.participant.push(newActivity)
    }

    async getAllInterests() {
        let AllInterests = await $.get('/interests')
        user.allInterests = AllInterests
        return AllInterests
    }

    /*sends a get request to the server  with the required details and 
    returns an array of the activities results  */
    async searchActivity(searchObj) {
        let queryParams = ''
        const { startDate, endDate, tags, city, name } = searchObj //if a data is not given it will send undifined
        if(startDate) {
            queryParams += `startDate=${startDate}&`
        }
        if(endDate) {
            queryParams += `endDate=${endDate}&`
        }
        if(tags) {
            const stringTags = JSON.stringify(tags)
            queryParams += `tags=${stringTags}&`
        }
        if(city) {
            queryParams += `city=${city}&`
        }
        if(name) {
            queryParams += `name=${name}&`
        }
        const requiredActivities = await $.get(`/activity/?${queryParams}`)
        this.searchedActivities = requiredActivities
    }

}