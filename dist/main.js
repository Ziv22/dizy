const user = new User()
const render = new Render()

const loadPage = function() {
    render.renderContent('#log-in-template')
}

$('.container-fluid').on('click', '.sign-up', function() {
    render.renderContent('#sign-up-template')
})

$('.container-fluid').on('click', '.sign-up-submit', function() {
    // render.renderContent('#sign-up-template')
})

$('.container-fluid').on('click', '.log-in-submit', function() {
    // render.renderContent('#sign-up-template')
})

loadPage()