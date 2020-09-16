class Render {

    renderContent = function(templateDiv, divToAppend, data = []) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        $(divToAppend).empty().append(newHTML)
    }

    renderLogInError() {
        $('#error-login').css('visibility', 'visible')
    }

    renderActivitiyAdded(activityObj) {
        $('.container-fluid').empty().append(`<h1>Your activity ${activityObj.name} has been added Successfully</h1>
        <p>You can now look for it in your profile page.</p>`)
    }
}
