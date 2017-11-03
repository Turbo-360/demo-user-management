const pkg_json = require('./package.json')
const vertex = require('vertex360')({site_id:pkg_json.app})

// initialize app
const app = vertex.app()

// import routes
const index = require('./routes/index')
const users = require('./routes/users')

// set routes
app.use('/', index)
app.use('/users', users) // sample API Routes


module.exports = app