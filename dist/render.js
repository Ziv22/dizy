class Render {
    renderContent = function(templateDiv, data = []) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        $('.container-fluid').empty().append(newHTML)
    }

    renderDivContent = function(templateDiv, data = []) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        console.log($('.content'))
        $('.content').empty().append(newHTML)
    }

    renderLogInError() {
        $('#error-login').css('visibility', 'visible')
    }
}
