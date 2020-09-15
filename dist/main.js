const user = new User()
const render = new render()

const loadPage = function() {
    render.renderContent('#log-in-template')
}

$('#content').on('click', '#sign-up', function() {
    render.renderContent('#sign-up-template')
})

loadPage()