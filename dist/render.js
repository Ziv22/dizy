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
}
