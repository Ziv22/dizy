class Render {
    renderContent = function(templateDiv, data = []) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        $('.container-fluid').empty().append(newHTML)
    }

    renderLogInError() {
        $('#error-login').css('visibility', 'visible')
    }
}
