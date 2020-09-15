class Render {
    renderContent = function(templateDiv) {
        const src = $(templateDiv).html()
        const template = Handlebars.compile(src)
        const newHTML = template()
        $('.container-fluid').empty().append(newHTML)
    }
}
