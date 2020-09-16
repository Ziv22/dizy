class Render {
    renderContainerFluid = function(templateDiv, data = []) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        $('.container-fluid').empty().append(newHTML)
    }

    renderToContent = function(templateDiv, data = []) {
        console.log(data)
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        $('.content').empty().append(newHTML)
    }

    renderActivities = function(templateDiv, divToAppend, data = []) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template({data})
        $(divToAppend).empty().append(newHTML)
    }

    renderLogInError() {
        $('#error-login').css('visibility', 'visible')
    }
}
